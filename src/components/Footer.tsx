
import { Building, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const divisions = [
    { name: "Investment Banking", href: "#divisions" },
    { name: "Venture Capital", href: "#divisions" },
    { name: "Startup Showcase", href: "#showcase" }
  ];

  const links = [
    { name: "Join Our Team", href: "#contact" },
    { name: "Partner With Us", href: "#contact" },
    { name: "Submit Startup", href: "#contact" }
  ];

  return (
    <footer className="bg-card/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center">
                <span className="text-background font-medium text-sm">WC</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-lg leading-tight">warhawk capital</span>
                <span className="text-xs text-accent leading-tight">est. 2024</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground font-light">
              Developing future finance leaders through hands-on experience in investment research, 
              trading, and venture capital.
            </p>
          </div>

          {/* Divisions */}
          <div className="space-y-4">
            <h4 className="font-medium">Divisions</h4>
            <ul className="space-y-2">
              {divisions.map((division) => (
                <li key={division.name}>
                  <a 
                    href={division.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors font-light"
                  >
                    {division.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div className="space-y-4">
            <h4 className="font-medium">Get Involved</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors font-light"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-medium">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground font-light">
                <Building className="h-4 w-4" />
                <span>Laurier & Waterloo</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground font-light">
                <Mail className="h-4 w-4" />
                <span>info@warhawkcapital.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground font-light">
            © {currentYear} warhawk student capital. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <span className="text-sm text-muted-foreground font-light">Made with</span>
            <span className="text-accent">❤️</span>
            <span className="text-sm text-muted-foreground font-light">by students, for students</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
