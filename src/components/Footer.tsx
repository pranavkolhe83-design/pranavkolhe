import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#home" className="text-xl font-heading font-bold">
          <span className="text-primary">P</span>ranav
        </a>
        <p className="text-sm text-muted-foreground flex items-center gap-1">
          © 2024 Pranav Kolhe. Made with <Heart size={14} className="text-primary" /> in Amravati
        </p>
        <div className="flex gap-6">
          {["Home", "About", "Services", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
