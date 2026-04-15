import { useState } from "react";
import { Shield, Clock, Award, ThumbsUp, Phone } from "lucide-react";
import QuoteFormDialog from "@/components/QuoteFormDialog";
import windowCleaning1 from "@/assets/window-cleaning-1.png";
import windowCleaning2 from "@/assets/window-cleaning-2.png";

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
    <section className="bg-navy text-navy-foreground py-6 md:py-12">
      <div className="container mx-auto px-3 md:px-4">
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 items-center max-w-4xl mx-auto">
          <div className="grid grid-cols-2 gap-2 md:gap-3 order-2 md:order-1">
            <img
              src={windowCleaning1}
              alt="Professional window cleaning"
              className="rounded-xl shadow-2xl w-full object-cover aspect-square border-2 border-accent/20"
            />
            <img
              src={windowCleaning2}
              alt="Window cleaning on ladder"
              className="rounded-xl shadow-2xl w-full object-cover aspect-square border-2 border-accent/20"
            />
          </div>

          <div className="space-y-3 md:space-y-4 order-1 md:order-2">
            <div>
              <p className="text-trust-blue font-bold text-xs uppercase tracking-widest mb-1">
                ✦ Why Choose Us
              </p>
              <h2 className="text-lg md:text-2xl font-black leading-tight">
                Quality Service For{" "}
                <span className="text-accent">Residential & Commercial</span>
              </h2>
            </div>

            <p className="text-navy-foreground/70 text-xs md:text-sm leading-relaxed">
              Ernest Windows, Inc is a competitive service provider for window washing,
              power washing and gutter cleaning for residential and commercial properties.
            </p>

            <div className="grid grid-cols-2 gap-2 md:gap-3">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="flex items-start gap-2 bg-navy-foreground/5 border border-navy-foreground/10 p-2.5 md:p-3 rounded-lg"
                >
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-md bg-accent/15 flex items-center justify-center flex-shrink-0">
                    <f.icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[11px] md:text-xs leading-tight">{f.title}</h3>
                    <p className="text-navy-foreground/60 text-[10px] md:text-xs">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setQuoteOpen(true)}
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold px-5 py-3 md:px-6 md:py-3 rounded-lg animate-pulse-glow hover:brightness-110 transition-all text-sm w-full sm:w-auto justify-center"
            >
              <Phone className="w-4 h-4" />
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
