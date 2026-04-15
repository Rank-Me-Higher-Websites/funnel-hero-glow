import { MapPin } from "lucide-react";

const areas = [
  {
    label: "North & Northwest Suburbs",
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
    label: "South & Southwest Suburbs",
    cities: [
      "Naperville", "Plainfield", "Romeoville", "Oswego", "Lemont",
      "Lockport", "Homer Glen", "Orland Park",
    ],
  },
];

const ServiceAreasSection = () => {
  return (
    <section className="bg-primary py-6 md:py-12">
      <div className="container mx-auto px-3 md:px-4">
        <div className="text-center mb-4 md:mb-8">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 text-primary-foreground px-3 py-1 md:py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wide mb-2 md:mb-3">
            <MapPin className="w-3 h-3" />
            Where We Work
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-primary-foreground">Service Areas</h2>
          <p className="text-primary-foreground/60 text-xs md:text-sm mt-1.5 md:mt-2 max-w-xl mx-auto">
            Proudly serving Chicago and the surrounding suburbs with top-rated cleaning services.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 md:gap-4">
          {areas.map((area) => (
            <div
              key={area.label}
              className="bg-primary-foreground/10 rounded-xl border border-primary-foreground/15 p-3 md:p-5 space-y-2 md:space-y-3"
            >
              <h3 className="font-bold text-accent text-xs md:text-sm">{area.label}</h3>
              <div className="flex flex-wrap gap-1 md:gap-1.5">
                {area.cities.map((city) => (
                  <span
                    key={city}
                    className="text-[10px] md:text-xs text-primary-foreground/80 bg-primary-foreground/10 px-2 py-0.5 md:px-2.5 md:py-1 rounded-full"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-primary-foreground/50 text-[10px] md:text-xs mt-4 md:mt-6">
          Don't see your area? Give us a call — we may still be able to reach you!
        </p>
      </div>
    </section>
  );
};

export default ServiceAreasSection;
