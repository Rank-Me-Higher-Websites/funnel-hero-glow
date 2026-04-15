import aboutTeamImg from "@/assets/about-team-cropped.png";

const AboutSection = () => {
  return (
    <section className="bg-background bg-pattern-dots py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6 w-full">
        <div className="flex flex-col md:flex-row gap-5 md:gap-8 items-center max-w-4xl mx-auto">
          <div className="flex-shrink-0 w-32 md:w-44 mx-auto md:mx-0">
            <img
              src={aboutTeamImg}
              alt="Ernest Windows team member giving thumbs up"
              className="rounded-xl w-full h-auto block"
            />
          </div>

          <div>
            <p className="text-primary font-bold text-xs md:text-sm uppercase tracking-widest mb-1">Ernest Windows</p>
            <h2 className="text-xl md:text-3xl font-black text-foreground mb-2 md:mb-3">About Us</h2>
            <div className="space-y-2 md:space-y-3 text-foreground text-sm md:text-base leading-relaxed">
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
