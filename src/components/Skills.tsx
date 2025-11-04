const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "HTML/CSS"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "Express", "PostgreSQL", "MongoDB", "REST APIs"]
    },
    {
      title: "IA & Automação",
      skills: ["OpenAI", "Langchain", "Zapier", "N8n", "Make", "Python AI"]
    },
    {
      title: "Ferramentas",
      skills: ["Git", "Docker", "AWS", "Vercel", "Supabase", "VS Code"]
    }
  ];

  return (
    <section id="habilidades" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tecnologias & <span className="bg-gradient-primary bg-clip-text text-transparent">Habilidades</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ferramentas e tecnologias que domino para criar soluções incríveis
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="text-xl font-bold mb-4 text-primary">
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="px-3 py-2 rounded-lg bg-muted/50 text-sm hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
