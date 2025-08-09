import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import cubeLeg from "../../public/patent.avif";
import cubeAlt from "../../public/Research.webp"; // Example alt images

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
  image: string;
}

const serviceList: ServiceProps[] = [
  {
    title: "Patent Track",
    description:
      "Transform ideas into intellectual property with patent-ready documentation",
    icon: <ChartIcon />,
    image: cubeLeg,
  },
  {
    title: "Research Track",
    description:
      "Develop publication-ready research for top-tier conferences",
    icon: <WalletIcon />,
    image: cubeAlt,
  },
  {
    title: "Startup Support",
    description: "Launch your venture with IP foundation and mentorship",
    icon: <MagnifierIcon />,
    image: cubeLeg,
  },
];

export const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // Progress animation
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 2)); // 3s
    }, 60);

    return () => clearInterval(progressInterval);
  }, []);

  // Change service when progress completes
  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % serviceList.length);
        setProgress(0);
      }, 200);
    }
  }, [progress]);

  return (
    <section  className="container py-6 md:py-24">
      <div  className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-end">
        {/* Left Side - All Services */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Services{" "}
            </span>
            We Provide
          </h2>

          <p  className="text-muted-foreground text-xl mt-4 mb-8">
            Discover how we help you succeed
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map((service, i) => {
              const isActive = currentIndex === i;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    className={`transition-all duration-300 ${
                      isActive
                        ? "border-primary shadow-lg"
                        : "border-transparent"
                    }`}
                  >
                    <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                      <div
                        className={`mt-1 p-1 rounded-2xl ${
                             "bg-primary/20 text-primary"
                        }`}
                      >
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <CardTitle>{service.title}</CardTitle>
                        <CardDescription className="text-md mt-2">
                          {service.description}
                        </CardDescription>
                        {/* Progress bar for active service */}
                        {isActive && (
                          <div className="mt-4 bg-gray-200 dark:bg-gray-700 h-1 rounded overflow-hidden">
                            <motion.div
                              className="h-full bg-primary rounded"
                              initial={{ width: 0 }}
                              animate={{ width: `${progress}%` }}
                              transition={{ duration: 0.1, ease: "linear" }}
                            />
                          </div>
                        )}
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Side - Changing Image */}
        <motion.div
          key={serviceList[currentIndex].image}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <img
            src={serviceList[currentIndex].image}
            className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
            alt={serviceList[currentIndex].title}
          />
        </motion.div>
      </div>
    </section>
  );
};
