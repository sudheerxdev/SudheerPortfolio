import { motion, useScroll, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import profileImage from "@/assets/sudheer-profile.jpg";

const Home = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Profile Image with 3D Tilt */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ y, opacity }}
            className="order-2 lg:order-1 flex justify-center"
          >
            <Tilt
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              scale={1.05}
              transitionSpeed={2000}
              glareEnable={true}
              glareMaxOpacity={0.3}
              glareColor="#00d9ff"
              glarePosition="all"
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
                  className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 glow-primary"
                >
                  <img
                    src={profileImage}
                    alt="Sudheer Yadav - Web Developer and Competitive Programmer"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* 3D Floating geometric shapes */}
                <motion.div
                  animate={{ 
                    rotate: 360,
                    y: [0, -20, 0]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-primary/20 blur-xl"
                />
                <motion.div
                  animate={{ 
                    rotate: -360,
                    y: [0, 20, 0]
                  }}
                  transition={{ 
                    rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-secondary/20 blur-xl"
                />
              </div>
            </Tilt>
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

            <div className="text-xl md:text-2xl text-muted-foreground mb-6 min-h-[80px]">
              <TypeAnimation
                sequence={[
                  "Competitive Programmer",
                  2000,
                  "Web Developer",
                  2000,
                  "Problem Solver",
                  2000,
                  "C++ | Python | JavaScript",
                  2000,
                  "React | Node.js | DSA",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="gradient-text font-semibold"
              />
            </div>

            <motion.p
              className="text-lg text-muted-foreground mb-6 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              I love building interactive digital experiences and solving challenging problems. 
              Passionate about clean code, algorithms, and creating impactful solutions.
            </motion.p>

            {/* Social Icons */}
            <motion.div
              className="flex gap-4 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {[
                { Icon: Github, href: "https://github.com/sudheerxdev", label: "GitHub" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/sudheercodec/", label: "LinkedIn" },
                { Icon: Mail, href: "yadavsudheer20072005@gmail.com", label: "Email" }
              ].map(({ Icon, href, label }) => (
                <Tilt key={label} tiltMaxAngleX={20} tiltMaxAngleY={20} scale={1.1}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass p-3 rounded-lg hover:glow-primary transition-all"
                    aria-label={label}
                  >
                    <Icon className="w-6 h-6 text-primary" />
                  </a>
                </Tilt>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05}>
                <Link to="/projects">
                  <Button
                    size="lg"
                    className="group bg-primary hover:bg-primary/90 text-primary-foreground glow-primary font-semibold px-8"
                  >
                    View Projects
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </Tilt>

              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/50 hover:bg-primary/10 hover:border-primary font-semibold px-8"
                >
                  <Download className="mr-2" />
                  Download Resume
                </Button>
              </Tilt>
            </motion.div>

            {/* 3D Animated Stats */}
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
                <Tilt key={stat.label} tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.08}>
                  <motion.div
                    className="glass p-4 rounded-lg text-center border border-primary/20 hover:border-primary/50 transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ boxShadow: "0 0 20px hsl(var(--primary) / 0.4)" }}
                  >
                    <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                  </motion.div>
                </Tilt>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* 3D Floating Gradient Orbs */}
      <motion.div 
        className="absolute top-1/4 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl -z-10" 
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          y: [0, -30, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -z-10" 
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
          y: [0, 30, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10" 
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
      />
    </section>
  );
};

export default Home;
