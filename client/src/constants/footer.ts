import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

export const SOCIAL_LINKS = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/share/1CQocwxFZ3/?mibextid=wwXIfr",
    ariaLabel: "Visit our Facebook page",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/the_north_affairs?igsh=MW43dHpqZGFzdW9lNA%3D%3D&utm_source=qr",
    ariaLabel: "Follow us on Instagram",
  }
];

export const CONTACT_INFO = {
  phone: "+92 303 3333530",
  email: "thenorthaffairs@gmail.com",
  address: "Lahore, Pakistan",
};

export const FOOTER_LINKS = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Story", href: "/story" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
  ],
  support: [
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/faq" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
  trips: [
    { label: "Destinations", href: "/" },
    { label: "Calendar", href: "/calendar" },
    { label: "Featured Trips", href: "/?featured=true" },
  ],
};

