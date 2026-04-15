import { Star, Quote } from "lucide-react";

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
      <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-amber-400 text-amber-400" />
    ))}
  </div>
);

const ReviewsSection = () => {
  return (
    <section className="bg-white py-10 md:py-20 min-h-[60vh] flex items-center">
      <div className="container mx-auto px-4 md:px-6 w-full">
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-10">
          <p className="text-navy font-bold text-xs md:text-sm uppercase tracking-widest mb-2">
            ✦ Customer Reviews
          </p>
          <h2 className="text-2xl md:text-4xl font-black leading-tight mb-3 text-navy">
            What Our Customers{" "}
            <span className="text-accent">Are Saying</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-3">
            <StarRating />
            <span className="text-navy font-semibold text-sm md:text-base">4.8/5</span>
            <span className="text-navy/80 text-xs md:text-sm font-medium">
              · 2,849 reviews on Google
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-navy border border-navy/10 rounded-xl p-4 md:p-6 flex flex-col gap-2 md:gap-4 hover:shadow-lg transition-shadow"
              data-testid={`card-review-${index}`}
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-xs md:text-base flex-shrink-0">
                  {review.name.charAt(0)}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-bold text-xs md:text-base truncate text-white" data-testid={`text-reviewer-name-${index}`}>
                    {review.name}
                  </p>
                  <p className="text-white/50 text-[10px] md:text-sm">{review.date}</p>
                </div>
                <Quote className="w-5 h-5 md:w-6 md:h-6 text-accent/30 flex-shrink-0 hidden md:block" />
              </div>
              <StarRating />
              <p className="text-white/80 text-xs md:text-sm leading-relaxed flex-1 line-clamp-4 md:line-clamp-none">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-6 md:mt-10">
          <a
            href="https://www.google.com/maps/place/Ernest+Windows,Inc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-navy text-navy font-bold px-6 py-3 md:px-8 md:py-4 rounded-lg hover:bg-navy hover:text-white transition-all text-sm md:text-base"
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
