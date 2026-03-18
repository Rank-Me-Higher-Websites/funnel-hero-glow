import { useState } from "react";
import { Phone } from "lucide-react";
import QuoteFormDialog from "@/components/QuoteFormDialog";

const CTASection = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);
  return (
    <>
      <section className="bg-background py-6 md:py-10">
        <div className="container mx-auto px-3 md:px-4 text-center">
          <h2 className="text-xl md:text-3xl font-black text-foreground mb-2">
            Ready For Spotless Windows?
          </h2>
          <p className="text-muted-foreground text-xs md:text-sm mb-4 md:mb-5 max-w-xl mx-auto">
            Get your free estimate today. No obligation, no pressure — just honest pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 md:gap-3 justify-center">
            <button
              onClick={() => setQuoteOpen(true)}
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-bold px-6 py-3.5 md:px-8 md:py-4 rounded-lg animate-pulse-glow hover:brightness-110 transition-all text-sm w-full sm:w-auto"
            >
              <Phone className="w-4 h-4 md:w-5 md:h-5" />
              Get Your Free Quote
            </button>
            <a
              href="tel:+18002706228"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary font-bold px-6 py-3.5 md:px-8 md:py-4 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all text-sm w-full sm:w-auto"
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
