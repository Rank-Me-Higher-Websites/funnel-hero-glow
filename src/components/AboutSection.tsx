import aboutTeamImg from "@/assets/about-team.png";

const AboutSection = () => {
  return (
    <section className="bg-background py-10 md:py-14">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left */}
          <div>
            <p className="text-primary font-bold text-sm mb-2">Ernest Windows</p>
            <h2 className="text-3xl md:text-4xl font-black text-foreground">About Us</h2>
          </div>

          {/* Right */}
          <div className="space-y-5 text-foreground/70 text-sm leading-relaxed">
            <p>
              At Ernest Windows, we are a team of dedicated professionals specializing in house
              maintenance services. Each job is handled by skilled experts, ensuring efficiency
              and high-quality results. Our work is guided by core values of diligence, honesty,
              and customer satisfaction, ensuring that we consistently deliver the best service
              possible.
            </p>
            <p>
              We take pride in our work and stand by our 100% satisfaction guarantee. If a
              customer is not fully satisfied with our service, we will redo the job at no additional
              cost until expectations are met. Every project is personalized to suit individual
              needs because our goal is to provide exactly what our customers envision.
            </p>
            <img
              src={aboutTeamImg}
              alt="Ernest Windows team member giving thumbs up"
              className="rounded-xl max-w-xs mx-auto mt-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
