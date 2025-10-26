import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const techStack = [
  { name: "HTML5", icon: "🌐", color: "hsl(15 100% 55%)" },
  { name: "CSS3", icon: "🎨", color: "hsl(210 100% 60%)" },
  { name: "JavaScript", icon: "⚡", color: "hsl(50 100% 50%)" },
  { name: "React", icon: "⚛️", color: "hsl(190 100% 50%)" },
  { name: "Node.js", icon: "🟢", color: "hsl(120 60% 45%)" },
  { name: "Git", icon: "📦", color: "hsl(15 80% 50%)" },
  { name: "GitHub", icon: "🐙", color: "hsl(0 0% 20%)" },
  { name: "C++", icon: "💻", color: "hsl(210 100% 60%)" },
  { name: "TypeScript", icon: "📘", color: "hsl(210 80% 55%)" },
  { name: "Tailwind CSS", icon: "🌊", color: "hsl(190 100% 50%)" },
  { name: "MongoDB", icon: "🍃", color: "hsl(120 50% 45%)" },
  { name: "Express", icon: "🚂", color: "hsl(0 0% 40%)" },
];

const certifications = [
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    year: "2023",
    link: "#",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    year: "2023",
    link: "#",
  },
  {
    title: "React - The Complete Guide",
    issuer: "Udemy",
    year: "2024",
    link: "#",
  },
  {
    title: "Advanced C++ Programming",
    issuer: "Coursera",
    year: "2024",
    link: "#",
  },
];

const stats = [
  { label: "Projects Completed", value: "5+" },
  { label: "Years of Experience", value: "2+" },
  { label: "Technologies Mastered", value: "12+" },
  { label: "Certifications Earned", value: "4+" },
];

const TechStack = () => {
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
            Tech <span className="gradient-text">Stack</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to build amazing projects
          </p>
        </motion.div>

        {/* Stats Counter */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 }}
              className="glass p-6 rounded-xl text-center border border-primary/20 hover:border-primary/50 transition-all"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Tech Icons Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="gradient-text">Technologies</span>
          </h2>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.05 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="glass p-6 rounded-xl text-center border border-white/10 hover:border-primary/50 transition-all group cursor-pointer"
                style={{
                  boxShadow: `0 0 0 ${tech.color}00`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 30px ${tech.color}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 0 ${tech.color}00`;
                }}
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <div className="text-sm font-semibold">{tech.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="gradient-text">Certifications</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.9 + index * 0.1 }}
                onMouseEnter={() => setFlippedCard(index)}
                onMouseLeave={() => setFlippedCard(null)}
                className="perspective-1000 h-48"
              >
                <div
                  className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
                    flippedCard === index ? "rotate-y-180" : ""
                  }`}
                >
                  {/* Front */}
                  <div className="absolute inset-0 backface-hidden glass p-6 rounded-xl border border-primary/30 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-primary/20 glow-primary">
                          <Award className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-sm text-muted-foreground">{cert.year}</span>
                      </div>
                      <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
                      <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                    </div>
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 glass p-6 rounded-xl border border-secondary/30 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold gradient-text mb-3">{cert.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Issued by: {cert.issuer}
                      </p>
                      <p className="text-sm text-muted-foreground">Year: {cert.year}</p>
                    </div>
                    <Button
                      size="sm"
                      className="w-full bg-secondary hover:bg-secondary/90 glow-secondary"
                      asChild
                    >
                      <a href={cert.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Certificate
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
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

export default TechStack;
