import { Star, Quote } from "lucide-react";
import googleLogo from "@/assets/google-business.png";

const reviews = [
  {
    name: "Sarah M.",
    date: "2 weeks ago",
    text: "Ernest Windows did an amazing job on our home! Every single window is spotless. The crew was professional, on time, and incredibly thorough.",
  },
  {
    name: "Michael R.",
    date: "1 month ago",
    text: "I've used several window cleaning companies over the years, and Ernest Windows is by far the best. Fair pricing and outstanding results.",
  },
  {
    name: "Jennifer K.",
    date: "3 weeks ago",
    text: "From the initial phone call to the finished job, the experience was seamless. Our windows haven't looked this good since we moved in!",
  },
  {
    name: "David L.",
    date: "1 month ago",
    text: "Absolutely five-star service! The team was respectful of our property and left zero mess behind. Crystal clear windows and a great price.",
  },
  {
    name: "Amanda T.",
    date: "2 months ago",
    text: "We called for a last-minute cleaning before a big family event and they squeezed us in the very next day. The results were incredible!",
  },
  {
    name: "Robert H.",
    date: "3 weeks ago",
    text: "Best window cleaning service in Chicagoland, hands down. Licensed, insured, and they stand behind their work. Highly recommend.",
  },
];

const StarRating = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-3 h-3 md:w-3.5 md:h-3.5 fill-accent text-accent" />
    ))}
  </div>
);

const ReviewsSection = () => {
  return (
    <section className="bg-navy text-navy-foreground py-6 md:py-12">
      <div className="container mx-auto px-3 md:px-4">
        <div className="text-center mb-4 md:mb-8">
          <p className="text-trust-blue font-bold text-[10px] md:text-xs uppercase tracking-widest mb-1">
            ✦ Customer Reviews
          </p>
          <h2 className="text-base md:text-3xl font-black leading-tight mb-2">
            What Our Customers{" "}
            <span className="text-accent">Are Saying</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-2">
            <img
              src={googleLogo}
              alt="Google Business Profile"
              className="w-7 h-7 md:w-10 md:h-10 rounded-lg object-cover"
              data-testid="img-google-logo"
            />
            <div className="text-left">
              <div className="flex items-center gap-1">
                <StarRating />
                <span className="text-navy-foreground/80 text-xs font-semibold">4.8</span>
              </div>
              <p className="text-navy-foreground/60 text-[10px] md:text-xs">
                2,849 reviews on Google
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-navy-foreground/5 border border-navy-foreground/10 rounded-lg p-3 md:p-5 flex flex-col gap-1.5 md:gap-3 hover:border-accent/30 transition-colors"
              data-testid={`card-review-${index}`}
            >
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 md:w-9 md:h-9 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-[10px] md:text-sm flex-shrink-0">
                  {review.name.charAt(0)}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-bold text-[10px] md:text-sm truncate" data-testid={`text-reviewer-name-${index}`}>
                    {review.name}
                  </p>
                  <p className="text-navy-foreground/50 text-[8px] md:text-xs">{review.date}</p>
                </div>
                <Quote className="w-3.5 h-3.5 md:w-5 md:h-5 text-accent/30 flex-shrink-0 hidden md:block" />
              </div>
              <StarRating />
              <p className="text-navy-foreground/70 text-[10px] md:text-sm leading-relaxed flex-1 line-clamp-3 md:line-clamp-none">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-4 md:mt-6">
          <a
            href="https://www.google.com/maps/place/Ernest+Windows,Inc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 border-2 border-accent text-accent font-bold px-4 py-2 md:px-6 md:py-3 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all text-xs md:text-sm"
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
