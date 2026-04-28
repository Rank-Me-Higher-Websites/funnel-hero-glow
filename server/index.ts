import express, { type Request, type Response, type NextFunction } from "express";
import pg from "pg";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(express.json({ limit: "100kb" }));

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });

app.post("/api/leads", async (req: Request, res: Response) => {
  try {
    const { fullName, email, phone, service, address, details, source } = req.body || {};
    if (!fullName || !email || !phone) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    const result = await pool.query(
      `INSERT INTO leads (full_name, email, phone, service, address, details, source)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING id, created_at`,
      [
        String(fullName).slice(0, 255),
        String(email).slice(0, 255),
        String(phone).slice(0, 50),
        service ? String(service).slice(0, 100) : null,
        address ? String(address).slice(0, 500) : null,
        details ? String(details).slice(0, 2000) : null,
        source ? String(source).slice(0, 50) : null,
      ]
    );
    res.json({ ok: true, id: result.rows[0].id });
  } catch (err) {
    console.error("[/api/leads POST] error:", err);
    res.status(500).json({ error: "Internal error" });
  }
});

const requireAdmin = (req: Request, res: Response, next: NextFunction) => {
  const token = process.env.ADMIN_TOKEN;
  const provided = req.header("x-admin-token") || (req.query.token as string | undefined);
  if (!token || provided !== token) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
};

app.get("/api/leads", requireAdmin, async (_req: Request, res: Response) => {
  try {
    const result = await pool.query(
      `SELECT id, full_name, email, phone, service, address, details, source, created_at
       FROM leads ORDER BY created_at DESC LIMIT 1000`
    );
    res.json({ leads: result.rows });
  } catch (err) {
    console.error("[/api/leads GET] error:", err);
    res.status(500).json({ error: "Internal error" });
  }
});

const PORT = Number(process.env.PORT) || 5000;
const isDev = process.env.NODE_ENV !== "production";

async function start() {
  if (isDev) {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true, host: "0.0.0.0", allowedHosts: true },
      appType: "spa",
      root: path.resolve(__dirname, ".."),
    });
    app.use(vite.middlewares);
  } else {
    const distDir = path.resolve(__dirname, "..", "dist", "public");
    app.use(express.static(distDir));
    app.use((req: Request, res: Response, next: NextFunction) => {
      if (req.path.startsWith("/api/")) return next();
      res.sendFile(path.resolve(distDir, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[server] listening on http://0.0.0.0:${PORT} (${isDev ? "dev" : "production"})`);
  });
}

start().catch((err) => {
  console.error("[server] failed to start:", err);
  process.exit(1);
});
