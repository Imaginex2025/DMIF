import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
import {
  Users,
  Award,
  Globe,
  Lightbulb,
  Target,
//   Star,
  Play,
//   Building,
} from "lucide-react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

export default function AboutDMIF() {
  const [hoveredCard, setHoveredCard] = useState(null);
  // const [activeVideo, setActiveVideo] = useState(null);

  const uniqueValues = [
    {
      icon: <Users className="w-8 h-8 text-green-400" />,
      title: "Mentorship-driven innovation",
      description:
        "Personal guidance from industry experts who've walked the path of innovation, transforming raw ideas into breakthrough solutions.",
    },
    {
      icon: <Award className="w-8 h-8 text-green-400" />,
      title: "Patent-track learning",
      description:
        "Learn by doing with a clear path to intellectual property creation, building a portfolio of innovations that have real-world impact.",
    },
    {
      icon: <Globe className="w-8 h-8 text-green-400" />,
      title: "Global exposure & partnerships",
      description:
        "Connect with international networks, collaborate across borders, and access opportunities that transcend geographical boundaries.",
    },
  ];

//   const achievements = [
//     {
//       icon: "🎤",
//       text: "3x TEDx Speaker",
//       detail: "Inspiring global audiences",
//     },
//     {
//       icon: "🏆",
//       text: "127+ Patents",
//       detail: "96 Granted - Intellectual property ",
//     },
//     {
//       icon: "📚",
//       text: "30+ Research Papers",
//       detail: "11 Book Chapters published",
//     },
//     {
//       icon: "🌍",
//       text: "National Advisor",
//       detail: "Government of India recognition",
//     },
//     {
//       icon: "🏢",
//       text: "Founder of 6 Companies",
//       detail: "Serial entrepreneur",
//     },
//     {
//       icon: "💼",
//       text: "Former AVP - Accenture",
//       detail: "Built $100M+ Cloud AI portfolio",
//     },
//     {
//       icon: "🎓",
//       text: "Professor of Practice",
//       detail: "VIT, SRM Universities",
//     },
//   ];


const getYoutubeId = (url: string) => {
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|watch\?.+&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

const tedxVideos = [
  {
    url: "https://youtu.be/DkrYRX-a3O4?si=HCvcSnxt1Nl2dzOs",
    title: "Innovation Through Mentorship",
    description: "How mentorship transforms raw ideas into innovations",
  },
  {
    url: "https://youtu.be/SzyDXeqrMrQ?si=uS70V3q3z_xzGUF8",
    title: "The Future of Patent-Based Learning",
    description: "Building intellectual property through education",
  },
  {
    url: "https://www.youtube.com/watch?v=ltt8iBBJXpI",
    title: "From Student to Entrepreneur",
    description: "The journey of creating value through innovation",
  },
].map((video) => {
  const id = getYoutubeId(video.url)!;
  return {
    id,
    ...video,
    thumbnail: `https://img.youtube.com/vi/${id}/maxresdefault.jpg`,
  };
});

const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

const openVideo = (id: string) => {
  setSelectedVideo(id);
};




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
    <main className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* Vision Section */}
      <section className="relative container py-8 text-center space-y-8">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-green-100 to-green-400 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            The{" "}
            <span className="text-green-400 drop-shadow-lg">DMIF Vision</span>
          </motion.h1>

          <motion.div
            className="relative max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.p
              className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
            >
              At DMIF, we're not preparing students for exams. We're preparing
              them for a future of
              <span className="text-green-400 font-semibold">
                {" "}
                originality, leadership, and innovation
              </span>
              .
            </motion.p>

            <motion.div
              className="bg-gradient-to-r from-green-900/20 to-green-800/20 p-6 rounded-2xl border border-green-800/30"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: "backOut", delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-xl md:text-2xl text-green-100 font-medium italic">
                "Don't feed the fish. Teach how to discover the ocean."
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Enhanced Story Section */}
      <section className="container py-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="flex items-center space-x-3 mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Lightbulb className="w-8 h-8 text-green-400" />
            <h2 className="text-4xl font-bold text-green-400">
              The Story Behind DMIF
            </h2>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
            viewport={{ once: true }}
          >
            <motion.p
              className="text-gray-300 leading-relaxed text-lg"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7 }}
            >
              Founded with a vision to create an ecosystem where innovation
              meets mentorship, DMIF was built to empower students and
              professionals to transform ideas into intellectual property and
              impactful ventures.
            </motion.p>

            <motion.p
              className="text-gray-400 leading-relaxed"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7 }}
            >
              We believe that the future belongs to those who can think beyond
              conventional boundaries, create meaningful solutions, and lead
              with authenticity.
            </motion.p>
          </motion.div>

          {/* <motion.div
            className="flex space-x-4 pt-4"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
            viewport={{ once: true }}
          >
            {[
              { number: "1000+", label: "Innovators Mentored" },
              { number: "50+", label: "Patents Filed" },
              { number: "25+", label: "Countries Reached" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="text-center"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                transition={{ duration: 0.6, ease: "backOut" }}
              >
                <div className="text-2xl font-bold text-green-400">
                  {item.number}
                </div>
                <div className="text-sm text-gray-400">{item.label}</div>
              </motion.div>
            ))}
          </motion.div> */}
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-transparent rounded-2xl blur-xl"></div>
          <motion.img
            src="/ABout-Section.jpg"
            alt="Vision of DMIF"
            className="relative rounded-2xl shadow-2xl w-full border border-green-800/30"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          />
        </motion.div>
      </section>

      {/* Enhanced Mentorship Section */}
      <section className="relative py-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/10 via-transparent to-transparent"></div>
        <div className="container relative text-center space-y-8">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Target className="w-12 h-12 text-green-400 mx-auto mb-4" />

            <motion.h2
              className="text-4xl font-bold text-green-400"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Why Mentorship &gt; Instruction
            </motion.h2>

            <motion.div
              className="w-24 h-1 bg-green-400 mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            ></motion.div>
          </motion.div>

          <motion.p
            className="text-xl text-gray-300 md:w-3/4 mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            At DMIF, learning goes beyond lectures. Our mentors guide learners
            from ideation to execution, fostering creativity, resilience, and
            ownership.{" "}
            <span className="text-green-400 font-semibold">
              Mentorship transforms knowledge into innovation.
            </span>
          </motion.p>
        </div>
      </section>

      {/* Enhanced Unique Value Section */}
      <section className="container py-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-green-400">
            What Makes DMIF Unique
          </h2>
          <motion.div
            className="w-24 h-1 bg-green-400 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          ></motion.div>
          <p className="text-gray-400 text-lg">
            Three pillars that set us apart
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
          viewport={{ once: true }}
        >
          {uniqueValues.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Card
                className={`bg-gray-900/50 border-green-800/30 hover:scale-105 duration-300 text-white h-full backdrop-blur-sm transition-all duration-300 hover:border-green-400/50 hover:shadow-2xl hover:shadow-green-400/10 ${
                  hoveredCard === index ? "transform scale-105" : ""
                }`}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardHeader className="text-center space-y-4">
                  <div className="mx-auto p-3 bg-green-900/30 rounded-full w-fit">
                    {item.icon}
                  </div>
                  <CardTitle className="text-green-400 text-xl">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 text-center leading-relaxed">
                  {item.description}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Enhanced Dr. Madhan Profile */}
      {/* <section className="py-10"> */}
        <div className="container">
          {/* Section Header */}
          {/* <motion.div
            className="text-center mb-16 space-y-4"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-green-400">
              Meet the Mentor
            </h2>
            <motion.div
              className="w-24 h-1 bg-green-400 mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </motion.div> */}

          {/* Mentor Block */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Mentor Image */}
            {/* <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="relative">
                <motion.img
                  src="/image.JPG"
                  alt="Dr. Madhan Kumar"
                  className="relative h-[500px] w-[400px] rounded-2xl shadow-2xl border border-green-800/30 object-cover"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
                <motion.div
                  className="absolute -bottom-4 -right-4 bg-green-400 text-black p-3 rounded-full"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6, ease: "backOut" }}
                  viewport={{ once: true }}
                >
                  <Star className="w-6 h-6" />
                </motion.div>
              </div>
            </motion.div> */}

            {/* Mentor Info */}
            {/* <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            > */}
              {/* Name + Title */}
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-4xl font-bold mb-2 text-green-400">
                  Dr. Madhan Kumar Srinivasan
                </h3>
                <p className="text-gray-400 text-lg">
                  Visionary Leader & Innovation Catalyst
                </p>
                <div className="w-16 h-1 bg-green-400 mt-4 rounded-full"></div>
              </motion.div> */}

              {/* Achievements */}
              {/* <motion.div
                className="grid grid-cols-2 gap-3"
                initial="hidden"
                whileInView="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.2 },
                  },
                }}
                viewport={{ once: true }}
              >
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-gray-900/30 rounded-xl border border-green-800/20 hover:border-green-400/40 transition-all duration-300"
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  >
                    <div className="text-2xl">{achievement.icon}</div>
                    <div>
                      <div className="text-white font-semibold">
                        {achievement.text}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {achievement.detail}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div> */}
          </div>
        </div>
      {/* </section> */}

      {/* TEDx Videos Section */}
      <section className="container py-10">
        {/* Heading animation */}
        <motion.div
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center space-x-3">
            <Play className="w-8 h-8 text-red-500" />
            <h2 className="text-4xl font-bold text-green-400">TEDx Talks</h2>
          </div>
          <motion.div
            className="w-24 h-1 bg-green-400 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          <p className="text-gray-400 text-lg">
            Watch Dr. Madhan's inspiring TEDx presentations
          </p>
        </motion.div>

        {/* Cards animation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tedxVideos.map((video, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
            >
              <Card
                className="bg-gray-900/50 border-green-800/30 text-white backdrop-blur-sm transition-all duration-300 hover:border-green-400/50 hover:shadow-2xl hover:shadow-green-400/10 overflow-hidden"
                onClick={() => openVideo(video.id)}
              >
                 <div className="relative">
    <img
      src={video.thumbnail}
      alt={video.title}
      className="w-full h-48 object-cover"
    />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="bg-red-600 rounded-full p-4">
                      <Play className="w-8 h-8 text-white fill-current" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    TEDx
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-green-400 text-lg group-hover:text-green-300 transition-colors">
                    {video.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 text-sm">
                  {video.description}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

{selectedVideo && (
  <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
    <div className="relative w-full max-w-3xl aspect-video">
      <iframe
        src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full rounded-xl"
      />
      <button
        onClick={() => setSelectedVideo(null)}
        className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-full"
      >
        ✕
      </button>
    </div>
  </div>
)}

      {/* Enhanced Partners Section */}
      {/* <section className="container py-10 text-center">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <Building className="w-8 h-8 text-green-400" />
              <h2 className="text-4xl font-bold text-green-400">
                Our Partners & Institutions
              </h2>
            </div>
            <div className="w-24 h-1 bg-green-400 mx-auto rounded-full"></div>
            <p className="text-gray-400 text-lg">
              Collaborating with prestigious institutions worldwide
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              "VIT",
              "IIM",
              "IIT",
              "Zensar",
              "Stanford",
              "MIT",
              "SRM",
              "Accenture",
            ].map((partner, index) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Badge
                  variant="secondary"
                  className="bg-gradient-to-r from-green-800 to-green-700 text-white text-lg px-8 py-4 rounded-2xl 
                       hover:from-green-700 hover:to-green-600 transition-all duration-300 cursor-pointer 
                       shadow-lg hover:shadow-green-400/20"
                >
                  {partner}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section> */}

      {/* Enhanced Call to Action */}
      <section className="relative py-10 pb-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-400/10 via-transparent to-transparent"></div>

        <motion.div
          className="container relative space-y-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-green-400 leading-tight"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Inventors Now.
            <br />
            <span className="bg-gradient-to-r from-green-400 to-green-200 bg-clip-text text-transparent">
              Entrepreneurs Next.
            </span>
          </motion.h2>

          <motion.p
            className="mt-8 text-xl md:text-2xl text-gray-300 md:w-3/4 mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            At DMIF, we're not just building skillsets — we're shaping
            <span className="text-green-400 font-semibold">
              {" "}
              founders and IP creators
            </span>
            . Every learner graduates with ownership, originality, and
            opportunity.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 pt-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={()=>handleFooterNavClick("#Contact")}
              className="bg-green-400 text-black px-8 py-3 rounded-xl font-semibold hover:bg-green-300 transition-all duration-300 shadow-lg hover:shadow-green-400/30"
            >
              Join Our Community
            </motion.button>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
