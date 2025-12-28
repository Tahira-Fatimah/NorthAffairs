import { Link } from "wouter";
import { Compass, Mail, Phone, MapPin } from "lucide-react";
import { WEBSITE_NAME } from "@/constants";
import { SOCIAL_LINKS, CONTACT_INFO, FOOTER_LINKS } from "@/constants/footer";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Compass className="w-8 h-8 text-primary animate-pulse" />
              <h3 className="text-xl font-bold tracking-wide text-foreground">
                {WEBSITE_NAME}
              </h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Curated experiences for the modern traveler. Discover your next adventure with us.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className="
                    w-10 h-10
                    flex items-center justify-center
                    rounded-full
                    bg-background
                    text-muted-foreground
                    hover:text-primary
                    hover:bg-primary/10
                    transition-all
                    border border-border
                  "
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          {/* <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Support Links */}
          {/* <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-semibold mb-0.5">
                    Phone
                  </p>
                  <a
                    href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                    className="text-sm text-foreground hover:text-primary transition-colors"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-semibold mb-0.5">
                    Email
                  </p>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-sm text-foreground hover:text-primary transition-colors break-all"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-semibold mb-0.5">
                    Address
                  </p>
                  <p className="text-sm text-foreground">
                    {CONTACT_INFO.address}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} {WEBSITE_NAME}. All rights reserved.
            </p>
            {/* <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              {FOOTER_LINKS.trips.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

