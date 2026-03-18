import { Droplets, Wind, Home, Sparkles } from "lucide-react";

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
    <section className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-trust-blue font-bold text-sm uppercase tracking-widest mb-3">
            ✦ Special Services
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-tight">
            Quality Cleaning Solutions For{" "}
            <span className="text-accent">Every Need</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            We take pride in our work and stand by our 100% satisfaction guarantee.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-card p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-border group"
            >
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                <s.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="tel:+18002706228"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold text-lg px-8 py-4 rounded-lg hover:brightness-110 transition-all"
          >
            See All Services →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
