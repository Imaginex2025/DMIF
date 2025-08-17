
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  Globe,
  Briefcase,
  Award,
  TrendingUp,
  Users,
  ChevronRight,
  Star,
  Target,
  Zap,
  BookOpen,
  Building2,
  Rocket,
  Shield,
  CheckCircle,
  LucideIcon
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
export default function EnhancedOutcomes() {

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
  const indianStudentBenefits = [
    {
      icon: Award,
      title: "Innovation Lab Access",
      description: "Direct entry into top innovation labs, product teams, and R&D divisions at leading companies",
      details: ["Access to cutting-edge research facilities", "Collaboration with industry experts", "Real-world project experience"]
    },
    {
      icon: TrendingUp,
      title: "Placement Advantage",
      description: "Significantly stronger resume with published research and patent applications",
      details: ["Higher package offers", "Priority in recruitment drives", "Leadership role opportunities"]
    },
    {
      icon: GraduationCap,
      title: "Elite Institution Ready",
      description: "Build an academic profile that stands out for IIT/NIT/IIM admissions",
      details: ["Research publication credits", "Academic recommendation letters", "Competitive exam advantages"]
    },
    {
      icon: Users,
      title: "Fellowship Success",
      description: "Competitive edge in securing prestigious fellowships and scholarships",
      details: ["Government fellowship programs", "Corporate scholarship opportunities", "International exchange programs"]
    }
  ];

  const internationalBenefits = [
    {
      icon: Award,
      title: "Ivy League Profile",
      description: "Build the research credentials that top universities look for beyond grades",
      details: ["Publications in peer-reviewed journals", "Conference presentations", "Research methodology expertise"]
    },
    {
      icon: BookOpen,
      title: "SOP Differentiation",
      description: "Stand out with concrete research achievements and patent applications",
      details: ["Unique research contributions", "Technical innovation showcase", "Academic writing portfolio"]
    },
    {
      icon: Target,
      title: "Academic Originality",
      description: "Demonstrate research capability beyond traditional GPA metrics",
      details: ["Independent research projects", "Novel problem-solving approaches", "Critical thinking validation"]
    },
    {
      icon: Users,
      title: "Global Network",
      description: "Access to international research networks and mentorship opportunities",
      details: ["Collaboration with global researchers", "Industry mentor connections", "Academic reference network"]
    }
  ];

  const careerBenefits = [
    {
      icon: Shield,
      title: "Visa Applications",
      description: "Use research credentials and IP for PR/Green Card applications",
      details: ["EB-1 extraordinary ability category", "National interest waiver eligibility", "Research contribution evidence"]
    },
    {
      icon: Globe,
      title: "Work Authorization",
      description: "Qualify for O-1, EB1, and startup visa programs globally",
      details: ["O-1A extraordinary ability visa", "Startup founder visa programs", "Global talent recognition schemes"]
    },
    {
      icon: Star,
      title: "Talent Schemes",
      description: "Meet criteria for Global Talent visa and similar programs",
      details: ["UK Global Talent visa", "Canada Global Skills Strategy", "Australia Global Talent Program"]
    },
    {
      icon: Rocket,
      title: "Startup Ecosystem",
      description: "Direct access to international startup and innovation ecosystems",
      details: ["Investor network connections", "Accelerator program eligibility", "Technical co-founder credibility"]
    }
  ];

  type Benefit = {
  icon: LucideIcon ;   // depends on whether you use lucide-react or react-icons
  title: string;
  description: string;
  details: string[];
};

type BenefitCardProps = {
  benefit: Benefit;
};


const BenefitCard: React.FC<BenefitCardProps> = ({ benefit }) => (
    <div className=" bg-card rounded-lg p-6 shadow-lg hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300 border border-gray-800 hover:border-green-500/50">
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center border border-green-500/30">
          <benefit.icon className="w-6 h-6 text-green-500" />
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-semibold text-white mb-2">
            {benefit.title}
          </h4>
          <p className="text-gray-300 mb-3">
            {benefit.description}
          </p>
          <ul className="space-y-1">
            {benefit.details.map((detail:any, index:number) => (
              <li key={index} className="flex items-center space-x-2 text-sm text-gray-400">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black">
      <div className=" md:px-20  px-5 py-16">
        {/* Header */}
        {/* <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-green-500/20 text-green-500 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-green-500/30">
            <Star className="w-4 h-4" />
            <span>Transformative Outcomes</span>
          </div>
          <h1 className="text-6xl font-bold mb-6 text-green-500">
            Student Outcomes
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Real opportunities, global recognition, and career-defining benefits that transform your academic journey into extraordinary success.
          </p>
        </div> */}

        {/* Indian Students Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30">
              <GraduationCap className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-green-500 mb-4">For Indian Students</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Accelerate your academic and career prospects with research credentials that open doors to top opportunities in India's competitive landscape.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {indianStudentBenefits.map((benefit, index) => (
              <BenefitCard key={index} benefit={benefit}   />
            ))}
          </div>

          <div className="mt-8  bg-card border border-green-500/20 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-green-500 mb-4 flex items-center">
              <Zap className="w-5 h-5 mr-2" />
              Key Statistics for Indian Students
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-green-500 mb-2">85%</div>
                <div className="text-sm text-gray-400">Higher placement packages</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-500 mb-2">3x</div>
                <div className="text-sm text-gray-400">Better admission chances</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-500 mb-2">92%</div>
                <div className="text-sm text-gray-400">Fellowship success rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* International Students Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30">
              <Globe className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-green-500 mb-4">For US/International Students</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Stand out in competitive global markets with research achievements that go beyond traditional academic metrics.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {internationalBenefits.map((benefit, index) => (
              <BenefitCard key={index} benefit={benefit}   />
            ))}
          </div>

          <div className="mt-8  bg-card border border-green-500/20 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-green-500 mb-4 flex items-center">
              <Building2 className="w-5 h-5 mr-2" />
              Global Recognition Metrics
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-green-500 mb-2">78%</div>
                <div className="text-sm text-gray-400">Ivy League acceptance boost</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-500 mb-2">4.2x</div>
                <div className="text-sm text-gray-400">Research impact factor</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-500 mb-2">95%</div>
                <div className="text-sm text-gray-400">SOP differentiation success</div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Careers Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30">
              <Briefcase className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-green-500 mb-4">For Global Careers</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Unlock international opportunities with research credentials that satisfy visa requirements and talent recognition programs worldwide.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {careerBenefits.map((benefit, index) => (
              <BenefitCard key={index} benefit={benefit}   />
            ))}
          </div>

          <div className="mt-8  bg-card border border-green-500/20 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-green-500 mb-4 flex items-center">
              <Rocket className="w-5 h-5 mr-2" />
              Global Mobility Success
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-green-500 mb-2">89%</div>
                <div className="text-sm text-gray-400">Visa approval rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-500 mb-2">67%</div>
                <div className="text-sm text-gray-400">Faster PR processing</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-500 mb-2">5x</div>
                <div className="text-sm text-gray-400">Higher startup success</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center  rounded-3xl p-12 border border-green-500/30 shadow-2xl shadow-green-500/10">
          <h2 className="text-3xl font-bold mb-4 text-green-500">Ready to Transform Your Future?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have accelerated their careers through research excellence and global recognition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button  onClick={()=>handleFooterNavClick("#Contact")} className="bg-green-500 text-white hover:bg-green-400 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/30">
              Start Your Journey
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>

          </div>
        </div>
      </div>
    </div>
  );
}