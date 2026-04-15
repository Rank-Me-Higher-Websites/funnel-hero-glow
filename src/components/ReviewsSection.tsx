import { Star, Quote } from "lucide-react";
import googleLogo from "@/assets/google-business.png";

const reviews = [
  {
    name: "Sarah M.",
    date: "2 weeks ago",
    text: "Ernest Windows did an amazing job on our home! Every single window is spotless — inside and out. The crew was professional, on time, and incredibly thorough. I've already recommended them to all my neighbors.",
  },
  {
    name: "Michael R.",
    date: "1 month ago",
    text: "I've used several window cleaning companies over the years, and Ernest Windows is by far the best. They handled our three-story commercial building with ease. Fair pricing and outstanding results.",
  },
  {
    name: "Jennifer K.",
    date: "3 weeks ago",
    text: "From the initial phone call to the finished job, the experience was seamless. They even cleaned our gutters while they were here. Our windows haven't looked this good since we moved in!",
  },
  {
    name: "David L.",
    date: "1 month ago",
    text: "Absolutely five-star service! The team was respectful of our property, wore shoe covers inside, and left zero mess behind. Crystal clear windows and a great price. Will be using them every season.",
  },
  {
    name: "Amanda T.",
    date: "2 months ago",
    text: "We called Ernest Windows for a last-minute cleaning before a big family event and they squeezed us in the very next day. The results were incredible — you'd think we got new windows installed!",
  },
  {
    name: "Robert H.",
    date: "3 weeks ago",
    text: "Best window cleaning service in Chicagoland, hands down. Licensed, insured, and they stand behind their work. When one window had a small streak, they came back the same day to fix it at no charge.",
  },
];

const StarRating = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
    ))}
  </div>
);

const ReviewsSection = () => {
  return (
    <section className="bg-navy text-navy-foreground py-10 md:py-16">
      <div className="container mx-auto px-3 md:px-4">
        <div className="text-center mb-8 md:mb-10">
          <p className="text-trust-blue font-bold text-xs uppercase tracking-widest mb-2">
            ✦ Customer Reviews
          </p>
          <h2 className="text-xl md:text-3xl font-black leading-tight mb-3">
            What Our Customers{" "}
            <span className="text-accent">Are Saying</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <img
              src={googleLogo}
              alt="Google Business Profile"
              className="w-10 h-10 rounded-lg object-cover"
              data-testid="img-google-logo"
            />
            <div className="text-left">
              <div className="flex items-center gap-1.5">
                <StarRating />
                <span className="text-navy-foreground/80 text-sm font-semibold">4.8</span>
              </div>
              <p className="text-navy-foreground/60 text-xs">
                2,849 reviews on Google
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-navy-foreground/5 border border-navy-foreground/10 rounded-xl p-5 md:p-6 flex flex-col gap-3 hover:border-accent/30 transition-colors"
              data-testid={`card-review-${index}`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-sm" data-testid={`text-reviewer-name-${index}`}>
                      {review.name}
                    </p>
                    <p className="text-navy-foreground/50 text-xs">{review.date}</p>
                  </div>
                </div>
                <Quote className="w-5 h-5 text-accent/30 flex-shrink-0" />
              </div>
              <StarRating />
              <p className="text-navy-foreground/70 text-xs md:text-sm leading-relaxed flex-1">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://www.google.com/maps/place/Ernest+Windows,Inc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-accent text-accent font-bold px-6 py-3 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all text-sm"
            data-testid="link-view-all-reviews"
          >
            View All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
