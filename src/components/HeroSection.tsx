import { Phone, Play, Star, CheckCircle } from "lucide-react";
import bbbBadge from "@/assets/bbb-badge.png";
import ernestLogo from "@/assets/ernest-logo.png";

const HeroSection = () => {
  return (
    <>
      {/* Top Bar with Logo */}
      <div className="bg-primary py-2">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <img src={ernestLogo} alt="Ernest Windows Logo" className="h-10 object-contain" />
          <a
            href="tel:+18002706228"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold text-sm px-4 py-2 rounded-lg hover:brightness-110 transition-all"
          >
            <Phone className="w-4 h-4" />
            +1-800-270-6228
          </a>
        </div>
      </div>

      <section className="bg-primary text-primary-foreground py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left - Copy */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 text-primary-foreground px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide">
                <Star className="w-3 h-3 fill-current" />
                #1 Rated in Chicagoland
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] text-primary-foreground">
                Crystal Clear Windows.{" "}
                <span className="text-accent">Guaranteed.</span>
              </h1>

              <p className="text-sm text-primary-foreground/70 max-w-lg leading-relaxed">
                Ernest Windows has been providing five-star cleaning services to
                Chicagoland residents and businesses since 2003. Window washing,
                power washing, gutter cleaning & carpet cleaning.
              </p>

              <div className="grid grid-cols-2 gap-2">
                {[
                  "Free Estimates",
                  "Available 24/7",
                  "100% Satisfaction",
                  "Licensed & Insured",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-trust-green flex-shrink-0" />
                    <span className="font-semibold text-primary-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <a
                  href="tel:+18002706228"
                  className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-bold px-6 py-3 rounded-lg animate-pulse-glow hover:brightness-110 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  Get Your Free Quote
                </a>
                <a
                  href="tel:+18002706228"
                  className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground text-primary-foreground font-bold px-6 py-3 rounded-lg hover:bg-primary-foreground hover:text-primary transition-all"
                >
                  +1-800-270-6228
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center gap-4 pt-3 border-t border-primary-foreground/20">
                <img src={bbbBadge} alt="BBB Accredited Business A+ Rating" className="h-10 object-contain" />
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                  ))}
                  <span className="ml-1 text-xs font-semibold text-muted-foreground">
                    4.9/5 (500+ Reviews)
                  </span>
                </div>
              </div>
            </div>

            {/* Right - VSL Video */}
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-primary/10 aspect-video bg-navy flex items-center justify-center cursor-pointer group">
                <div className="absolute inset-0 bg-foreground/80 z-10" />
                <div className="relative z-20 flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <Play className="w-7 h-7 text-accent-foreground fill-current ml-1" />
                  </div>
                  <p className="text-primary-foreground font-bold text-sm">
                    Watch How We Work
                  </p>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="flex justify-center gap-4 mt-3">
                <div className="bg-trust-blue text-primary-foreground px-4 py-2 rounded-lg shadow-md text-center">
                  <div className="text-xl font-black">22+</div>
                  <div className="text-[10px] font-semibold opacity-90">Years Experience</div>
                </div>
                <div className="bg-accent text-accent-foreground px-4 py-2 rounded-lg shadow-md text-center">
                  <div className="text-xl font-black">100k+</div>
                  <div className="text-[10px] font-semibold opacity-90">Projects Done</div>
                </div>
                <div className="bg-trust-green text-primary-foreground px-4 py-2 rounded-lg shadow-md text-center">
                  <div className="text-xl font-black">500+</div>
                  <div className="text-[10px] font-semibold opacity-90">5-Star Reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
