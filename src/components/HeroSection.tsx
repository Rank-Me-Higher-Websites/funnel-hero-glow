import { Phone, Play, Shield, Star, CheckCircle, Award, ThumbsUp } from "lucide-react";
import bbbBadge from "@/assets/bbb-badge.png";
import ernestLogo from "@/assets/ernest-logo.png";

const HeroSection = () => {
  return (
    <section className="bg-background py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left - Copy */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-secondary text-trust-blue px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
              <Star className="w-4 h-4 fill-current" />
              #1 Rated in Chicagoland
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] text-foreground">
              Crystal Clear Windows.{" "}
              <span className="text-accent">Guaranteed.</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Ernest Windows has been providing five-star cleaning services to
              Chicagoland residents and businesses since 2003. Window washing,
              power washing, gutter cleaning & carpet cleaning.
            </p>

            <div className="space-y-3">
              {[
                "Free Estimates & Consultations",
                "Available 24/7",
                "100% Satisfaction Guarantee",
                "Fully Licensed & Insured",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-trust-green flex-shrink-0" />
                  <span className="font-semibold text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="tel:+18002706228"
                className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-bold text-lg px-8 py-4 rounded-lg animate-pulse-glow hover:brightness-110 transition-all"
              >
                <Phone className="w-5 h-5" />
                Get Your Free Quote
              </a>
              <a
                href="tel:+18002706228"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary font-bold text-lg px-8 py-4 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all"
              >
                +1-800-270-6228
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-6 pt-4 border-t border-border">
              <img src={bbbBadge} alt="BBB Accredited Business A+ Rating" className="h-14 object-contain" />
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                ))}
                <span className="ml-2 text-sm font-semibold text-muted-foreground">
                  4.9/5 (500+ Reviews)
                </span>
              </div>
            </div>
          </div>

          {/* Right - VSL Video */}
          <div className="relative pb-12">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/10 aspect-video bg-navy flex items-center justify-center cursor-pointer group">
              <div className="absolute inset-0 bg-foreground/80 z-10" />
              <div className="relative z-20 flex flex-col items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <Play className="w-8 h-8 text-accent-foreground fill-current ml-1" />
                </div>
                <p className="text-primary-foreground font-bold text-lg">
                  Watch How We Work
                </p>
              </div>
            </div>

            {/* Floating Stats - positioned to overlap video bottom edge */}
            <div className="absolute bottom-4 left-4 bg-trust-blue text-primary-foreground px-5 py-3 rounded-xl shadow-lg z-30">
              <div className="text-2xl font-black">22+</div>
              <div className="text-xs font-semibold opacity-90">Years Experience</div>
            </div>

            <div className="absolute bottom-4 right-4 bg-accent text-accent-foreground px-5 py-3 rounded-xl shadow-lg z-30">
              <div className="text-2xl font-black">100k+</div>
              <div className="text-xs font-semibold opacity-90">Projects Done</div>
            </div>

            {/* Badges under VSL */}
            <div className="flex items-center justify-center gap-6 mt-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Shield className="w-5 h-5 text-trust-blue" />
                <span className="text-sm font-semibold">Fully Insured</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Award className="w-5 h-5 text-accent" />
                <span className="text-sm font-semibold">Award Winning</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <ThumbsUp className="w-5 h-5 text-trust-green" />
                <span className="text-sm font-semibold">Satisfaction Guaranteed</span>
              </div>
              <img src={ernestLogo} alt="Ernest Windows Logo" className="h-12 object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
