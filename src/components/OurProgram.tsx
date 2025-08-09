import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../src/components/ui/tabs";
import { CheckCircle } from 'lucide-react';
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const OurProgram = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const listVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.3 + i * 0.1, duration: 0.5 },
    }),
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { opacity: 1, scale: 1, transition: { delay: 0.6, duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section id="programs" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
              Our Programs
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your path to innovation - Patent Track for inventors or Research Track for scholars
            </motion.p>
          </motion.div>

          {/* Tabs */}
          <Tabs defaultValue="patent" className="w-full">
            <motion.div variants={containerVariants} initial="hidden" animate={controls}>
              <TabsList className="grid rounded-lg w-full grid-cols-2 mb-12">
                <TabsTrigger value="patent">Patent Track</TabsTrigger>
                <TabsTrigger value="research">Research Track</TabsTrigger>
              </TabsList>
            </motion.div>

            {/* Patent Track */}
            <TabsContent value="patent">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid lg:grid-cols-2 gap-12"
              >
                <motion.div variants={itemVariants}>
                  <div className="mb-8">
                    <motion.h3 variants={itemVariants} className="text-3xl font-bold mb-4">
                      Patent Track
                    </motion.h3>
                    <motion.p variants={itemVariants} className="text-lg text-gray-600 mb-6">
                      Transform your ideas into intellectual property with patent-ready documentation and startup
                      foundation support.
                    </motion.p>
                    <motion.div variants={containerVariants} className="space-y-4">
                      {[
                        "Complete IDF + TID development",
                        "Patent filing readiness",
                        "Co-inventor recognition",
                        "Startup foundation support",
                        "Legal handover via ImagineX",
                      ].map((text, i) => (
                        <motion.div
                          key={i}
                          custom={i}
                          variants={listVariants}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span>{text}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                  <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg border">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-400 line-through mb-2">$1,500</div>
                      <div className="text-5xl font-bold text-orange-600 mb-2">$899</div>
                      <p className="text-sm text-gray-600">Early Bird Discount - Limited Time</p>
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div variants={imageVariants} initial="hidden" animate="visible">
                  <img
                    src="/patent.avif"
                    alt="Patent Track"
                    className="rounded-2xl shadow-lg w-full"
                  />
                </motion.div>
              </motion.div>
            </TabsContent>

            {/* Research Track */}
            <TabsContent value="research">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid lg:grid-cols-2 gap-12"
              >
                <motion.div variants={itemVariants}>
                  <div className="mb-8">
                    <motion.h3 variants={itemVariants} className="text-3xl font-bold mb-4">
                      Research Track
                    </motion.h3>
                    <motion.p variants={itemVariants} className="text-lg text-gray-600 mb-6">
                      Develop publication-ready research papers for IEEE, Springer, and ACM conferences with
                      professional presentation support.
                    </motion.p>
                    <motion.div variants={containerVariants} className="space-y-4">
                      {[
                        "IEEE/Springer/ACM ready paper",
                        "Professional presentation deck",
                        "Co-authorship eligibility",
                        "Conference submission guidance",
                        "Q&A session coaching",
                      ].map((text, i) => (
                        <motion.div
                          key={i}
                          custom={i}
                          variants={listVariants}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span>{text}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                  <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg border">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-400 line-through mb-2">$1,000</div>
                      <div className="text-5xl font-bold text-green-600 mb-2">$599</div>
                      <p className="text-sm text-gray-600">Early Bird Discount - Limited Time</p>
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div variants={imageVariants} initial="hidden" animate="visible">
                  <img
                    src="/Research.webp"
                    alt="Research Track"
                    className="rounded-2xl shadow-lg w-full"
                  />
                </motion.div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default OurProgram;