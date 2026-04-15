import { useState } from "react";
import { Phone, Play, Star, CheckCircle } from "lucide-react";
import bbbBadge from "@/assets/bbb-badge.png";
import ernestLogo from "@/assets/ernest-logo.png";
import heroBg from "@/assets/hero-bg.webp";
import QuoteFormDialog from "@/components/QuoteFormDialog";

const HeroSection = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);
  return (
    <>
      {/* Top Bar with Logo */}
      <div className="bg-accent py-1.5 md:py-2">
        <div className="container mx-auto px-3 md:px-4 flex items-center justify-between">
          <img src={ernestLogo} alt="Ernest Windows Logo" className="h-10 md:h-16 object-contain" />
          <div className="flex items-center gap-2">
            <button
              onClick={() => setQuoteOpen(true)}
              className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground font-bold text-xs md:text-sm px-3 py-1.5 md:px-4 md:py-2 rounded-lg hover:brightness-110 transition-all"
            >
              Get Your Free Quote
            </button>
            <a
              href="tel:+18002706228"
              className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground font-bold text-xs md:text-sm px-3 py-1.5 md:px-4 md:py-2 rounded-lg hover:brightness-110 transition-all"
            >
              <Phone className="w-3.5 h-3.5 md:w-4 md:h-4" />
              <span className="hidden sm:inline">+1-800-270-6228</span>
              <span className="sm:hidden">Call Now</span>
            </a>
          </div>
        </div>
      </div>

      <section className="relative bg-primary text-primary-foreground py-6 md:py-28 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative container mx-auto px-3 md:px-4">
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-center">
            {/* VSL Video - Shows FIRST on mobile */}
            <div className="relative order-1 md:order-2">
              <div className="relative rounded-xl overflow-hidden shadow-2xl border-2 md:border-4 border-primary/10 aspect-video bg-navy flex items-center justify-center cursor-pointer group">
                <div className="absolute inset-0 bg-foreground/80 z-10" />
                <div className="relative z-20 flex flex-col items-center gap-2 md:gap-3">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <Play className="w-5 h-5 md:w-7 md:h-7 text-accent-foreground fill-current ml-0.5" />
                  </div>
                  <p className="text-primary-foreground font-bold text-xs md:text-sm">
                    Watch How We Work
                  </p>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="flex justify-center gap-2 md:gap-4 mt-2 md:mt-3">
                <div className="bg-accent text-accent-foreground px-3 py-1.5 md:px-4 md:py-2 rounded-lg shadow-md text-center">
                  <div className="text-base md:text-xl font-black">22+</div>
                  <div className="text-[9px] md:text-[10px] font-semibold opacity-90">Years Exp.</div>
                </div>
                <div className="bg-accent text-accent-foreground px-3 py-1.5 md:px-4 md:py-2 rounded-lg shadow-md text-center">
                  <div className="text-base md:text-xl font-black">100k+</div>
                  <div className="text-[9px] md:text-[10px] font-semibold opacity-90">Projects</div>
                </div>
                <div className="bg-accent text-accent-foreground px-3 py-1.5 md:px-4 md:py-2 rounded-lg shadow-md text-center">
                  <div className="text-base md:text-xl font-black">500+</div>
                  <div className="text-[9px] md:text-[10px] font-semibold opacity-90">5-Star Reviews</div>
                </div>
                <div className="bg-accent text-accent-foreground px-3 py-1.5 md:px-4 md:py-2 rounded-lg shadow-md text-center">
                  <div className="text-base md:text-xl font-black">89</div>
                  <div className="text-[9px] md:text-[10px] font-semibold opacity-90">Expert Workers</div>
                </div>
              </div>
            </div>

            {/* Copy + CTAs - Shows SECOND on mobile */}
            <div className="space-y-3 md:space-y-4 order-2 md:order-1">
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 text-primary-foreground px-2.5 py-1 md:px-3 md:py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wide">
                <Star className="w-3 h-3 fill-current" />
                #1 Rated in Chicagoland
              </div>

              <h1 className="text-2xl md:text-4xl lg:text-5xl font-black leading-[1.1] text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                Crystal Clear Windows.{" "}
                <span className="text-accent">Guaranteed.</span>
              </h1>

              <p className="text-xs md:text-sm text-white/90 max-w-lg leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                Ernest Windows has been providing five-star cleaning services to
                Chicagoland residents and businesses since 2003. Window washing,
                power washing, gutter cleaning & carpet cleaning.
              </p>

              <div className="grid grid-cols-2 gap-1.5 md:gap-2">
                {[
                  "Free Estimates",
                  "Available 24/7",
                  "100% Satisfaction",
                  "Licensed & Insured",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-1.5 md:gap-2">
                    <CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-trust-green flex-shrink-0" />
                    <span className="font-bold text-white text-xs md:text-sm drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-2 md:gap-3 pt-1">
                <button
                  onClick={() => setQuoteOpen(true)}
                  className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-bold px-5 py-3 md:px-6 md:py-3 rounded-lg animate-pulse-glow hover:brightness-110 transition-all text-sm"
                >
                  <Phone className="w-4 h-4" />
                  Get Your Free Quote
                </button>
                <a
                  href="tel:+18002706228"
                  className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground text-primary-foreground font-bold px-5 py-3 md:px-6 md:py-3 rounded-lg hover:bg-primary-foreground hover:text-primary transition-all text-sm"
                >
                  +1-800-270-6228
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center gap-3 md:gap-4 pt-2 md:pt-3 border-t border-primary-foreground/20">
                <img src={bbbBadge} alt="BBB Accredited Business A+ Rating" className="h-8 md:h-10 object-contain" />
                <div className="flex items-center gap-0.5 md:gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent fill-accent" />
                  ))}
                  <span className="ml-1 text-[10px] md:text-xs font-semibold text-primary-foreground/70">
                    4.9/5 (500+ Reviews)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <QuoteFormDialog open={quoteOpen} onOpenChange={setQuoteOpen} />
    </>
  );
};

export default HeroSection;
