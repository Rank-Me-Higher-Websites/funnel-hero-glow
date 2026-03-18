import aboutTeamImg from "@/assets/about-team-cropped.png";

const AboutSection = () => {
  return (
    <section className="bg-background py-5 md:py-8">
      <div className="container mx-auto px-3 md:px-4">
        <div className="flex flex-col md:flex-row gap-4 md:gap-5 items-start max-w-4xl mx-auto">
          {/* Image */}
          <div className="flex-shrink-0 w-32 md:w-48 mx-auto md:mx-0">
            <img
              src={aboutTeamImg}
              alt="Ernest Windows team member giving thumbs up"
              className="rounded-xl w-full h-auto block"
            />
          </div>

          {/* Text */}
          <div>
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-1">Ernest Windows</p>
            <h2 className="text-lg md:text-2xl font-black text-foreground mb-2 md:mb-3">About Us</h2>
            <div className="space-y-2 md:space-y-3 text-foreground text-xs md:text-sm leading-relaxed">
              <p>
                At Ernest Windows, we are a team of dedicated professionals specializing in house
                maintenance services. Each job is handled by skilled experts, ensuring efficiency
                and high-quality results. Our work is guided by core values of diligence, honesty,
                and customer satisfaction.
              </p>
              <p>
                We take pride in our work and stand by our 100% satisfaction guarantee. If a
                customer is not fully satisfied with our service, we will redo the job at no additional
                cost until expectations are met.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
