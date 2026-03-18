const areas = [
  {
    label: "North & Northwest Suburbs",
    cities:
      "Lake Forest, Highland Park, Deerfield, Glenview, Glencoe, Winnetka, Wilmette, Evanston, Skokie, Lincolnwood, Park Ridge, and more.",
  },
  {
    label: "West Suburbs",
    cities:
      "Elgin, South Elgin, St. Charles, Geneva, Batavia, Aurora, Wheaton, Glen Ellyn, Wood Dale, Bensenville, and surrounding areas.",
  },
  {
    label: "East Suburbs",
    cities:
      "Franklin Park, Northlake, Melrose Park, Oak Park, Elmhurst, Villa Park, Lombard, Oak Brook, Westchester, and more.",
  },
  {
    label: "South & Southwest Suburbs",
    cities:
      "Naperville, Plainfield, Romeoville, Oswego, Lemont, Lockport, Homer Glen, Orland Park, and beyond.",
  },
];

const ServiceAreasSection = () => {
  return (
    <section className="bg-background py-10 md:py-14 border-t border-border">
      <div className="container mx-auto px-4 space-y-6">
        <h2 className="text-3xl md:text-4xl font-black text-foreground">Service Areas</h2>

        <p className="text-foreground/70 text-sm leading-relaxed">
          Looking for deck maintenance, window cleaning, or exterior cleaning services near you?
          We proudly serve Chicago and the surrounding suburbs, including:
        </p>

        <div className="space-y-4">
          {areas.map((area) => (
            <p key={area.label} className="text-sm leading-relaxed">
              <span className="font-bold text-primary">{area.label}</span>
              <span className="text-foreground/70">: {area.cities}</span>
            </p>
          ))}
        </div>

        <p className="text-foreground/60 text-sm italic">
          If your area isn't listed, give us a call to confirm whether we can reach you!
        </p>
      </div>
    </section>
  );
};

export default ServiceAreasSection;
