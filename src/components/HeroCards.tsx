import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check, Linkedin } from "lucide-react";
import { LightBulbIcon } from "./Icons";
import { motion } from "framer-motion";

export const HeroCards = () => {
  // Animation variants for staggered cards
  const cardVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial Card */}
      <motion.div
        className="absolute w-[340px] -top-[15px]"
        initial="initial"
        animate="animate"
        variants={cardVariants}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="drop-shadow-xl shadow-black/10 dark:shadow-white/10">
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <Avatar>
              <AvatarImage alt="" src="https://i.pravatar.cc/150?img=32" />
              <AvatarFallback>AM</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <CardTitle className="text-lg">Gagan Deep Khosla</CardTitle>
              <CardDescription>Distinguished Engineer, Zensar</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            DMIF turned my project idea into a patent-ready innovation!
          </CardContent>
        </Card>
      </motion.div>

      {/* Team Card (Dr. Madhan) */}
      <motion.div
        className="absolute right-[20px] top-4 w-80"
        initial="initial"
        animate="animate"
        variants={cardVariants}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card className="flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
          <CardHeader className="mt-8 flex justify-center items-center pb-2">
            <img
              src="./image.JPG"
              alt="Dr. Madhan"
              className="absolute grayscale-[0%] top-1 right-19 rounded-full w-14 h-14 aspect-square object-cover"
            />
            <CardTitle className="text-center">Dr. Madhan Kumar</CardTitle>
            <CardDescription className="font-normal text-primary">
              Director, DMIF
            </CardDescription>
          </CardHeader>

          <CardFooter>
            <div>
              <a
                rel="noreferrer noopener"
                href="https://www.linkedin.com/in/drmadhaniimcal/"
                target="_blank"
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                })}
              >
                <span className="sr-only">Linkedin icon</span>
                <Linkedin size="20" />
              </a>
            </div>
          </CardFooter>
        </Card>
      </motion.div>

      {/* Pricing – Patent Track */}
      <motion.div
        className="absolute top-[170px] left-[50px] w-72"
        initial="initial"
        animate="animate"
        variants={cardVariants}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Card className="drop-shadow-xl shadow-black/10 dark:shadow-white/10">
          <CardHeader>
            <CardTitle className="flex item-center justify-between">
              Patent Track
              <Badge variant="secondary" className="text-sm text-primary">
                Most Popular
              </Badge>
            </CardTitle>
            <div>
              <span className="text-3xl font-bold">$899</span>
              <span className="text-muted-foreground"> /track</span>
            </div>
          </CardHeader>

          <CardContent>
            <Button className="w-full">Join Now</Button>
          </CardContent>

          <hr className="w-4/5 m-auto mb-4" />

          <CardFooter className="flex">
            <div className="space-y-4">
              {[
                "Complete IDF + TID development",
                "Patent filing readiness",
                "Co-inventor recognition",
              ].map((benefit) => (
                <span key={benefit} className="flex">
                  <Check className="text-green-500" />
                  <h3 className="ml-2">{benefit}</h3>
                </span>
              ))}
            </div>
          </CardFooter>
        </Card>
      </motion.div>

      {/* Service Highlight */}
      <motion.div
        className="absolute w-[350px] -right-[10px] bottom-[35px]"
        initial="initial"
        animate="animate"
        variants={cardVariants}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Card className="drop-shadow-xl shadow-black/10 dark:shadow-white/10">
          <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
            <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
              <LightBulbIcon />
            </div>
            <div>
              <CardTitle>DMIF Mentorship Model</CardTitle>
              <CardDescription className="text-md mt-2">
                Personalized 1:1 mentorship guiding students from ideation to patent, publication, or product launch.
              </CardDescription>
            </div>
          </CardHeader>
        </Card>
      </motion.div>
    </div>
  );
};