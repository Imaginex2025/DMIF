import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon } from "../components/Icons";
import { motion, useAnimation, useInView, Variants } from "framer-motion";
import { useEffect, useRef } from "react";

export const About = () => {
  interface FeatureProps {
    icon: JSX.Element;
    title: string;
    description: string;
  }

  interface StatsProps {
    quantity: string;
    description: string;
  }

  const stats: StatsProps[] = [
    { quantity: "120+", description: "Patents Filled" },
    { quantity: "95", description: "Grants" },
    { quantity: "6", description: "Startup Launched" },
    { quantity: "23", description: "Years Experience" },
  ];

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
        "Innovation, mentorship, practical learning, and creating lasting impact through intellectual property.",
    },
  ];

  // Animation setup
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
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
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.2 + i * 0.15, duration: 0.5, ease: "easeOut" as const },
    }),
  };

  return (
    <section id="about" className="container py-6 flex flex-col gap-5" ref={ref}>
      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="bg-muted/50 border rounded-lg py-12"
      >
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <motion.div variants={itemVariants} className="flex-shrink-0 h-full">
            <img
              src="/image.JPG"
              alt=""
              className="h-full w-[300px] rounded-lg object-cover"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Dr. Madhan Kumar
              </h2>
              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg md:text-xl text-muted-foreground mt-4"
              >
                {/* Short version for mobile */}
                <span className="block sm:hidden">
                  Dr. Madhan brings over 15 years of expertise in innovation and entrepreneurship, mentoring students to build real-world solutions.
                </span>
                {/* Full version for tablets and up */}
                <span className="hidden sm:block">
                  Dr. Madhan brings over 15 years of expertise in innovation and entrepreneurship, having mentored hundreds of students from ideation through to implementation. His work focuses on turning ideas into action, enabling aspiring innovators to build real-world solutions from academic concepts. Through his unique methodology, he transforms theoretical knowledge into practical applications, often culminating in intellectual property and startup ventures. Dr. Madhan’s approach bridges the gap between academic learning and entrepreneurial execution, equipping students not only with technical skills but also with the mindset and tools to thrive in the innovation ecosystem. His guidance has led to the successful launch of numerous student-led initiatives and startups, making him a trusted mentor in the innovation space. By blending structured mentorship with hands-on experience, he empowers the next generation of thinkers, doers, and changemakers to convert their potential into tangible impact. His mission is clear: to shape futures through innovation-driven education.
                </span>
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
<section id="statistics">
  <div className="grid grid-cols-3 lg:grid-cols-4 gap-8">
    {stats.map(({ quantity, description }, index) => (
      <div
        key={description}
        className={`space-y-2 text-center ${
          index === 3 ? "hidden sm:block" : ""
        }`}
      >
        <h2 className="text-lg sm:text-3xl font-bold">{quantity}</h2>
        <p className="text-md sm:text-xl text-muted-foreground">{description}</p>
      </div>
    ))}
  </div>
</section>

            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Feature Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            custom={i}
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Card className="bg-muted/50 transition-colors h-full duration-300 hover:bg-muted/70">
              <CardHeader>
                <CardTitle className="grid gap-4 place-items-center text-lg sm:text-xl">
                  {feature.icon}
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center text-sm sm:text-base">
                {feature.description}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
