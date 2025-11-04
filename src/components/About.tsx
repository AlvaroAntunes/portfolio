import { Code2, Bot, Sparkles } from "lucide-react";

const About = () => {
  const specialties = [
    {
      icon: Code2,
      title: "Desenvolvimento Web",
      description: "Aplicações web modernas, responsivas e de alta performance com as melhores tecnologias do mercado."
    },
    {
      icon: Bot,
      title: "Automações com IA",
      description: "Soluções inteligentes que automatizam processos e otimizam operações usando inteligência artificial."
    },
    {
      icon: Sparkles,
      title: "Integração & APIs",
      description: "Conectando sistemas e criando fluxos automatizados para maximizar eficiência."
    }
  ];

  return (
    <section id="sobre" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Sobre <span className="bg-gradient-primary bg-clip-text text-transparent">Mim</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Transformo ideias em realidade digital através de código limpo e soluções inteligentes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-gradient-card backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-card animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 p-3 rounded-xl bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                <specialty.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {specialty.title}
              </h3>
              <p className="text-muted-foreground">
                {specialty.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
