import { useState } from "react";
import { Droplets, Wind, Home, Phone, ArrowRight, Shield, Clock, ThumbsUp } from "lucide-react";
import QuoteFormDialog from "@/components/QuoteFormDialog";
import servicesBg from "@/assets/services-bg.png";

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
    <section className="relative py-10 md:py-20 overflow-hidden min-h-[60vh] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${servicesBg})` }}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative container mx-auto px-4 md:px-6 w-full">
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-10">
          <p className="text-trust-blue font-bold text-xs md:text-sm uppercase tracking-widest mb-2">
            ✦ Our Services
          </p>
          <h2 className="text-2xl md:text-4xl font-black text-white leading-tight" style={{ textShadow: "0 2px 6px rgba(0,0,0,0.5)" }}>
            Cleaning Solutions For <span className="text-accent">Every Need</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 max-w-5xl mx-auto">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-navy text-navy-foreground p-5 md:p-7 rounded-xl border border-navy-foreground/10 shadow-sm hover:shadow-lg transition-all duration-300 group relative overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-accent/50 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className={`w-11 h-11 md:w-14 md:h-14 ${s.bgColor} rounded-lg flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform`}>
                <s.icon className={`w-5 h-5 md:w-7 md:h-7 ${s.color}`} />
              </div>
              <h3 className="text-sm md:text-lg font-extrabold text-navy-foreground mb-1 md:mb-2">{s.title}</h3>
              <p className="text-navy-foreground/70 text-xs md:text-sm leading-relaxed mb-3 md:mb-4 flex-1">{s.desc}</p>
              <a href="tel:+18002706228" className="inline-flex items-center gap-1.5 text-accent text-xs md:text-sm font-bold hover:gap-2.5 transition-all mt-auto">
                Get Quote <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-6 md:mt-8 max-w-5xl mx-auto">
          {highlights.map((h) => (
            <div key={h.text} className="flex items-center gap-2 text-white/90 justify-center">
              <h.icon className="w-4 h-4 md:w-5 md:h-5 text-accent" />
              <span className="text-xs md:text-sm font-bold">{h.text}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-6 md:mt-8">
          <button
            onClick={() => setQuoteOpen(true)}
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold px-6 py-3 md:px-8 md:py-4 rounded-lg animate-pulse-glow hover:brightness-110 transition-all text-sm md:text-base w-full sm:w-auto justify-center"
            data-testid="button-services-quote"
          >
            <Phone className="w-4 h-4 md:w-5 md:h-5" />
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
