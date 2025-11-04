import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Moderno",
      description: "Plataforma completa de e-commerce com painel administrativo, pagamentos integrados e sistema de gestão de estoque.",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop"
    },
    {
      title: "Chatbot IA para Atendimento",
      description: "Sistema inteligente de atendimento ao cliente com IA que responde perguntas, agenda reuniões e resolve problemas automaticamente.",
      tags: ["OpenAI", "Python", "FastAPI", "React"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop"
    },
    {
      title: "Automação de Marketing",
      description: "Suite de ferramentas para automatizar campanhas de marketing, integração com redes sociais e análise de dados.",
      tags: ["N8n", "TypeScript", "MongoDB", "APIs"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
    },
    {
      title: "Dashboard Analítico",
      description: "Painel completo de análise de dados em tempo real com gráficos interativos e relatórios customizados.",
      tags: ["React", "D3.js", "Node.js", "WebSocket"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
    },
    {
      title: "Sistema de Gestão CRM",
      description: "CRM personalizado para gestão de clientes, pipeline de vendas e automação de follow-ups.",
      tags: ["Next.js", "Supabase", "TypeScript", "Tailwind"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
    },
    {
      title: "Assistente IA de Produtividade",
      description: "Aplicação que usa IA para organizar tarefas, fazer resumos de reuniões e sugerir otimizações no fluxo de trabalho.",
      tags: ["Python", "Langchain", "React", "OpenAI"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop"
    }
  ];

  return (
    <section id="projetos" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Projetos em <span className="bg-gradient-primary bg-clip-text text-transparent">Destaque</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Alguns dos projetos que desenvolvi recentemente
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-card animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button size="sm" variant="outline" className="flex-1 border-primary/30 hover:border-primary hover:bg-primary/10">
                    <Github className="mr-2 h-4 w-4" />
                    Código
                  </Button>
                  <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
