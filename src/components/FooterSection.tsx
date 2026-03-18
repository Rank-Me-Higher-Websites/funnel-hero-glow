import { MapPin, Phone, Mail } from "lucide-react";
import ernestLogo from "@/assets/ernest-logo.png";

const FooterSection = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-10 md:py-14">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          {/* Left - Brand */}
          <div className="space-y-4">
            <img src={ernestLogo} alt="Ernest Windows Logo" className="h-12 object-contain" />
            <p className="text-primary-foreground/70 text-sm max-w-sm leading-relaxed">
              Qualified professional window washing, gutter cleaning and power washing service.
            </p>
            <div>
              <p className="font-bold text-sm mb-2">Follow Us On:</p>
              <div className="flex items-center gap-4">
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

          {/* Center - Contacts */}
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

          {/* Right - Google Map */}
          <div>
            <h3 className="text-lg font-bold mb-4">Find Us</h3>
            <div className="rounded-lg overflow-hidden border border-primary-foreground/20 w-full aspect-square max-w-[220px]">
              <iframe
                title="Ernest Windows Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2960.5!2d-88.1856!3d41.9950!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880faf0c3e2e9b3d%3A0x5e6e4e8e8e8e8e8e!2sBartlett%2C%20IL!5e0!3m2!1sen!2sus!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
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
