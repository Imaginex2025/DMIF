import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion, AnimatePresence } from "framer-motion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What is DMIF?",
    answer:
      "DMIF (Dr. Madhan Institute  of Future ) is an initiative to guide innovators, researchers, and entrepreneurs in transforming their ideas into patents, publications, and startups.",
    value: "item-1",
  },
  {
    question: "Who can apply for the Patent Track?",
    answer:
      "Any student, researcher, or innovator with a unique idea that can be documented for intellectual property protection is eligible for the Patent Track.",
    value: "item-2",
  },
  {
    question: "Do you provide research publication guidance?",
    answer:
      "Yes. Through our Research Track, we mentor participants in writing and submitting publication-ready research papers to top-tier journals and conferences.",
    value: "item-3",
  },
  {
    question: "Is there startup support available?",
    answer:
      "Absolutely. Our Startup Support program offers IP foundation, mentorship, and strategic guidance to help you launch and scale your venture.",
    value: "item-4",
  },
  {
    question: "How do I get started with DMIF programs?",
    answer:
      "You can explore our programs on the website and apply through the online form. Our team will review your application and connect with you for the next steps.",
    value: "item-5",
  },
];


export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      {/* Heading Animation */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </motion.h2>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer, value }: FAQProps, index) => (
          <motion.div
            key={value}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <AccordionItem value={value}>
              <AccordionTrigger className="text-left">
                {question}
              </AccordionTrigger>

              <AccordionContent>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={answer}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                  >
                    {answer}
                  </motion.p>
                </AnimatePresence>
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>

    </section>
  );
};
