import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
// import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10 relative">
      {/* Left Side - Text & Buttons */}
      <div className="text-center lg:text-start space-y-6">
        <motion.main
          className="text-5xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="inline">
            <span className="inline text-primary">Dr. Madhan</span> Institute of
          </h1>{" "}
          <h2 className="inline">
            <span className="inline text-primary">Technology</span>
          </h2>
        </motion.main>

        <motion.p
          className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          Build intellectual property, create meaningful impact, and launch your future through mentorship-based innovation and research programs.
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center justify-center lg:justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <Button className="w-full text-white md:w-1/3">Explore Programs</Button>

          <a
            rel="noreferrer noopener"
            href=""
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Apply Now
          </a>
        </motion.div>
      </div>

      {/* Right Side - HeroCards */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        className="z-10"
      >
        <HeroCards />
      </motion.div>

      {/* Shadow Effect - Animated */}
{/* Shadow Effect - Animated */}
<motion.div
  className="absolute shadow inset-0 -z-10 bg-gradient-to-b from-transparent via-black/10 to-black/20 rounded-full blur-2xl sm:blur-3xl"
  initial={{ scale: 0.8, opacity: 0 }} // bigger start for mobile visibility
  animate={{ scale: 1.5, opacity: 0.4 }}
  transition={{
    scale: { duration: 3, ease: "easeOut" },
    opacity: { duration: 2, delay: 0.5 },
  }}
/>

    </section>
  );
};