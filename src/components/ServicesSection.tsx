import { useState } from "react";
import { Droplets, Wind, Home, Phone, ArrowRight, Shield, Clock, ThumbsUp } from "lucide-react";
import QuoteFormDialog from "@/components/QuoteFormDialog";
import servicesBg from "@/assets/services-bg.webp";

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
  const [quoteOpen, setQuoteOpen] = useState(false);
  return (
    <>
    <section className="relative py-6 md:py-10 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${servicesBg})` }}
      />
      <div className="absolute inset-0 bg-white/90" />
      <div className="relative container mx-auto px-3 md:px-4">
        <div className="text-center max-w-2xl mx-auto mb-3 md:mb-5">
          <p className="text-trust-blue font-bold text-[10px] md:text-xs uppercase tracking-widest mb-1">
            ✦ Our Services
          </p>
          <h2 className="text-base md:text-2xl font-black text-foreground leading-tight">
            Cleaning Solutions For <span className="text-accent">Every Need</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 max-w-4xl mx-auto">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-navy text-navy-foreground p-3 md:p-5 rounded-xl border border-navy-foreground/10 shadow-sm hover:shadow-lg transition-all duration-300 group relative overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-accent/50 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className={`w-8 h-8 md:w-11 md:h-11 ${s.bgColor} rounded-lg flex items-center justify-center mb-1.5 md:mb-3 group-hover:scale-110 transition-transform`}>
                <s.icon className={`w-4 h-4 md:w-5 md:h-5 ${s.color}`} />
              </div>
              <h3 className="text-xs md:text-sm font-extrabold text-navy-foreground mb-0.5 md:mb-1">{s.title}</h3>
              <p className="text-navy-foreground/70 text-[10px] md:text-xs leading-relaxed mb-1.5 md:mb-3 flex-1">{s.desc}</p>
              <a href="tel:+18002706228" className="inline-flex items-center gap-1 text-accent text-[10px] md:text-xs font-bold hover:gap-2 transition-all mt-auto">
                Get Quote <ArrowRight className="w-2.5 h-2.5 md:w-3 md:h-3" />
              </a>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-6 mt-3 md:mt-5 max-w-4xl mx-auto">
          {highlights.map((h) => (
            <div key={h.text} className="flex items-center gap-1.5 text-foreground/90 justify-center">
              <h.icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent" />
              <span className="text-[10px] md:text-xs font-bold">{h.text}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-3 md:mt-5">
          <button
            onClick={() => setQuoteOpen(true)}
            className="inline-flex items-center gap-1.5 bg-accent text-accent-foreground font-bold px-4 py-2.5 md:px-6 md:py-3 rounded-lg animate-pulse-glow hover:brightness-110 transition-all text-xs md:text-sm w-full sm:w-auto justify-center"
            data-testid="button-services-quote"
          >
            <Phone className="w-3.5 h-3.5 md:w-4 md:h-4" />
            Get Your Free Quote
          </button>
        </div>
      </div>
    </section>
    <QuoteFormDialog open={quoteOpen} onOpenChange={setQuoteOpen} />
    </>
  );
};

export default ServicesSection;
