import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Tilt from "react-parallax-tilt";

const projects = [
  {
    title: "Dev Detective",
    description: "GitHub profile explorer with detailed stats and repository insights",
    tags: ["HTML", "CSS", "JavaScript", "GitHub API"],
    gradient: "from-blue-500 to-cyan-500",
    github: "https://github.com/sudheerxdev/Dev-Detective",
    live: "#",
  },
  {
    title: "Portfolio Pro",
    description: "Modern portfolio website with 3D animations and dark mode",
    tags: ["React", "Framer Motion", "TypeScript", "Tailwind"],
    gradient: "from-purple-500 to-pink-500",
    github: "#",
    live: "#",
  },
  {
    title: "Code Analyzer",
    description: "AI-powered code review and optimization tool for developers",
    tags: ["React", "Node.js", "OpenAI", "MongoDB"],
    gradient: "from-green-500 to-teal-500",
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

        {/* 3D Tilt Projects Grid */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Tilt
              key={project.title}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              scale={1.02}
              transitionSpeed={2000}
              glareEnable={true}
              glareMaxOpacity={0.2}
              glareColor="#00d9ff"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="relative h-96 perspective-1000"
                onMouseEnter={() => setFlippedCard(index)}
                onMouseLeave={() => setFlippedCard(null)}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
                    flippedCard === index ? "rotate-y-180" : ""
                  }`}
                >
                  {/* Front of Card */}
                  <div className="absolute inset-0 backface-hidden glass rounded-2xl p-6 border border-white/10 hover:border-primary/30 transition-all">
                    <div
                      className={`w-full h-32 rounded-lg bg-gradient-to-r ${project.gradient} mb-4 opacity-80 glow-accent`}
                    />
                    <h3 className="text-xl font-bold mb-2 gradient-text">{project.title}</h3>
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
                    <p className="text-xs text-muted-foreground mt-4">Hover to flip</p>
                  </div>

                  {/* Back of Card */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 glass rounded-2xl p-6 border border-primary/30 flex flex-col justify-between glow-primary">
                    <div>
                      <h3 className="text-xl font-bold mb-3 gradient-text">
                        {project.title}
                      </h3>
                      <div className="mb-4">
                        <p className="text-sm font-semibold mb-2 text-primary">Tech Stack:</p>
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
                        className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground glow-primary"
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
                        className="flex-1 border-primary/50 hover:bg-primary/10 hover:border-primary"
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
            </Tilt>
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
