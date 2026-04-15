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
    <section className="bg-primary py-10 md:py-20 min-h-[60vh] flex items-center">
      <div className="container mx-auto px-4 md:px-6 w-full">
        <div className="text-center mb-6 md:mb-10">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 text-primary-foreground px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-bold uppercase tracking-wide mb-3 md:mb-4">
            <MapPin className="w-4 h-4" />
            Where We Work
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-primary-foreground">Service Areas</h2>
          <p className="text-primary-foreground/60 text-sm md:text-base mt-2 md:mt-3 max-w-2xl mx-auto">
            Proudly serving Chicago and the surrounding suburbs with top-rated cleaning services.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 max-w-5xl mx-auto">
          {areas.map((area) => (
            <div
              key={area.label}
              className="bg-primary-foreground/10 rounded-xl border border-primary-foreground/15 p-4 md:p-6 space-y-3 md:space-y-4"
            >
              <h3 className="font-bold text-accent text-sm md:text-base">{area.label}</h3>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {area.cities.map((city) => (
                  <span
                    key={city}
                    className="text-xs md:text-sm text-primary-foreground/80 bg-primary-foreground/10 px-2.5 py-1 md:px-3 md:py-1.5 rounded-full"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-primary-foreground/50 text-xs md:text-sm mt-6 md:mt-8">
          Don't see your area? Give us a call — we may still be able to reach you!
        </p>
      </div>
    </section>
  );
};

export default ServiceAreasSection;
