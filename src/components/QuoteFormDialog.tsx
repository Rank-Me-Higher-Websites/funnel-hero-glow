import { useState, useEffect } from "react";
import { Phone, X } from "lucide-react";

const trackLead = () => {
  const tryFire = (attempt = 0) => {
    if (typeof window === "undefined") return;
    const fbq = (window as any).fbq;
    if (typeof fbq === "function") {
      fbq("track", "Lead");
      console.log("[Pixel] Lead event fired");
    } else if (attempt < 10) {
      setTimeout(() => tryFire(attempt + 1), 300);
    } else {
      console.warn("[Pixel] fbq never loaded — Lead not fired");
    }
  };
  tryFire();
};

const services = [
  "Window Cleaning",
  "Power Washing",
  "Gutter Cleaning",
];

interface QuoteFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const QuoteFormDialog = ({ open, onOpenChange }: QuoteFormDialogProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    address: "",
    details: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (open) trackLead();
  }, [open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    trackLead();
    try {
      await fetch("https://cdlagency.app.n8n.cloud/webhook/99751654-d1ae-4535-81fb-2e858e1c5220", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "no-cors",
        body: JSON.stringify(formData),
      });
      onOpenChange(false);
      setFormData({ fullName: "", email: "", phone: "", service: "", address: "", details: "" });
    } catch (err) {
      console.error("Webhook error:", err);
    } finally {
      setSubmitting(false);
    }
  };

  if (!open) return null;

  const inputClass =
    "w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent";

  return (
    <div className="fixed inset-0 z-50">
      <div className="fixed inset-0 bg-black/60" onClick={() => onOpenChange(false)} />
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-2rem)] max-w-md bg-white rounded-xl shadow-2xl z-50 max-h-[85vh] overflow-y-auto">
        <div className="p-5 md:p-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-black text-gray-900 flex items-center gap-2">
              <Phone className="w-4 h-4 text-accent" />
              Get Your Free Quote
            </h2>
            <button onClick={() => onOpenChange(false)} className="p-1 rounded-full hover:bg-gray-100">
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
          <p className="text-gray-500 text-xs mb-4">Fill out the form and we'll get back to you ASAP.</p>

          <form onSubmit={handleSubmit} className="space-y-2.5">
            <input name="fullName" placeholder="Full Name" required maxLength={100} value={formData.fullName} onChange={handleChange} className={inputClass} />
            <input name="email" type="email" placeholder="Email" required maxLength={255} value={formData.email} onChange={handleChange} className={inputClass} />
            <input name="phone" type="tel" placeholder="Phone Number" required maxLength={20} value={formData.phone} onChange={handleChange} className={inputClass} />
            <select name="service" required value={formData.service} onChange={handleChange} className={inputClass}>
              <option value="" disabled>Select Service Needed</option>
              {services.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <input name="address" placeholder="Address" required maxLength={200} value={formData.address} onChange={handleChange} className={inputClass} />
            <textarea name="details" placeholder="House Details (optional)" maxLength={1000} rows={2} value={formData.details} onChange={handleChange} className={inputClass} />
            <button
              type="submit"
              disabled={submitting}
              onClick={() => {
                if (typeof window !== "undefined" && (window as any).fbq) {
                  (window as any).fbq("track", "Lead");
                }
              }}
              className="w-full bg-accent text-accent-foreground font-bold py-3 rounded-lg hover:brightness-110 transition-all disabled:opacity-50 text-sm"
            >
              {submitting ? "Sending..." : "Submit Request"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuoteFormDialog;
