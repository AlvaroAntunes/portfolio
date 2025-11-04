import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 Portfólio Dev. Todos os direitos reservados.
          </p>
          
          <div className="flex gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="p-2 rounded-lg bg-card hover:bg-primary/20 transition-all hover:scale-110">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="p-2 rounded-lg bg-card hover:bg-primary/20 transition-all hover:scale-110">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:contato@exemplo.com"
               className="p-2 rounded-lg bg-card hover:bg-primary/20 transition-all hover:scale-110">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
