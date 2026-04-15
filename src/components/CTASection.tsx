import { useState } from "react";
import { Phone } from "lucide-react";
import QuoteFormDialog from "@/components/QuoteFormDialog";

const CTASection = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);
  return (
    <>
      <section className="bg-background py-10 md:py-20 min-h-[60vh] flex items-center">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-5xl w-full">
          <h2 className="text-2xl md:text-4xl font-black text-foreground mb-3 md:mb-4">
            Ready For Spotless Windows?
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
            Get your free estimate today. No obligation, no pressure — just honest pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <button
              onClick={() => setQuoteOpen(true)}
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-bold px-8 py-4 md:px-10 md:py-5 rounded-lg animate-pulse-glow hover:brightness-110 transition-all text-base md:text-lg w-full sm:w-auto"
            >
              <Phone className="w-5 h-5 md:w-6 md:h-6" />
              Get Your Free Quote
            </button>
            <a
              href="tel:+18002706228"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary font-bold px-8 py-4 md:px-10 md:py-5 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all text-base md:text-lg w-full sm:w-auto"
            >
              +1-800-270-6228
            </a>
          </div>
        </div>
      </section>
      <QuoteFormDialog open={quoteOpen} onOpenChange={setQuoteOpen} />
    </>
  );
};

export default CTASection;
