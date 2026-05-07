import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Trophy, Code, Target, TrendingUp } from "lucide-react";




const platforms = [
  {
    name: "LeetCode",
    icon: Code,
    stats: {
      solved: "350+",

      
      rank: "Top 15%",
      streak: "120+ Days",
    },
    color: "hsl(30 100% 50%)",
    link: "https://leetcode.com",
  },
  {
    name: "Codeforces",
    icon: Trophy,
    stats: {
      rating: "1450",
      
      maxRating: "1520",
      contests: "5+",
    },
    color: "hsl(210 100% 50%)",
    link: "https://codeforces.com",
  },
  {
    name: "CodeChef",
    icon: Target,
    stats: {
      rating: "1680",
      stars: "2★",
      contests: "5+",
    },
    color: "hsl(25 100% 50%)",
    link: "https://codechef.com",
  },
];

const achievements = [
  {
    title: "LeetCode Contest Winner",
    description: "Ranked in top 100 in weekly contest #345",
    icon: Trophy,
  },
  {
    title: "1100+ Problems Solved",
    description: "Across all competitive programming platforms",
    icon: Target,
  },
  {
    title: " on Codeforces",
    description: "Achieved 1500+ rating in under 6 months",
    icon: TrendingUp,
  },
  {
    title: "3-Star CodeChef",
    description: "Consistent performance in monthly contests",
    icon: Code,
  },
];

const CompetitiveProgramming = () => {
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
            Competitive <span className="gradient-text">Programming</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Sharpening problem-solving skills through algorithmic challenges
          </p>
        </motion.div>

        {/* Platform Stats */}
        <div ref={ref} className="grid md:grid-cols-3 gap-6 mb-16">
          {platforms.map((platform, index) => (
            <motion.a
              key={platform.name}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-all group relative overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity blur-2xl"
                style={{ background: platform.color }}
              />

              <div className="relative z-10">
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto"
                  style={{
                    background: `linear-gradient(135deg, ${platform.color}40, ${platform.color}20)`,
                    boxShadow: `0 0 30px ${platform.color}40`,
                  }}
                >
                  <platform.icon
                    className="w-8 h-8"
                    style={{ color: platform.color }}
                  />
                </div>

                <h3 className="text-2xl font-bold mb-6 text-center">{platform.name}</h3>

                <div className="space-y-4">
                  {Object.entries(platform.stats).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex justify-between items-center pb-2 border-b border-white/5"
                    >
                      <span className="text-muted-foreground capitalize">{key}:</span>
                      <span className="font-bold gradient-text">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pulse animation on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                animate={{
                  boxShadow: [
                    `0 0 0px ${platform.color}00`,
                    `0 0 30px ${platform.color}40`,
                    `0 0 0px ${platform.color}00`,
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.a>
          ))}
        </div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="gradient-text">Coding Achievements</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="glass p-6 rounded-xl border border-primary/20 hover:border-primary/50 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/20 glow-primary shrink-0">
                    <achievement.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{achievement.title}</h3>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-40 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse-slow" />
        <div className="absolute bottom-40 left-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10 animate-pulse-slow" />
      </div>
    </section>
  );
};

export default CompetitiveProgramming;
