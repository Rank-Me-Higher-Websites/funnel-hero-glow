import { Phone, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="bg-primary py-16 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary-foreground mb-4">
          Ready For Spotless Windows?
        </h2>
        <p className="text-primary-foreground/70 text-lg mb-8 max-w-xl mx-auto">
          Get your free estimate today. No obligation, no pressure — just honest pricing
          from a team you can trust.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+18002706228"
            className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-bold text-lg px-10 py-5 rounded-lg animate-pulse-glow hover:brightness-110 transition-all"
          >
            <Phone className="w-5 h-5" />
            Call Now: +1-800-270-6228
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground text-primary-foreground font-bold text-lg px-10 py-5 rounded-lg hover:bg-primary-foreground hover:text-primary transition-all"
          >
            Learn More <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
