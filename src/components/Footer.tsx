import { Instagram, Facebook, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "#", label: "Email" }
  ];

  const footerLinks = [
    {
      title: "Collection",
      links: ["Rings", "Necklaces", "Earrings", "Bracelets", "Custom Pieces"]
    },
    {
      title: "Services",
      links: ["Custom Design", "Repairs", "Cleaning", "Appraisals", "Consultations"]
    },
    {
      title: "About",
      links: ["Our Story", "Artisans", "Materials", "Process", "Sustainability"]
    }
  ];

  return (
    <footer className="bg-navy text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-3xl font-bold text-gold mb-4">
              Elara Jewelry
            </h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Handcrafted jewelry that tells your unique story. 
              Each piece is created with passion, precision, and love.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-lg mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-white/70 hover:text-gold transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/70 text-sm">
              © 2024 Elara Jewelry. All rights reserved. Crafted with love.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/70 hover:text-gold text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-white/70 hover:text-gold text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-white/70 hover:text-gold text-sm transition-colors duration-200">
                Shipping & Returns
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;