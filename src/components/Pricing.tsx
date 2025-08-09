import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Patent Track",
    popular: PopularPlanType.YES,
    price: 899,
    description:
      "Transform your ideas into intellectual property with patent-ready documentation and startup foundation support.",
    buttonText: "Enroll Now",
    benefitList: [
      "Complete IDF + TID development",
      "Patent filing readiness",
      "Co-inventor recognition",
      "Startup foundation support",
      "Legal handover via ImagineX",
      "Original Price: $1,500",
    ],
  },
  {
    title: "Research Track",
    popular: PopularPlanType.NO,
    price: 599,
    description:
      "Develop publication-ready research papers for IEEE, Springer, and ACM conferences with professional presentation support.",
    buttonText: "Enroll Now",
    benefitList: [
      "IEEE/Springer/ACM ready paper",
      "Professional presentation deck",
      "Co-authorship eligibility",
      "Conference submission guidance",
      "Q&A session coaching",
      "Original Price: $1,000",
    ],
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="container md:py-24 py-6">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Choose Your
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Innovation Path
        </span>
      </motion.h2>

      <motion.h3
        className="text-xl text-center text-muted-foreground pt-4 pb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Exclusive tracks for Innovators & Researchers – Early Bird Discounts Available!
      </motion.h3>

      <div className="grid md:grid-cols-2 gap-8">
        {pricingList.map((pricing: PricingProps, index) => (
          <motion.div
            key={pricing.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <Card
              className={
                pricing.popular === PopularPlanType.YES
                  ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                  : ""
              }
            >
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {pricing.title}
                  {pricing.popular === PopularPlanType.YES && (
                    <Badge
                      variant="secondary"
                      className="text-sm text-primary"
                    >
                      Most Popular
                    </Badge>
                  )}
                </CardTitle>
                <div>
                  <span className="text-3xl font-bold">${pricing.price}</span>
                  <span className="text-muted-foreground"> /track</span>
                </div>
                <CardDescription>{pricing.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <Button className="w-full">{pricing.buttonText}</Button>
              </CardContent>

              <hr className="w-4/5 m-auto mb-4" />

              <CardFooter className="flex">
                <div className="space-y-4">
                  {pricing.benefitList.map((benefit: string) => (
                    <span key={benefit} className="flex">
                      <Check className="text-green-500" />
                      <h3 className="ml-2">{benefit}</h3>
                    </span>
                  ))}
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
