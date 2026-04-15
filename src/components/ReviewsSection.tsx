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
      <Star key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 fill-amber-400 text-amber-400" />
    ))}
  </div>
);

const ReviewsSection = () => {
  return (
    <section className="bg-white py-8 md:py-10">
      <div className="container mx-auto px-4 md:px-6 w-full">
        <div className="text-center max-w-2xl mx-auto mb-4 md:mb-6">
          <p className="text-navy font-bold text-xs md:text-sm uppercase tracking-widest mb-1">
            ✦ Customer Reviews
          </p>
          <h2 className="text-xl md:text-3xl font-black leading-tight mb-2 text-navy">
            What Our Customers{" "}
            <span className="text-accent">Are Saying</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-2">
            <StarRating />
            <span className="text-navy font-semibold text-sm">4.8/5</span>
            <span className="text-navy/80 text-xs md:text-sm font-medium">
              · 2,849 reviews on Google
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-navy rounded-xl p-4 md:p-5 flex flex-col gap-2 md:gap-3 hover:shadow-lg transition-shadow"
              data-testid={`card-review-${index}`}
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-xs md:text-sm flex-shrink-0">
                  {review.name.charAt(0)}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-bold text-xs md:text-sm truncate text-white" data-testid={`text-reviewer-name-${index}`}>
                    {review.name}
                  </p>
                  <p className="text-white/50 text-[10px] md:text-xs">{review.date}</p>
                </div>
                <Quote className="w-4 h-4 md:w-5 md:h-5 text-accent/30 flex-shrink-0 hidden md:block" />
              </div>
              <StarRating />
              <p className="text-white/80 text-[11px] md:text-sm leading-relaxed flex-1 line-clamp-3 md:line-clamp-none">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-4 md:mt-6">
          <a
            href="https://share.google/cGlLJyCvjkwGuCOhz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-navy text-navy font-bold px-5 py-2.5 md:px-7 md:py-3 rounded-lg hover:bg-navy hover:text-white transition-all text-sm md:text-base"
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
