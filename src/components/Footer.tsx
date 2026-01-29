import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/mohdumair', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/mohdumair', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:khanmohdumair752@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground mt-auto">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold font-heading mb-4 gradient-text">Mohammad Umair</h3>
            <p className="text-primary-foreground/70 mb-4">
              Passionate Data Scientist transforming complex data into actionable insights.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <a
                href="mailto:khanmohdumair752@gmail.com"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary transition-colors"
              >
                <Mail size={18} />
                khanmohdumair752@gmail.com
              </a>
              <a
                href="tel:+919792098768"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary transition-colors"
              >
                <Phone size={18} />
                +91 9792098768
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © {currentYear} Mohammad Umair. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
