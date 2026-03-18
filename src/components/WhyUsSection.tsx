import { Shield, Clock, Award, ThumbsUp } from "lucide-react";
import heroImg from "@/assets/hero-window-cleaning.jpg";

const features = [
  { icon: Shield, title: "Fully Licensed & Insured", desc: "Complete peace of mind with every service" },
  { icon: Clock, title: "Available 24/7", desc: "We work around your schedule" },
  { icon: Award, title: "BBB A+ Rated", desc: "22+ years of trusted excellence" },
  { icon: ThumbsUp, title: "100% Satisfaction", desc: "We redo it free if you're not happy" },
];

const WhyUsSection = () => {
  return (
    <section className="bg-navy text-navy-foreground py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src={heroImg}
              alt="Ernest Windows professional window cleaning"
              className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/5]"
            />
            <div className="absolute bottom-6 left-6 bg-trust-blue text-primary-foreground px-6 py-4 rounded-xl shadow-lg">
              <div className="flex items-center gap-2">
                <ThumbsUp className="w-6 h-6" />
                <span className="text-3xl font-black">89%</span>
              </div>
              <div className="text-sm font-semibold opacity-90">Satisfied Clients</div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-trust-blue font-bold text-sm uppercase tracking-widest mb-3">
                ✦ Why We Are The Best
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
                Quality Cleaning Service Solutions For{" "}
                <span className="text-accent">Residential & Commercial</span>
              </h2>
            </div>

            <p className="text-navy-foreground/70 text-lg leading-relaxed">
              Ernest Windows, Inc is a competitive service provider for window washing,
              power washing and gutter cleaning for residential houses as well as
              commercial, apartments, condos and businesses of all types.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="flex items-start gap-3 bg-navy-foreground/5 p-4 rounded-xl"
                >
                  <f.icon className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-sm">{f.title}</h3>
                    <p className="text-navy-foreground/60 text-sm">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="tel:+18002706228"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold text-lg px-8 py-4 rounded-lg hover:brightness-110 transition-all"
            >
              Contact With Us →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
