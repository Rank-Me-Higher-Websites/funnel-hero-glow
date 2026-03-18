import { MapPin, Phone, Mail } from "lucide-react";
import ernestLogo from "@/assets/ernest-logo.png";

const FooterSection = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8 md:py-14">
      <div className="container mx-auto px-3 md:px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 items-start">
          {/* Brand */}
          <div className="space-y-3 md:space-y-4">
            <img src={ernestLogo} alt="Ernest Windows Logo" className="h-10 md:h-12 object-contain" />
            <p className="text-primary-foreground/70 text-xs md:text-sm max-w-sm leading-relaxed">
              Qualified professional window washing, gutter cleaning and power washing service.
            </p>
            <div>
              <p className="font-bold text-xs md:text-sm mb-1.5 md:mb-2">Follow Us On:</p>
              <div className="flex items-center gap-3 md:gap-4">
                {[
                  { name: "Facebook", url: "https://www.facebook.com/ErnestWindows/" },
                  { name: "YouTube", url: "https://www.youtube.com/channel/UCsO4FMR03U_rJHG2LeYS2IQ" },
                  { name: "Instagram", url: "https://www.instagram.com/ernestwindows/" },
                  { name: "TikTok", url: "https://www.tiktok.com/@ernestwindows" },
                ].map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-foreground/60 hover:text-primary-foreground text-xs transition-colors"
                  >
                    {platform.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4">Contacts</h3>
            <div className="space-y-2.5 md:space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-xs md:text-sm text-primary-foreground/80">Bartlett, IL</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <a href="tel:+18002706228" className="text-xs md:text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  1-800-270-6228
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <a href="mailto:info@ernestwindows.com" className="text-xs md:text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors break-all">
                  info@ernestwindows.com
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4">Our Services</h3>
            <ul className="space-y-2">
              {["Window Washing", "Power Washing", "Gutter Cleaning"].map((service) => (
                <li key={service} className="text-xs md:text-sm text-primary-foreground/80">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/15 mt-6 md:mt-10 pt-4 md:pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 md:gap-3">
          <p className="text-[10px] md:text-xs text-primary-foreground/50">
            © 2003-2026 Ernest Windows. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
