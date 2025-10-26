import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Palette, Zap, Target } from "lucide-react";

const skills = [
  { name: "HTML & CSS", level: 95, color: "hsl(15 100% 55%)" },
  { name: "JavaScript", level: 90, color: "hsl(50 100% 50%)" },
  { name: "React", level: 85, color: "hsl(190 100% 50%)" },
  { name: "C++", level: 88, color: "hsl(210 100% 60%)" },
  { name: "Data Structures", level: 85, color: "hsl(270 100% 60%)" },
];

const highlights = [
  {
    icon: Code2,
    title: "Clean Code Advocate",
    description: "Writing maintainable, scalable, and elegant solutions",
  },
  {
    icon: Palette,
    title: "Design Enthusiast",
    description: "Crafting beautiful and intuitive user interfaces",
  },
  {
    icon: Zap,
    title: "Performance Focused",
    description: "Optimizing for speed and efficiency in every project",
  },
  {
    icon: Target,
    title: "Problem Solver",
    description: "Tackling complex algorithmic challenges with precision",
  },
];

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="min-h-screen px-4 pt-24 pb-16">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A passionate developer combining creativity with technical excellence
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="glass p-8 md:p-12 rounded-2xl mb-12"
        >
          <p className="text-lg leading-relaxed text-foreground/90">
            I'm a <span className="gradient-text font-semibold">Web Developer</span> and{" "}
            <span className="gradient-text font-semibold">Competitive Programmer</span> with
            a passion for building innovative digital solutions. Currently pursuing B.Tech in
            Computer Science Engineering, I blend academic excellence with hands-on development
            experience. My journey spans from crafting pixel-perfect frontends to solving
            complex algorithmic challenges on competitive coding platforms.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="glass p-6 rounded-xl border border-primary/20 hover:border-primary/50 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/20 glow-primary">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="gradient-text">Technical Skills</span>
          </h2>

          <div className="space-y-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="glass p-6 rounded-xl"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold text-lg">{skill.name}</span>
                  <span className="text-primary font-bold">{skill.level}%</span>
                </div>

                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.7 + index * 0.1, ease: "easeOut" }}
                    className="h-full rounded-full relative"
                    style={{
                      background: `linear-gradient(90deg, ${skill.color}, hsl(270 100% 60%))`,
                      boxShadow: `0 0 20px ${skill.color}80`,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl -z-10" />
      </div>
    </section>
  );
};

export default About;
