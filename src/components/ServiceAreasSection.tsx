import { MapPin, Phone } from "lucide-react";
import { useState } from "react";
import QuoteFormDialog from "@/components/QuoteFormDialog";

const areas = [
  {
    label: "North & Northwest",
    cities: [
      "Lake Forest", "Highland Park", "Deerfield", "Glenview", "Glencoe",
      "Winnetka", "Wilmette", "Evanston", "Skokie", "Lincolnwood", "Park Ridge",
    ],
  },
  {
    label: "West Suburbs",
    cities: [
      "Elgin", "South Elgin", "St. Charles", "Geneva", "Batavia",
      "Aurora", "Wheaton", "Glen Ellyn", "Wood Dale", "Bensenville",
    ],
  },
  {
    label: "East Suburbs",
    cities: [
      "Franklin Park", "Northlake", "Melrose Park", "Oak Park", "Elmhurst",
      "Villa Park", "Lombard", "Oak Brook", "Westchester",
    ],
  },
  {
    label: "South & Southwest",
    cities: [
      "Naperville", "Plainfield", "Romeoville", "Oswego", "Lemont",
      "Lockport", "Homer Glen", "Orland Park",
    ],
  },
];

const ServiceAreasSection = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);
  return (
    <>
    <section className="bg-navy text-navy-foreground py-10 md:py-16">
      <div className="container mx-auto px-4 md:px-6 w-full">
        <div className="text-center mb-6 md:mb-10 max-w-2xl mx-auto">
          <p className="text-trust-blue font-bold text-xs md:text-sm uppercase tracking-widest mb-2">
            ✦ Where We Work
          </p>
          <h2 className="text-2xl md:text-4xl font-black text-white leading-tight">
            Serving All of <span className="text-accent">Chicagoland</span>
          </h2>
          <p className="text-navy-foreground/60 text-sm md:text-base mt-2 md:mt-3">
            Proudly serving Chicago and the surrounding suburbs with top-rated cleaning services.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 max-w-5xl mx-auto">
          {areas.map((area) => (
            <div
              key={area.label}
              className="bg-navy-foreground/5 rounded-xl border border-navy-foreground/10 p-4 md:p-5 hover:border-accent/30 transition-colors"
            >
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-navy-foreground/10">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                <h3 className="font-bold text-accent text-xs md:text-sm">{area.label}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {area.cities.map((city) => (
                  <span
                    key={city}
                    className="text-[10px] md:text-xs text-navy-foreground/80 bg-navy-foreground/10 px-2 py-0.5 md:px-2.5 md:py-1 rounded-full"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6 md:mt-8">
          <p className="text-navy-foreground/50 text-xs md:text-sm mb-4">
            Don't see your area? Give us a call — we may still be able to reach you!
          </p>
          <button
            onClick={() => setQuoteOpen(true)}
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold px-6 py-3 md:px-8 md:py-4 rounded-lg animate-pulse-glow hover:brightness-110 transition-all text-sm md:text-base"
          >
            <Phone className="w-4 h-4 md:w-5 md:h-5" />
            Get Your Free Quote
          </button>
        </div>
      </div>
    </section>
    <QuoteFormDialog open={quoteOpen} onOpenChange={setQuoteOpen} />
    </>
  );
};

export default ServiceAreasSection;
