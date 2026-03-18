import { Droplets, Wind, Home, Sparkles, Phone } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Window Washing",
    desc: "Crystal clear windows for homes and businesses. Interior & exterior cleaning with professional equipment.",
  },
  {
    icon: Wind,
    title: "Power Washing",
    desc: "Restore your property's curb appeal. Driveways, siding, decks, patios and more.",
  },
  {
    icon: Home,
    title: "Gutter Cleaning",
    desc: "Prevent water damage with thorough gutter cleaning and maintenance services.",
  },
  {
    icon: Sparkles,
    title: "Carpet Cleaning",
    desc: "Professional deep carpet cleaning for your home or business. Stain removal guaranteed.",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-secondary py-8 md:py-10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <p className="text-trust-blue font-bold text-xs uppercase tracking-widest mb-1">
            ✦ Our Services
          </p>
          <h2 className="text-2xl md:text-3xl font-black text-foreground leading-tight">
            Cleaning Solutions For <span className="text-accent">Every Need</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-card p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-border group"
            >
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mb-3 group-hover:bg-accent transition-colors">
                <s.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="text-base font-bold text-foreground mb-1">{s.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <a
            href="tel:+18002706228"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold px-6 py-3 rounded-lg animate-pulse-glow hover:brightness-110 transition-all"
          >
            <Phone className="w-4 h-4" />
            Get Your Free Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
