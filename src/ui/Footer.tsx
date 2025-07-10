import React from "react";
import {
  BookOpen,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Shop",
      links: [
        { name: "New Releases", href: "#" },
        { name: "Bestsellers", href: "#" },
        { name: "Fiction", href: "#" },
        { name: "Non-Fiction", href: "#" },
        { name: "Children's Books", href: "#" },
        { name: "E-books", href: "#" },
      ],
    },
    {
      title: "Customer Service",
      links: [
        { name: "Contact Us", href: "#" },
        { name: "FAQ", href: "#" },
        { name: "Shipping Info", href: "#" },
        { name: "Returns & Exchanges", href: "#" },
        { name: "Order Tracking", href: "#" },
        { name: "Size Guide", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Authors", href: "#" },
        { name: "Publishers", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", name: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", name: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", name: "Instagram" },
    { icon: <Youtube className="w-5 h-5" />, href: "#", name: "YouTube" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 py-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary-foreground text-primary p-2 rounded-lg">
                <BookOpen className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold">Bookie</span>
            </div>

            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Your trusted companion for discovering amazing books. We bring you
              the best collection of literature from around the world, right to
              your doorstep.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <Mail className="w-4 h-4" />
                <span>hello@bookie.com</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <MapPin className="w-4 h-4" />
                <span>123 Book Street, Library City, LC 12345</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Stay Updated with New Releases
              </h3>
              <p className="text-primary-foreground/80">
                Subscribe to our newsletter and be the first to know about new
                books, exclusive offers, and author events.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground text-primary placeholder:text-primary/60 focus:outline-none focus:ring-2 focus:ring-primary-foreground/50"
              />
              <button className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-primary-foreground/80 text-sm">
              <span>&copy; {currentYear} Bookie. All rights reserved.</span>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Cookie Policy
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="p-2 rounded-lg bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
