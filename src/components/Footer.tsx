import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative mt-20 border-t border-white/10 py-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 text-center"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="inline-block"
        >
          <p className="text-muted-foreground">
            © 2025{" "}
            <span className="gradient-text font-semibold">Sudheer Yadav</span>{" "}
            | Built with Passion & Code
          </p>
        </motion.div>

        <motion.div
          className="mt-4 h-px w-32 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent opacity-0"
          whileHover={{ opacity: 1, width: "200px" }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </footer>
  );
};

export default Footer;
