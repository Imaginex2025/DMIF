import { Button } from "./ui/button";
import { motion } from "framer-motion";

export const Cta = () => {
  const handleScroll = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    const section = document.querySelector(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="cta"
      className="bg-muted/50 py-16 my-24 sm:my-32"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center gap-8">
        {/* Left side text */}
        <motion.div
          className="lg:col-start-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl md:text-4xl font-bold">
            All Your
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}Ideas & Concepts{" "}
            </span>
            In One Place
          </h2>
          <p className="text-muted-foreground text-md md:text-xl mt-4 mb-8 lg:mb-0">
            Discover why people love this — we bring together innovative
            solutions, creative ideas, and impactful concepts to help you
            achieve your goals, all in one seamless platform.
          </p>
        </motion.div>

        {/* Right side buttons */}
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              className="w-full text-white md:mr-4 md:w-auto"
              onClick={(e) => handleScroll(e, "#Programs")}
            >
              Get Info
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="outline" className="w-full md:w-auto"
            onClick={(e) => handleScroll(e, "#Contact")}>
              Apply now
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
