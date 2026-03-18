import { useState } from "react";
import { Phone } from "lucide-react";
import QuoteFormDialog from "@/components/QuoteFormDialog";

const CTASection = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);
  return (
    <>
      <section className="bg-background py-8 md:py-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-2">
            Ready For Spotless Windows?
          </h2>
          <p className="text-muted-foreground text-sm mb-5 max-w-xl mx-auto">
            Get your free estimate today. No obligation, no pressure — just honest pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => setQuoteOpen(true)}
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-bold px-8 py-4 rounded-lg animate-pulse-glow hover:brightness-110 transition-all"
            >
              <Phone className="w-5 h-5" />
              Get Your Free Quote
            </button>
            <a
              href="tel:+18002706228"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary font-bold px-8 py-4 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all"
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
