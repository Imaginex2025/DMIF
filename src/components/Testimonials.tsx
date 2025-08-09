import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "Guruprasad P V",
    userName: "@john_Doe",
    comment:
      "Working with Dr. Madhan Institute of Future on cloud security taxonomies has been transformative. Dr. Madhan’s strategic guidance turned a rough idea into a structured!",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Dr.Sreekumar Vobugari",
    userName: "Distinguished Engineer, Zensar",
    comment:
      "Dr. Madhan is a rare mentor who ignites innovation. His belief in me led to co-innovating 20+ patents. He nurtures potential with vision, rigor, and empathy, making every challenge a growth",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Gagan Deep Khosla",
    userName: "Senior Principal Consultant Infosys",
    comment:
      "Collaborating with Dr. Madhan Kumar Srinivasan has been enriching, marked by impactful research in enterprise architecture, cloud computing, and data systems. ",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Dhruv Mittal",
    userName: "@john_Doe3",
    comment:
      "Working with Dr. Madhan Srinivasan on our patent application was a transformative experience. From the very beginning, he brought remarkable clarity and direction",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "John Doe React",
    userName: "@john_Doe4",
    comment:
      "Working with Dr. Madhan Institute of Future on cloud security taxonomies has been transformative. Dr. Madhan’s strategic guidance turned a rough idea into a structured",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "John Doe React",
    userName: "@john_Doe5",
    comment:
      "Working with Dr. Madhan Institute of Future on cloud security taxonomies has been transformative. Dr. Madhan’s strategic guidance turned a rough idea into a structured.",
  },
];

export const Testimonials = () => {
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
        className="text-xl text-muted-foreground pt-4 pb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non unde error
        facere hic reiciendis illo
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
            <Card className="max-w-md md:break-inside-avoid overflow-hidden shadow-md hover:shadow-lg transition-all">
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
              <CardContent>{comment}</CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
