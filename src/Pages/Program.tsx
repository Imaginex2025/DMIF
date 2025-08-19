import {
  CheckCircle,
  Zap,
  Target,
  BookOpen,
  Award,
//   ArrowRight,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import OurProgram from "@/components/OurProgram";
import { useLocation, useNavigate } from "react-router-dom";

const Program = () => {
  const ref = useRef(null);
const navigate = useNavigate();
  const location = useLocation();


    const handleFooterNavClick = (href: string) => {
    if (href === "#Contact") {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const targetElement = document.querySelector("#Contact");
          targetElement?.scrollIntoView({ behavior: "smooth" });
        }, 200);
      } else {
        const targetElement = document.querySelector("#Contact");
        targetElement?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return (
    <div className="min-h-screen  text-white">
      {/* OurProgram Section */}
      <section id="Programs" ref={ref} className="">
        <div className="container mx-auto px-6">
          <OurProgram />
        </div>
      </section>
<div className="container  px-4 sm:px-6  relative z-10">
  {/* Section Header - Patents */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="text-center mb-12 sm:mb-16"
  >
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
      Patents – The Innovation Engine
    </h2>
    <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
    <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
      Choose your path — protect ideas or publish research.
    </p>
  </motion.div>

  {/* Patent Track Cards */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
    className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-16"
  >
    {/* Who It's For */}
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-card backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-green-500/30 transition-all duration-300"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
          <Target className="w-6 h-6 text-green-400" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-green-400">Who It's For</h3>
      </div>
      <p className="text-gray-300 text-lg leading-relaxed">
        Inventors & innovators turning ideas into protected IP.
      </p>
      <div className="flex items-center gap-2 text-green-400 font-medium mt-6 text-sm sm:text-base">
        <Users className="w-4 h-4" />
        <span>Join 500+ Innovators</span>
      </div>
    </motion.div>

    {/* What You'll Learn */}
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-card backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-green-500/30 transition-all duration-300"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
          <BookOpen className="w-6 h-6 text-green-400" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-green-400">What You'll Learn</h3>
      </div>
      <ul className="space-y-3 sm:space-y-4">
        {[
          "Idea to IDF",
          "Patentability Criteria",
          "Tech Mapping",
          "Problem-Solution Design",
        ].map((item, i) => (
          <motion.li
            key={i}
            className="flex items-center gap-3"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
            <span className="text-gray-300 text-base sm:text-lg">{item}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>

    {/* Deliverables */}
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-card backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-green-500/30 transition-all duration-300"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
          <Award className="w-6 h-6 text-green-400" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-green-400">Deliverables</h3>
      </div>
      <ul className="space-y-3 sm:space-y-4">
        {[
          "Final IDF + TID",
          "Filing-Ready Review",
          "Co-Inventor Recognition",
          "Legal Handover via ImagineX",
        ].map((item, i) => (
          <motion.li
            key={i}
            className="flex items-center gap-3"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
            <span className="text-gray-300 text-base sm:text-lg">{item}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  </motion.div>

  {/* Section Header - Research */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="text-center mb-12 sm:mb-16"
  >
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
      Research – The Scholarly Explorer
    </h2>
    <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
    <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
      Choose your path — publish or protect.
    </p>
  </motion.div>

  {/* Research Track Cards */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
    className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-16"
  >
    {/* Who It's For - Research */}
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-card backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-green-500/30 transition-all duration-300"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
          <Target className="w-6 h-6 text-green-400" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-green-400">Who It's For</h3>
      </div>
      <p className="text-gray-300 text-lg leading-relaxed">
        Students passionate about research, data, and academic writing.
      </p>
    </motion.div>

    {/* What You'll Learn - Research */}
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-card backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-green-500/30 transition-all duration-300"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
          <BookOpen className="w-6 h-6 text-green-400" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-green-400">What You'll Learn</h3>
      </div>
      <ul className="space-y-3 sm:space-y-4">
        {[
          "Research Framing",
          "Methodology & Tools",
          "Paper Writing",
          "Journal/Conf Selection",
        ].map((item, i) => (
          <motion.li
            key={i}
            className="flex items-center gap-3"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
            <span className="text-gray-300 text-base sm:text-lg">{item}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>

    {/* Deliverables - Research */}
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-card backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-green-500/30 transition-all duration-300"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
          <Award className="w-6 h-6 text-green-400" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-green-400">Deliverables</h3>
      </div>
      <ul className="space-y-3 sm:space-y-4">
        {[
          "Final Paper (IEEE-ready)",
          "Presentation Deck",
          "Q&A Coaching",
          "Co-Authorship Eligible",
        ].map((item, i) => (
          <motion.li
            key={i}
            className="flex items-center gap-3"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
            <span className="text-gray-300 text-base sm:text-lg">{item}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  </motion.div>

  {/* CTA */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="text-center mb-16"
  >
    <h3 className="text-2xl font-bold text-white mb-4">Ready to Patent Your Idea?</h3>
    <p className="text-gray-400 mb-8 max-w-md mx-auto text-base">
      Turn your innovation into protected intellectual property.
    </p>
    <motion.a
      onClick={()=>handleFooterNavClick("#Contact")}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)",
      }}
      whileTap={{ scale: 0.95 }}
      className="inline-flex items-center gap-3 bg-green-500 text-white px-8 py-4 sm:px-10 sm:py-5 rounded-2xl text-lg font-semibold shadow-lg hover:bg-green-400 transition-all duration-300 group"
    >
      <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
      Apply for Patent Track
    </motion.a>
  </motion.div>

  {/* Stats */}
  {/* <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    viewport={{ once: true }}
    className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 py-12 sm:py-16 border-t border-gray-700/50"
  >
    {[
      { number: "500+", label: "Patents Filed" },
      { number: "95%", label: "Success Rate" },
      { number: "50+", label: "Inventors Trained" },
      { number: "24/7", label: "Expert Support" },
    ].map((stat, i) => (
      <motion.div
        key={i}
        className="text-center"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-400 mb-1 sm:mb-2">
          {stat.number}
        </div>
        <div className="text-gray-400 text-xs sm:text-sm md:text-base">
          {stat.label}
        </div>
      </motion.div>
    ))}
  </motion.div> */}
</div>
    </div>
  );
};

export default Program;
