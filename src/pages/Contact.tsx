import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Github, Linkedin, Code2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/sudheerxdev",
    color: "hsl(0 0% 100%)",
    username: "@sudheerxdev",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "#",
    color: "hsl(210 100% 50%)",
    username: "Sudheer Yadav",
  },
  {
    name: "LeetCode",
    icon: Code2,
    url: "https://leetcode.com",
    color: "hsl(30 100% 50%)",
    username: "@sudheer",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:sudheer@example.com",
    color: "hsl(0 84% 60%)",
    username: "sudheer@example.com",
  },
];

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent! ✨",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

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
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Let's collaborate on exciting projects or discuss opportunities
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="glass p-8 rounded-2xl border border-primary/30"
          >
            <h2 className="text-2xl font-bold mb-6 gradient-text">Send a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Your Name</label>
                <Input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background/50 border-white/10 focus:border-primary/50 focus:ring-primary/20"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <Input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background/50 border-white/10 focus:border-primary/50 focus:ring-primary/20"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background/50 border-white/10 focus:border-primary/50 focus:ring-primary/20 min-h-[150px]"
                  placeholder="Your message here..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 glow-primary font-semibold group"
              >
                <Send className="mr-2 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="space-y-6"
          >
            <div className="glass p-8 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-bold mb-6 gradient-text">Connect With Me</h2>

              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.03, x: 10 }}
                    className="flex items-center gap-4 p-4 rounded-xl border border-white/10 hover:border-primary/50 transition-all group"
                    style={{
                      boxShadow: `0 0 0 ${social.color}00`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `0 0 20px ${social.color}30`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = `0 0 0 ${social.color}00`;
                    }}
                  >
                    <div
                      className="p-3 rounded-lg"
                      style={{
                        background: `${social.color}20`,
                      }}
                    >
                      <social.icon className="w-6 h-6" style={{ color: social.color }} />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold">{social.name}</div>
                      <div className="text-sm text-muted-foreground">{social.username}</div>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="glass p-8 rounded-2xl border border-white/10"
            >
              <h3 className="text-xl font-bold mb-4">Looking For</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary glow-primary" />
                  Freelance Web Development Projects
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary glow-secondary" />
                  Internship Opportunities
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary glow-primary" />
                  Open Source Collaborations
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary glow-secondary" />
                  GSoC & Similar Programs
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10 animate-pulse-slow" />
      </div>
    </section>
  );
};

export default Contact;
