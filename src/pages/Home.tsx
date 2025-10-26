import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import profileImage from "@/assets/sudheer-profile.jpg";

const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 30px hsl(190 100% 50% / 0.3)",
                    "0 0 60px hsl(270 100% 60% / 0.5)",
                    "0 0 30px hsl(190 100% 50% / 0.3)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30"
              >
                <img
                  src={profileImage}
                  alt="Sudheer Yadav"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-primary/20 blur-xl"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-secondary/20 blur-xl"
              />
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 text-center lg:text-left"
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Hi, I'm{" "}
              <span className="gradient-text">Sudheer Yadav</span>
            </motion.h1>

            <div className="text-xl md:text-2xl text-muted-foreground mb-8 min-h-[80px]">
              <TypeAnimation
                sequence={[
                  "Web Developer",
                  2000,
                  "Competitive Programmer",
                  2000,
                  "Problem Solver",
                  2000,
                  "Code Enthusiast",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="gradient-text font-semibold"
              />
            </div>

            <motion.p
              className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Building innovative web solutions and conquering algorithmic challenges.
              Passionate about clean code, creative design, and continuous learning.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link to="/projects">
                <Button
                  size="lg"
                  className="group bg-primary hover:bg-primary/90 text-primary-foreground glow-primary font-semibold px-8"
                >
                  View Projects
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 hover:border-primary font-semibold px-8"
              >
                <Download className="mr-2" />
                Download Resume
              </Button>
            </motion.div>

            {/* Animated stats */}
            <motion.div
              className="grid grid-cols-3 gap-4 mt-12 max-w-md mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {[
                { label: "Projects", value: "5+" },
                { label: "Experience", value: "2+ Yrs" },
                { label: "Problems", value: "500+" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="glass p-4 rounded-lg text-center"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -z-10 animate-pulse-slow" />
    </section>
  );
};

export default Home;
