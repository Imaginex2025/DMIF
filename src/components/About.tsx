import { Statistics } from "./Statistics";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon } from "../components/Icons";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export const About = () => {
  interface FeatureProps {
    icon: JSX.Element;
    title: string;
    description: string;
  }

  const features: FeatureProps[] = [
    {
      icon: <MedalIcon />,
      title: "Vision",
      description:
        "To create a generation of student-inventors who build intellectual property and launch meaningful ventures.",
    },
    {
      icon: <MapIcon />,
      title: "Mission",
      description:
        "Provide mentorship-based programs that transform students into innovators through practical IP development.",
    },
    {
      icon: <PlaneIcon />,
      title: "Values",
      description:
        "Innovation, mentorship, practica mentorship, practical learning, and creating lasting impact through intellectual property.",
    },
  ];

  // Animation controls
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
    visible: (i: number) => ({
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    }),
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.2 + i * 0.15, duration: 0.5 },
    }),
  };

  return (
    <section
      id="about"
      className="container py-6 flex flex-col gap-5"
      ref={ref}
    >
      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="bg-muted/50 border rounded-lg py-12"
      >
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <motion.div variants={itemVariants}>
            <img
              src="/image.JPG"
              alt=""
              className="w-[300px]  rounded-lg"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Dr. Madhan Kumar
              </h2>
              <motion.p
                variants={itemVariants}
                className="text-xl text-muted-foreground mt-4"
              >
                Dr. Madhan brings over 15 years of expertise in innovation and entrepreneurship, having mentored hundreds of students from ideation through to implementation. His work focuses on turning ideas into action, enabling aspiring innovators to build real-world solutions from academic concepts. Through his unique methodology, he transforms theoretical knowledge into practical applications, often culminating in intellectual property and startup ventures. Dr. Madhan’s approach bridges the gap between academic learning and entrepreneurial execution, equipping students not only with technical skills but also with the mindset and tools to thrive in the innovation ecosystem. His guidance has led to the successful launch of numerous student-led initiatives and startups, making him a trusted mentor in the innovation space. By blending structured mentorship with hands-on experience, he empowers the next generation of thinkers, doers, and changemakers to convert their potential into tangible impact. His mission is clear: to shape futures through innovation-driven education.
              </motion.p>
            </div>

            {/* Animate Statistics */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Statistics />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Feature Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : ""}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            custom={i}
            variants={cardVariants}
          >
            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle className="grid gap-4 place-items-center">
                  {feature.icon}
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>{feature.description}</CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};