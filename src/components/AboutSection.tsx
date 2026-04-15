import aboutTeamImg from "@/assets/about-team-cropped.png";

const AboutSection = () => {
  return (
    <section className="bg-background bg-pattern-dots py-10 md:py-20 min-h-[60vh] flex items-center">
      <div className="container mx-auto px-4 md:px-6 w-full">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center max-w-5xl mx-auto">
          <div className="flex-shrink-0 w-40 md:w-64 mx-auto md:mx-0">
            <img
              src={aboutTeamImg}
              alt="Ernest Windows team member giving thumbs up"
              className="rounded-xl w-full h-auto block"
            />
          </div>

          <div>
            <p className="text-primary font-bold text-xs md:text-sm uppercase tracking-widest mb-2">Ernest Windows</p>
            <h2 className="text-2xl md:text-4xl font-black text-foreground mb-3 md:mb-5">About Us</h2>
            <div className="space-y-3 md:space-y-4 text-foreground text-sm md:text-base leading-relaxed">
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
