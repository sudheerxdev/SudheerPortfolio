import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Award, Download, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import Tilt from "react-parallax-tilt";
import { useEffect, useState, useRef } from "react";

const educationData = [
  {
    degree: "B.Tech in Computer Science Engineering",
    institution: "Babu Banarasi Das Northern India Institute Of Technology , Lucknow",
    period: "2021 - 2025",
    highlights: [
      { subject: "Engineering Mathematics", score: 69, total: 70 },
      { subject: "Data Structures & Algorithms", score: 59, total: 70 },
      { subject: "Object-Oriented Programming", score: 62, total: 70 },
      { subject: "Database Management Systems", score: 58, total: 70 },
    ],
    icon: GraduationCap,
  },
  {
    degree: "Class 12th (Science - PCM)",
    institution: "High School",
    period: "2019 - 2021",
    highlights: [
      { subject: "Mathematics", score: 99, total: 100 },
      { subject: "Physics", score: 92, total: 100 },
      { subject: "Chemistry", score: 88, total: 100 },
    ],
    icon: Award,
  },
];

const CountUpNumber = ({ end, duration = 2 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (!inView) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, end, duration]);

  return <span ref={ref}>{count}</span>;
};

const Education = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="min-h-screen px-4 pt-24 pb-16 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Education & <span className="gradient-text">Achievements</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Academic excellence combined with practical learning
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={ref} className="relative space-y-12">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary opacity-30" />

          {educationData.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.3 }}
              className={`relative flex items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } flex-col md:gap-8`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-primary glow-primary z-10" />

              {/* Content */}
              <div className="w-full md:w-1/2 ml-12 md:ml-0">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass p-6 md:p-8 rounded-2xl border border-primary/30"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-primary/20 glow-primary">
                      <edu.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{edu.degree}</h3>
                      <p className="text-muted-foreground text-sm">{edu.period}</p>
                    </div>
                  </div>

                  <p className="text-foreground/80 mb-4 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-primary" />
                    {edu.institution}
                  </p>

                  {/* Scores */}
                  <div className="space-y-3">
                    {edu.highlights.map((item, idx) => (
                      <div key={item.subject} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{item.subject}</span>
                          <span className="text-lg font-bold gradient-text">
                            <CountUpNumber end={item.score} /> / {item.total}
                          </span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${(item.score / item.total) * 100}%` } : {}}
                            transition={{ duration: 1.5, delay: 0.5 + idx * 0.1 }}
                            className="h-full bg-gradient-to-r from-primary to-secondary glow-accent"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Top Score Badge for Math */}
                  {edu.highlights.some((h) => h.score === 99) && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ delay: 1, type: "spring" }}
                      className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/50 rounded-full"
                    >
                      <Award className="w-4 h-4 text-primary" />
                      <span className="text-sm font-semibold gradient-text">
                        Top Scorer in Mathematics
                      </span>
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Download Marksheet */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 glow-primary font-semibold px-8"
          >
            <Download className="mr-2" />
            Download Marksheet
          </Button>
        </motion.div>
      </div>

      {/* Parallax decorative elements */}
      <motion.div 
        style={{ y }}
        className="absolute top-1/4 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" 
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
        className="absolute bottom-1/3 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl -z-10" 
      />
    </section>
  );
};

export default Education;
