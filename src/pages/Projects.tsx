import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack shopping platform with cart, payments, and admin dashboard",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    gradient: "from-blue-500 to-cyan-500",
    github: "#",
    live: "#",
  },
  {
    title: "Task Management App",
    description: "Collaborative task tracker with real-time updates and team features",
    tags: ["React", "Firebase", "Tailwind CSS"],
    gradient: "from-purple-500 to-pink-500",
    github: "#",
    live: "#",
  },
  {
    title: "Weather Dashboard",
    description: "Interactive weather app with forecasts, maps, and location search",
    tags: ["JavaScript", "API Integration", "Charts"],
    gradient: "from-green-500 to-teal-500",
    github: "#",
    live: "#",
  },
  {
    title: "Portfolio Website",
    description: "Modern portfolio with animations, dark mode, and contact form",
    tags: ["React", "Framer Motion", "TypeScript"],
    gradient: "from-orange-500 to-red-500",
    github: "#",
    live: "#",
  },
  {
    title: "Social Media Clone",
    description: "Instagram-inspired platform with posts, likes, and user profiles",
    tags: ["React", "Redux", "Express", "PostgreSQL"],
    gradient: "from-indigo-500 to-purple-500",
    github: "#",
    live: "#",
  },
  {
    title: "Code Snippet Manager",
    description: "Developer tool for organizing and sharing code snippets",
    tags: ["React", "CodeMirror", "LocalStorage"],
    gradient: "from-yellow-500 to-orange-500",
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  return (
    <section className="min-h-screen px-4 pt-24 pb-16">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my development journey and technical expertise
          </p>
          <div className="mt-6">
            <a
              href="https://github.com/sudheerrrrit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 hover:border-primary"
              >
                <Github className="mr-2" />
                View GitHub Profile
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="relative h-80 perspective-1000"
              onMouseEnter={() => setFlippedCard(index)}
              onMouseLeave={() => setFlippedCard(null)}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
                  flippedCard === index ? "rotate-y-180" : ""
                }`}
              >
                {/* Front of Card */}
                <div className="absolute inset-0 backface-hidden glass rounded-2xl p-6 border border-white/10">
                  <div
                    className={`w-full h-32 rounded-lg bg-gradient-to-r ${project.gradient} mb-4 opacity-80`}
                  />
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs bg-primary/20 text-primary rounded-full border border-primary/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Back of Card */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 glass rounded-2xl p-6 border border-primary/30 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-3 gradient-text">
                      {project.title}
                    </h3>
                    <div className="mb-4">
                      <p className="text-sm font-semibold mb-2">Tech Stack:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs bg-secondary/20 text-secondary rounded border border-secondary/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex gap-3 mt-4">
                    <Button
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary/90 glow-primary"
                      asChild
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-primary/50 hover:bg-primary/10"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default Projects;
