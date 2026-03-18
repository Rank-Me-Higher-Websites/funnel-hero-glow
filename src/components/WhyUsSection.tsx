import { Shield, Clock, Award, ThumbsUp, Phone } from "lucide-react";
import windowCleaning1 from "@/assets/window-cleaning-1.png";
import windowCleaning2 from "@/assets/window-cleaning-2.png";

const features = [
  { icon: Shield, title: "Fully Licensed & Insured", desc: "Complete peace of mind" },
  { icon: Clock, title: "Available 24/7", desc: "We work around your schedule" },
  { icon: Award, title: "BBB A+ Rated", desc: "22+ years of excellence" },
  { icon: ThumbsUp, title: "100% Satisfaction", desc: "We redo it free if not happy" },
];

const WhyUsSection = () => {
  return (
    <section className="bg-navy text-navy-foreground py-8 md:py-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <img
              src={heroImg}
              alt="Ernest Windows professional window cleaning"
              className="rounded-xl shadow-2xl w-full object-cover aspect-[4/5]"
            />
            <div className="absolute bottom-4 left-4 bg-trust-blue text-primary-foreground px-4 py-3 rounded-xl shadow-lg">
              <div className="flex items-center gap-2">
                <ThumbsUp className="w-5 h-5" />
                <span className="text-2xl font-black">89%</span>
              </div>
              <div className="text-xs font-semibold opacity-90">Satisfied Clients</div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-trust-blue font-bold text-xs uppercase tracking-widest mb-1">
                ✦ Why Choose Us
              </p>
              <h2 className="text-2xl md:text-3xl font-black leading-tight">
                Quality Service For{" "}
                <span className="text-accent">Residential & Commercial</span>
              </h2>
            </div>

            <p className="text-navy-foreground/70 text-sm leading-relaxed">
              Ernest Windows, Inc is a competitive service provider for window washing,
              power washing and gutter cleaning for residential and commercial properties.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="flex items-start gap-2 bg-navy-foreground/5 p-3 rounded-lg"
                >
                  <f.icon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-xs">{f.title}</h3>
                    <p className="text-navy-foreground/60 text-xs">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="tel:+18002706228"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold px-6 py-3 rounded-lg animate-pulse-glow hover:brightness-110 transition-all"
            >
              <Phone className="w-4 h-4" />
              Get Your Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
