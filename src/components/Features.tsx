import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import growthImg from "../assets/growth.png";
import reflectingImg from "../assets/reflecting.png";
import lookingAheadImg from "../assets/looking-ahead.png";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface FeatureProps {
  title: string;
  description: string;
  image?: string;
}

const features: FeatureProps[] = [
  {
    title: "Creativity in the AI Era",
    description:
      "In an age where AI can replicate tasks, creativity becomes the key differentiator. Human ingenuity is now the true competitive advantage.",
    image: lookingAheadImg,
  },
  {
    title: "The Rise of the Creative Economy",
    description:
      "The creative economy is projected to grow from $3.1T to $5T by 2030, opening vast opportunities for those who can innovate and lead.",
    image: reflectingImg,
  },
  {
    title: "Comparison with AI/Web3/EdTech Economies",
    description:
      "Creative industries are outpacing many tech sectors, merging innovation with cultural and economic impact.",
    image: growthImg,
  },
];

const highlightList: string[] = [
  "Contextual relevance",
  "Competitive advantage",
  "Ownership-driven learning",
  "Economic growth potential",
  "Career impact through IP",
];

export const WhyItMatters = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: 0.2 + i * 0.08, duration: 0.4 },
    }),
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.2 + i * 0.15, duration: 0.5 },
    }),
  };

  return (
    <section id="why-it-matters" className="container py-6 space-y-8" ref={ref}>
      {/* Heading */}
      <motion.h2
        variants={itemVariants}
        initial="hidden"
        animate={controls}
        className="text-3xl lg:text-4xl font-bold md:text-center"
      >
        Why{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          It Matters
        </span>
      </motion.h2>

      {/* Badges */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="flex flex-wrap md:justify-center gap-4"
      >
        {highlightList.map((item, i) => (
          <motion.div key={item} custom={i} variants={badgeVariants}>
            <Badge variant="secondary" className="text-sm">
              {item}
            </Badge>
          </motion.div>
        ))}
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            custom={i}
            variants={cardVariants}
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            className="h-full"
          >
            <Card
              className="h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:border-primary/30 border-2 hover:border-primary/20"
              style={{
                boxShadow: "0 4px 12px -2px rgba(0, 0, 0, 0.08)",
              }}
            >
              <CardHeader>
                <CardTitle className="text-primary">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">{feature.description}</CardContent>
              {feature.image && (
                <CardFooter>
                  <motion.img
                    src={feature.image}
                    alt={feature.title}
                    className="w-[200px] lg:w-[300px] mx-auto transition-transform duration-300"
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  />
                </CardFooter>
              )}
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};