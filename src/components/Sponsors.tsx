import { motion } from "framer-motion";

interface SponsorProps {
  img: string;
  name: string;
}

const sponsors: SponsorProps[] = [
  { img: "/Companies/Accenture-Logo.png", name: "Accenture" },
  { img: "/Companies/californmia.png", name: "University of California" },
  { img: "/Companies/wells_fargo.png", name: "Wells Fargo" },
  { img: "/Companies/Zensar.png", name: "Zensar" },
    { img: "/Companies/Accenture-Logo.png", name: "Accenture" },
  { img: "/Companies/californmia.png", name: "University of California" },
  { img: "/Companies/wells_fargo.png", name: "Wells Fargo" },
  { img: "/Companies/Zensar.png", name: "Zensar" },
    { img: "/Companies/Accenture-Logo.png", name: "Accenture" },
  { img: "/Companies/californmia.png", name: "University of California" },
  { img: "/Companies/wells_fargo.png", name: "Wells Fargo" },
  { img: "/Companies/Zensar.png", name: "Zensar" },
    { img: "/Companies/Accenture-Logo.png", name: "Accenture" },
  { img: "/Companies/californmia.png", name: "University of California" },
  { img: "/Companies/wells_fargo.png", name: "Wells Fargo" },
  { img: "/Companies/Zensar.png", name: "Zensar" },
  
  // { img: "/sponsors/sponsor5.png", name: "Sponsor 5" },
  // { img: "/sponsors/sponsor6.png", name: "Sponsor 6" },
];

// Duplicate sponsors for infinite loop
const sponsorLoop = [...sponsors, ...sponsors];

export const Sponsors = () => {
  return (
    <section id="sponsors" className="container py-10 overflow-hidden">
      <motion.div
        className="flex gap-10"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "linear",
        }}
      >
        {sponsorLoop.map(({ img, name }, i) => (
          <div
            key={i}
            className="flex items-center gap-2 min-w-[180px] justify-center"
          >
            <img
              src={img}
              alt={name}
              className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
};
