import { Users, Heart, CheckCircle, Star } from "lucide-react";
import aboutTeamImg from "@/assets/about-team.webp";

const values = [
  { icon: Users, title: "Expert Team", desc: "89 skilled professionals" },
  { icon: Heart, title: "Customer First", desc: "Your satisfaction is our priority" },
  { icon: CheckCircle, title: "100% Guarantee", desc: "We redo it free if not happy" },
  { icon: Star, title: "22+ Years", desc: "Trusted since 2003" },
];

const AboutSection = () => {
  return (
    <section className="bg-navy text-navy-foreground py-10 md:py-20 min-h-[60vh] flex items-center">
      <div className="container mx-auto px-4 md:px-6 w-full">
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-stretch max-w-5xl mx-auto">
          <div className="space-y-4 md:space-y-6">
            <div>
              <p className="text-trust-blue font-bold text-xs md:text-sm uppercase tracking-widest mb-2">
                ✦ About Us
              </p>
              <h2 className="text-2xl md:text-4xl font-black leading-tight">
                Meet The <span className="text-accent">Ernest Windows</span> Team
              </h2>
            </div>

            <p className="text-navy-foreground/70 text-sm md:text-base leading-relaxed">
              At Ernest Windows, we are a team of dedicated professionals specializing in house
              maintenance services. Each job is handled by skilled experts, ensuring efficiency
              and high-quality results. Our work is guided by core values of diligence, honesty,
              and customer satisfaction.
            </p>

            <p className="text-navy-foreground/70 text-sm md:text-base leading-relaxed">
              We take pride in our work and stand by our 100% satisfaction guarantee. If a
              customer is not fully satisfied with our service, we will redo the job at no additional
              cost until expectations are met.
            </p>

            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="flex items-start gap-3 bg-navy-foreground/5 border border-navy-foreground/10 p-3 md:p-4 rounded-lg"
                >
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-md bg-accent/15 flex items-center justify-center flex-shrink-0">
                    <v.icon className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xs md:text-sm leading-tight">{v.title}</h3>
                    <p className="text-navy-foreground/60 text-[11px] md:text-xs">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <img
              src={aboutTeamImg}
              alt="Ernest Windows team"
              className="rounded-2xl shadow-2xl w-full h-full object-cover border-2 border-accent/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
