import { useState } from "react";
import { Phone, Star, CheckCircle, CheckCircle2 } from "lucide-react";
import bbbBadge from "@/assets/bbb-badge.png";
import ernestLogo from "@/assets/ernest-logo.png";
import heroBg from "@/assets/hero-bg.webp";

const services = [
  "Window Cleaning",
  "Power Washing",
  "Gutter Cleaning",
];

const HeroSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    address: "",
    details: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Lead");
      console.log("[Pixel] Lead event fired (hero form)");
    }
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source: "hero" }),
      });
      if (!res.ok) console.error("Lead submission failed:", res.status);
      setFormData({ fullName: "", email: "", phone: "", service: "", address: "", details: "" });
      setSubmitted(true);
    } catch (err) {
      console.error("Submission error:", err);
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm px-3 py-2.5 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent";

  return (
    <>
      <div className="bg-accent py-1 md:py-2">
        <div className="container mx-auto px-3 md:px-4 flex items-center justify-between">
          <img src={ernestLogo} alt="Ernest Windows Logo" className="h-8 md:h-16 object-contain" />
          <div className="flex items-center gap-1.5 md:gap-2">
            <a
              href="#quote-form"
              className="inline-flex items-center gap-1 bg-primary text-primary-foreground font-bold text-[10px] md:text-sm px-2 py-1 md:px-4 md:py-2 rounded-lg hover:brightness-110 transition-all"
              data-testid="link-nav-quote"
            >
              Get Your Free Quote
            </a>
            <a
              href="tel:+18002706228"
              className="inline-flex items-center gap-1 bg-primary text-primary-foreground font-bold text-[10px] md:text-sm px-2 py-1 md:px-4 md:py-2 rounded-lg hover:brightness-110 transition-all"
              data-testid="link-nav-phone"
            >
              <Phone className="w-3 h-3 md:w-4 md:h-4" />
              <span className="hidden sm:inline">+1-800-270-6228</span>
              <span className="sm:hidden">Call</span>
            </a>
          </div>
        </div>
      </div>

      <section className="relative bg-primary text-primary-foreground py-4 md:py-20 lg:py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative container mx-auto px-3 md:px-4">
          <div className="grid md:grid-cols-2 gap-4 md:gap-10 items-start">
            <div className="space-y-2 md:space-y-4 order-1">
              <div className="inline-flex items-center gap-1.5 bg-accent text-accent-foreground px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wide shadow-lg">
                <Star className="w-3 h-3 md:w-3.5 md:h-3.5 fill-current" />
                #1 Rated in Chicagoland
              </div>

              <h1 className="text-2xl md:text-5xl lg:text-6xl font-black leading-[1.05] text-white" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.7)" }}>
                Crystal Clear Windows.{" "}
                <span className="text-accent">Guaranteed.</span>
              </h1>

              <p className="text-[11px] md:text-base text-white/90 max-w-lg leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                Ernest Windows has been providing five-star cleaning services to
                Chicagoland residents and businesses since 2003.
              </p>

              <div className="grid grid-cols-2 gap-1 md:gap-2">
                {[
                  "Free Estimates",
                  "Available 24/7",
                  "100% Satisfaction",
                  "Licensed & Insured",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-1 md:gap-2">
                    <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-trust-green flex-shrink-0" />
                    <span className="font-bold text-white text-[10px] md:text-sm drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 md:gap-4 pt-1 md:pt-3 border-t border-primary-foreground/20">
                <img src={bbbBadge} alt="BBB Accredited Business A+ Rating" className="h-6 md:h-10 object-contain" />
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-accent fill-accent" />
                  ))}
                  <span className="ml-1 text-[9px] md:text-xs font-semibold text-primary-foreground/70">
                    4.9/5 (2.8k+ Reviews)
                  </span>
                </div>
              </div>
            </div>

            <div className="order-2 max-w-md mx-auto w-full" id="quote-form">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 md:p-5 shadow-2xl">
                {submitted ? (
                  <div className="text-center py-6 md:py-10" data-testid="hero-success">
                    <CheckCircle2 className="w-12 h-12 md:w-16 md:h-16 text-trust-green mx-auto mb-3" />
                    <h2 className="text-base md:text-xl font-black text-white mb-1" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}>
                      Thank You!
                    </h2>
                    <p className="text-white/80 text-xs md:text-sm mb-4 px-2">
                      Your request has been received. Our team will reach out to you shortly with your free quote.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-accent font-bold text-xs md:text-sm underline hover:brightness-110"
                      data-testid="button-submit-another"
                    >
                      Submit another request
                    </button>
                  </div>
                ) : (
                <>
                <h2 className="text-sm md:text-lg font-black text-white text-center mb-0.5" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}>
                  Get Your Free Quote
                </h2>
                <p className="text-white/70 text-[9px] md:text-xs text-center mb-2 md:mb-3">
                  Fill out the form and we'll get back to you ASAP.
                </p>
                <form onSubmit={handleSubmit} className="space-y-1.5 md:space-y-2" data-testid="form-hero-quote">
                  <input
                    name="fullName"
                    placeholder="Full Name"
                    required
                    maxLength={100}
                    value={formData.fullName}
                    onChange={handleChange}
                    className={inputClass}
                    data-testid="input-fullname"
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    maxLength={255}
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass}
                    data-testid="input-email"
                  />
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    required
                    maxLength={20}
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClass}
                    data-testid="input-phone"
                  />
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className={inputClass}
                    data-testid="select-service"
                  >
                    <option value="" disabled>
                      Select Service Needed
                    </option>
                    {services.map((s) => (
                      <option key={s} value={s} className="text-foreground bg-background">
                        {s}
                      </option>
                    ))}
                  </select>
                  <input
                    name="address"
                    placeholder="Address"
                    required
                    maxLength={200}
                    value={formData.address}
                    onChange={handleChange}
                    className={inputClass}
                    data-testid="input-address"
                  />
                  <textarea
                    name="details"
                    placeholder="House Details (optional)"
                    maxLength={1000}
                    rows={1}
                    value={formData.details}
                    onChange={handleChange}
                    className={inputClass}
                    data-testid="input-details"
                  />
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-accent text-accent-foreground font-black py-2.5 md:py-3 rounded-lg hover:brightness-110 transition-all disabled:opacity-50 text-xs md:text-sm animate-pulse-glow"
                    data-testid="button-submit-quote"
                  >
                    <Phone className="w-3.5 h-3.5 md:w-4 md:h-4 inline mr-1.5" />
                    {submitting ? "Sending..." : "Submit Request"}
                  </button>
                </form>
                <p className="text-white/50 text-[9px] text-center mt-1.5">
                  No spam. No obligation. 100% free estimate.
                </p>
                </>
                )}
              </div>

              <div className="flex justify-center gap-1.5 md:gap-3 mt-2 md:mt-3">
                <div className="bg-accent text-accent-foreground px-2 py-1 md:px-2.5 md:py-1.5 rounded-lg shadow-md text-center">
                  <div className="text-xs md:text-base font-black">22+</div>
                  <div className="text-[7px] md:text-[9px] font-semibold opacity-90">Years Exp.</div>
                </div>
                <div className="bg-accent text-accent-foreground px-2 py-1 md:px-2.5 md:py-1.5 rounded-lg shadow-md text-center">
                  <div className="text-xs md:text-base font-black">100k+</div>
                  <div className="text-[7px] md:text-[9px] font-semibold opacity-90">Projects</div>
                </div>
                <div className="bg-accent text-accent-foreground px-2 py-1 md:px-2.5 md:py-1.5 rounded-lg shadow-md text-center">
                  <div className="text-xs md:text-base font-black">2.8k+</div>
                  <div className="text-[7px] md:text-[9px] font-semibold opacity-90">5-Star Reviews</div>
                </div>
                <div className="bg-accent text-accent-foreground px-2 py-1 md:px-2.5 md:py-1.5 rounded-lg shadow-md text-center">
                  <div className="text-xs md:text-base font-black">89</div>
                  <div className="text-[7px] md:text-[9px] font-semibold opacity-90">Expert Workers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
