import React, { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "/Testimonials/First.jpg",
    name: "Vijaya Tapaswi Achanta",
    userName: " Vice President, Wells Fargo",
    comment:
      "Dr.Madhan has been a true inspiration to build the research acumen and to ignite the passion to innovate. I got an opportunity to work under his leadership in Accenture where I started my journey as an inventor. As a devops cloud engineer, I never had exposure in the field of research and inventions. Dr. Madhan has identified my passion in innovation and gave me an opportunity to ideate on unique cloud architectural frameworks hosting complex data analytic solutions. It's been a great learning under his leadership to be able to pursue the ideation in the right path. Successfully accomplished 6 patents as an inventor with grants received from multiple global regions under his leadership. His vast knowledge & expertise has helped sail through many challenges encountered during the patenting process.It is a commendable cause by Dr. Madhan to launch Dr. Madhan institute for future (DMIF) which will immensely help many aspiring students for the larger goal of nurturing the future inventors & entrepreneurs. Above all, his humble and approachable attitude will empower students to create the research papers & patents on their own under his guidance.Wishing all the best to all the aspiring students & to Dr. Madhan for being a role model to many of us.",
  },
  {
    image: "/Testimonials/GuruPrasad.jpg",
    name: "Guruprasad P V",
    userName: "Distinguished Engineer, Zensar",
    comment:
      "Some mentors teach. A rare few ignite a spark that fuels a lifetime of innovation — and Dr. Madhan is undoubtedly the latter. Working with Dr. Madhan has been one of the most intellectually fulfilling experiences of my career. Thanks to his unwavering belief in me, I had the privilege of being a co-innovator in over 20 patents. He didn't just see potential — he nurtured it, challenged it, and led it to flourish. His ability to guide, inspire, and push boundaries makes him a true catalyst for innovation. His mentorship is a rare combination of vision, rigor, and empathy, and I'm certain DMIF will be a game-changer for aspiring scholars and researchers",
  },
  {
    image: "/Testimonials/GaganDeep.jpg",
    name: "Gagan Deep Khosla",
    userName: "Senior Manager  Accenture",
    comment:
      "Working with Dr. Madhan Srinivasan on our patent application was a transformative experience. From the very beginning, he brought remarkable clarity and direction to the process — recommending the ideal format, enriching the application with his deep technical expertise, and guiding every step with precision and insight.What truly stood out was his ability to translate complex ideas into a robust, compelling patent draft that not only reflected the innovation accurately but also anticipated and addressed potential challenges. Thanks to his meticulous approach and nuanced understanding of patenting, the application sailed through the review process and was granted without any hurdles.Dr. Madhan's contribution was instrumental, and I wholeheartedly recommend his services to anyone looking to secure their innovations with confidence and quality. ",
  },
  {
    image: "/Testimonials/Kishore.jpg",
    name: "Kishore Kumar Gajula",
    userName: "Cloud Advisory Consultant Accenture",
    comment:"Over a decade at Accenture, I had the privilege of spending more than half that time working closely with Madhan—an experience that shaped both my career and character. He welcomed me during a difficult professional period, overlooking past biases and believing in my potential when few others did. That trust opened doors to transformative work, including my first steps into the world of intellectual property and patents.When I needed to move back home to support my family, he extended full remote flexibility—long before it became common. He also championed my academic aspirations, going out of his way to secure funding for me to present at an international conference, even though it lay outside our immediate scope of work.What always stood out was not just his deep technical acumen—rooted in his PhD in cloud computing and his strong grip on big data and analytics—but also his ability to build diverse, high-performing teams. I worked alongside colleagues from neuroscience, business, and physics—testament to his belief in cross-disciplinary innovation.As he steps into his new entrepreneurial and educational venture, it feels like a natural evolution—one that aligns perfectly with his vision and values. His ambition to blend AR, VR, AI, and Cloud to redefine the future of education is inspiring.",
  },
  {
    image: "/Testimonials/Hammes.jpg",
    name: "Abdul Hammed Sheik ",
    userName: "Tech Architecture Senior Manager",
    comment:
      "It was a truly enriching experience collaborating with Madhan during his tenure at Accenture.When it comes to mentorship in the area of patent filing, I could speak at length about his contributions—but I'll attempt to capture the essence here. Coming from a core Cloud and Infrastructure background, my focus over the past eight years has shifted toward leading enterprise automation and AI/Analytics initiatives across various business portfolios. Like many others in the infrastructure space, my efforts had primarily centered around building scalable products and driving adoption—considered key success metrics in our field.It wasn't until I met Madhan that I truly understood the significance and potential of patenting innovative ideas. He introduced me to the world of intellectual property and helped me recognize the impact that patents can create—not just in the corporate landscape, but also in society at large.Madhan's mentorship was instrumental in shaping my approach toward identifying and articulating unique, value-driven ideas. His motivation, support, and deep knowledge made the entire patent filing journey seamless for me. With his guidance, I was able to file multiple patents—one of which was officially granted in April 2024, with others currently in progress.Madhan's mastery in the patenting process, combined with his strong domain expertise in IT and product development, truly makes him a  Patent-Guru —or as I often say, a walking Wikipedia on the subject.Having closely witnessed his transition from a successful IT professional to a visionary entrepreneur in the AI/GenAI space, I am both inspired and confident in his journey ahead. I wish him continued success in all his endeavors and sincerely hope to collaborate again on more innovative patent opportunities—should his time allow.",
  },
  {
    image: "/Testimonials/Last.png",
    name: "Dhruv Mittal ",
    userName: "BS in Data Science University of California San Diego, USA",
    comment:
      "I am currently working with Dr. Madhan Institute of Future on a research paper focused on developing security taxonomies for cloud computing systems. What began as a rough idea has now grown into a structured academic project, thanks to Dr. Madhan’s support and strategic guidance. His ability to connect high-level research themes with real-world security challenges has been critical in giving direction to this work. DMIF’s support has been a key factor in transforming this project into a meaningful contribution to the cloud security domain.",
  },
];

export const Testimonials = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState<TestimonialProps | null>(null);


   useEffect(() => {
    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    // Handle escape key to close modal
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (selectedTestimonial) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [selectedTestimonial]);

  const openModal = (testimonial: TestimonialProps) => {
    setSelectedTestimonial(testimonial);
  };
  

  const closeModal = () => {
    setSelectedTestimonial(null);
  };

  return (
    <section id="testimonials" className="container py-6">
      <motion.h2
        className="text-3xl md:text-4xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Discover Why
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          People Love{" "}
        </span>
        This
      </motion.h2>

      <motion.p
        className="text-xl max-w-4xl text-muted-foreground pt-4 pb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Experience what makes our program stand out. From unmatched value to proven results,
        hear from real people who have transformed their journey with us.
      </motion.p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2 lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(({ image, name, userName, comment }, index) => (
          <motion.div
            key={userName}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <Card 
              className="max-w-md md:break-inside-avoid overflow-hidden shadow-md hover:shadow-lg transition-all cursor-pointer"
              onClick={() => openModal({ image, name, userName, comment })}
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage alt="" src={image} />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                {comment.length > 150 ? `${comment.substring(0, 150)}...` : comment}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedTestimonial && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors z-10"
                >
                  <X size={20} />
                </button>
                
                <Card className="border-0 shadow-none">
                  <CardHeader className="flex flex-row items-center gap-4 pb-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage alt="" src={selectedTestimonial.image} />
                      <AvatarFallback>OM</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <CardTitle className="text-xl">{selectedTestimonial.name}</CardTitle>
                      <CardDescription className="text-base">{selectedTestimonial.userName}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-base leading-relaxed">{selectedTestimonial.comment}</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};