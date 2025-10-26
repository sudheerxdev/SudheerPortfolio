import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Trophy, Code2, GraduationCap, Target } from "lucide-react";
import { useEffect, useState } from "react";

const metrics = [
  {
    label: "Mathematics Excellence",
    value: 99,
    icon: GraduationCap,
    color: "hsl(270 100% 60%)",
    description: "Top scorer in Class 12th",
  },
  {
    label: "Data Structures Mastery",
    value: 85,
    icon: Code2,
    color: "hsl(190 100% 50%)",
    description: "Engineering Mathematics & DSA",
  },
  {
    label: "Coding Activity",
    value: 90,
    icon: Target,
    color: "hsl(210 100% 55%)",
    description: "Consistent problem solving",
  },
];

const milestones = [
   {
    year: "2021",
    title: "Mathematics Champion",
    description: "Scored 99/100 in Class 10th Mathematics",
    achievement: "Top Scorer",
  },
  {
    year: "2022",
    title: "Mathematics Champion",
    description: "Scored 99/100 in Class 11th Mathematics",
    achievement: "Top Scorer",
  },
   {
    year: "2023",
    title: "Mathematics Champion",
    description: "Scored 99/100 in Class 12th Mathematics",
    achievement: "Top Scorer",
  },
  {
    year: "2024",
    title: "B.Tech Journey Begins",
    description: "Started Computer Science Engineering with focus on algorithms",
    achievement: "Academic Start",
  },
   {
    year: "2024",
    title: "DSA Excellence",
    description: "Scored 59/70 in Data Structures ",
    achievement: "Strong Foundation",
  },
  {
    year: "2023",
    title: "Mathematics Excellence",
    description: "Scored 69/70 in Engineering Math",
    achievement: "Strong Foundation",
  },
  {
    year: "2024",
    title: "Competitive Programming",
    description: "Achieved 1000+ problems solved across platforms",
    achievement: "Coding Milestone",
  },
  {
    year: "2025",
    title: "Competitive Programming",
    description: "Achieved 400+ problems solved across leetcode platforms",
    achievement: "Coding Milestone",
  },
];

const CircularProgress = ({
  value,
  color,
  size = 180,
}: {
  value: number;
  color: string;
  size?: number;
}) => {
  const [progress, setProgress] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (!inView) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const duration = 2000;
      const newProgress = Math.min((elapsed / duration) * value, value);
      setProgress(newProgress);

      if (elapsed < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, value]);

  const radius = (size - 20) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div ref={ref} className="relative" style={{ width: size, height: size }}>
      <svg className="transform -rotate-90" width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="hsl(var(--muted))"
          strokeWidth="10"
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth="10"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{
            transition: "stroke-dashoffset 0.5s ease",
            filter: `drop-shadow(0 0 10px ${color})`,
          }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-bold gradient-text">
          {Math.round(progress)}%
        </span>
      </div>
    </div>
  );
};

const Achievements = () => {
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
            Achievement <span className="gradient-text">Dashboard</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A futuristic view of my academic and coding excellence
          </p>
        </motion.div>

        {/* Circular Metrics */}
        <div ref={ref} className="grid md:grid-cols-3 gap-8 mb-20">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.2 }}
              className="glass p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-all text-center"
            >
              <div className="flex justify-center mb-4">
                <div
                  className="p-4 rounded-xl"
                  style={{
                    background: `${metric.color}20`,
                    boxShadow: `0 0 30px ${metric.color}30`,
                  }}
                >
                  <metric.icon className="w-8 h-8" style={{ color: metric.color }} />
                </div>
              </div>

              <div className="flex justify-center mb-4">
                <CircularProgress value={metric.value} color={metric.color} />
              </div>

              <h3 className="text-xl font-bold mb-2">{metric.label}</h3>
              <p className="text-muted-foreground text-sm">{metric.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Milestone Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="gradient-text">Achievement Timeline</span>
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary opacity-30" />

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.15 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col md:gap-12`}
                >
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ delay: 1 + index * 0.15, type: "spring" }}
                    className="absolute left-8 md:left-1/2 w-8 h-8 -ml-4 rounded-full bg-primary glow-primary z-10 flex items-center justify-center border-4 border-background"
                  >
                    <Trophy className="w-4 h-4" />
                  </motion.div>

                  {/* Content */}
                  <div className="w-full md:w-5/12 ml-20 md:ml-0">
                    <div className="glass p-6 rounded-xl border border-primary/20 hover:border-primary/50 transition-all">
                      <div className="flex items-start justify-between mb-3">
                        <span className="text-2xl font-bold gradient-text">
                          {milestone.year}
                        </span>
                        <span className="px-3 py-1 text-xs bg-secondary/20 text-secondary rounded-full border border-secondary/30">
                          {milestone.achievement}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-40 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse-slow" />
        <div className="absolute bottom-40 left-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl -z-10 animate-pulse-slow" />
      </div>
    </section>
  );
};

export default Achievements;
