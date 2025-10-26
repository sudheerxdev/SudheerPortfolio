import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CircularProgress } from "@/components/CircularProgress";
import { Code2, Database, Globe } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: [
      { name: "C++", percentage: 90 },
      { name: "Python", percentage: 85 },
      { name: "JavaScript", percentage: 88 },
    ],
  },
  {
    title: "Web Development",
    icon: Globe,
    skills: [
      { name: "HTML/CSS", percentage: 95 },
      { name: "React", percentage: 90 },
      { name: "Node.js", percentage: 80 },
    ],
  },
  {
    title: "CS Core",
    icon: Database,
    skills: [
      { name: "DSA", percentage: 92 },
      { name: "Algorithms", percentage: 88 },
      { name: "OOP", percentage: 85 },
    ],
  },
];

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

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
            Technical <span className="gradient-text">Skills</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My expertise across programming languages, web technologies, and computer science fundamentals
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div ref={ref} className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.2 }}
              className="glass rounded-3xl p-8 border border-primary/20 hover:border-primary/40 transition-all"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="glass p-3 rounded-lg border border-primary/30 glow-primary">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold gradient-text">{category.title}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {category.skills.map((skill, skillIndex) => (
                  <CircularProgress
                    key={skill.name}
                    percentage={skill.percentage}
                    label={skill.name}
                    delay={categoryIndex * 0.2 + skillIndex * 0.15}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold mb-6 gradient-text">Also Proficient In</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Git", "GitHub", "DBMS", "TypeScript", "Tailwind CSS", "REST APIs", "Problem Solving"].map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.1, boxShadow: "0 0 20px hsl(var(--primary) / 0.4)" }}
                className="glass px-4 py-2 rounded-full text-sm border border-primary/30 hover:border-primary/60 transition-all cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div 
        className="absolute top-1/4 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10" 
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
};

export default Skills;
