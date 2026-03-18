import { Droplets, Wind, Home, Phone, ArrowRight, Shield, Clock, ThumbsUp } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Window Washing",
    desc: "Crystal clear windows for homes and businesses. Interior & exterior cleaning with professional equipment.",
    color: "text-trust-blue",
    bgColor: "bg-trust-blue/10",
  },
  {
    icon: Wind,
    title: "Power Washing",
    desc: "Restore your property's curb appeal. Driveways, siding, decks, patios and more.",
    color: "text-trust-green",
    bgColor: "bg-trust-green/10",
  },
  {
    icon: Home,
    title: "Gutter Cleaning",
    desc: "Prevent water damage with thorough gutter cleaning and maintenance services.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
];

const highlights = [
  { icon: Shield, text: "Fully Licensed & Insured" },
  { icon: Clock, text: "Same-Day Availability" },
  { icon: ThumbsUp, text: "100% Satisfaction Guarantee" },
];

const ServicesSection = () => {
  return (
    <section className="bg-secondary py-8 md:py-10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-5">
          <p className="text-trust-blue font-bold text-xs uppercase tracking-widest mb-1">
            ✦ Our Services
          </p>
          <h2 className="text-xl md:text-2xl font-black text-foreground leading-tight">
            Cleaning Solutions For <span className="text-accent">Every Need</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-card p-5 rounded-xl border-2 border-foreground/40 shadow-sm hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-accent/50 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className={`w-11 h-11 ${s.bgColor} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                <s.icon className={`w-5 h-5 ${s.color}`} />
              </div>
              <h3 className="text-sm font-extrabold text-foreground mb-1.5">{s.title}</h3>
              <p className="text-foreground/80 text-xs leading-relaxed mb-3">{s.desc}</p>
              <a href="tel:+18002706228" className="inline-flex items-center gap-1 text-accent text-xs font-bold hover:gap-2 transition-all">
                Get Quote <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>

        {/* Highlights strip */}
        <div className="flex flex-wrap justify-center gap-6 mt-5 max-w-4xl mx-auto">
          {highlights.map((h) => (
            <div key={h.text} className="flex items-center gap-2 text-foreground/90">
              <h.icon className="w-4 h-4 text-accent" />
              <span className="text-xs font-bold">{h.text}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
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
