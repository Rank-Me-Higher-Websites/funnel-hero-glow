import { useState } from "react";
import { Shield, Clock, Award, ThumbsUp, Phone } from "lucide-react";
import QuoteFormDialog from "@/components/QuoteFormDialog";
import windowCleaningImg from "@/assets/window-cleaning-hero.png";

const features = [
  { icon: Shield, title: "Fully Licensed & Insured", desc: "Complete peace of mind" },
  { icon: Clock, title: "Available 24/7", desc: "We work around your schedule" },
  { icon: Award, title: "BBB A+ Rated", desc: "22+ years of excellence" },
  { icon: ThumbsUp, title: "100% Satisfaction", desc: "We redo it free if not happy" },
];

const WhyUsSection = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);
  return (
    <>
    <section className="bg-navy text-navy-foreground py-10 md:py-20 min-h-[60vh] flex items-center">
      <div className="container mx-auto px-4 md:px-6 w-full">
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-stretch max-w-5xl mx-auto">
          <div className="order-2 md:order-1">
            <img
              src={windowCleaningImg}
              alt="Professional window cleaning"
              className="rounded-2xl shadow-2xl w-full h-full object-cover border-2 border-accent/20"
            />
          </div>

          <div className="space-y-4 md:space-y-6 order-1 md:order-2">
            <div>
              <p className="text-trust-blue font-bold text-xs md:text-sm uppercase tracking-widest mb-2">
                ✦ Why Choose Us
              </p>
              <h2 className="text-2xl md:text-4xl font-black leading-tight">
                Quality Service For{" "}
                <span className="text-accent">Residential & Commercial</span>
              </h2>
            </div>

            <p className="text-navy-foreground/70 text-sm md:text-base leading-relaxed">
              Ernest Windows, Inc is a competitive service provider for window washing,
              power washing and gutter cleaning for residential and commercial properties.
            </p>

            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="flex items-start gap-3 bg-navy-foreground/5 border border-navy-foreground/10 p-3 md:p-4 rounded-lg"
                >
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-md bg-accent/15 flex items-center justify-center flex-shrink-0">
                    <f.icon className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xs md:text-sm leading-tight">{f.title}</h3>
                    <p className="text-navy-foreground/60 text-[11px] md:text-xs">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setQuoteOpen(true)}
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold px-6 py-3 md:px-8 md:py-4 rounded-lg animate-pulse-glow hover:brightness-110 transition-all text-sm md:text-base w-full sm:w-auto justify-center"
            >
              <Phone className="w-4 h-4 md:w-5 md:h-5" />
              Get Your Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
    <QuoteFormDialog open={quoteOpen} onOpenChange={setQuoteOpen} />
    </>
  );
};

export default WhyUsSection;
