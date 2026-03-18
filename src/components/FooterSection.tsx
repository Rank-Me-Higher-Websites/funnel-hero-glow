import { MapPin, Phone, Mail } from "lucide-react";
import ernestLogo from "@/assets/ernest-logo.png";

const FooterSection = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-10 md:py-14">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left - Brand */}
          <div className="space-y-4">
            <img src={ernestLogo} alt="Ernest Windows Logo" className="h-12 object-contain" />
            <p className="text-primary-foreground/70 text-sm max-w-sm leading-relaxed">
              Qualified professional window washing, gutter cleaning and power washing service.
            </p>
            <div>
              <p className="font-bold text-sm mb-2">Follow Us On:</p>
              <div className="flex items-center gap-4">
                {["Facebook", "YouTube", "Instagram", "TikTok"].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="text-primary-foreground/60 hover:text-primary-foreground text-xs transition-colors"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Contacts */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contacts</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">Bartlett, IL</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <a href="tel:+18002706228" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  1-800-270-6228
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <a href="mailto:info@ernestwindows.com" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  info@ernestwindows.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/15 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-primary-foreground/50">
            © 2003-2026 Ernest Windows. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
