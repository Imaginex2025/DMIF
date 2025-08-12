import { LogoIcon } from "./Icons";
import { buttonVariants } from "./ui/button";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  { href: "#Home", label: "Home" },
  { href: "#Programs", label: "Programs" },
  { href: "#Service", label: "Service" },
  { href: "#faq", label: "FAQ" },
  { href: "#Contact", label: "Contact" },
];

export const Footer = () => {
  const handleFooterNavClick = (href: string) => {
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white border-t border-[#2E2132] text-xs sm:text-sm">
      <div className="flex flex-col md:flex-row justify-between gap-10 px-5 sm:px-20 py-10">
        
        {/* Left - Logo & Description */}
        <div className="flex-1 flex flex-col items-start">
          <a href="/" className="font-bold text-2xl flex items-center gap-2 mb-4">
            <LogoIcon />
            DMIF
          </a>
          <p className="mt-2 text-gray-400 max-w-xs">
DMIF provides digital media solutions to help businesses grow online with innovative technology and expert support.
          </p>
        </div>

        {/* Center - Navigation */}
        <div className="flex-1">
          <ul className="flex flex-col md:items-center">
            {routeList.map(({ href, label }) => (
              <li key={label}>
                <button
                  onClick={() => handleFooterNavClick(href)}
                  className={`${buttonVariants({
                    variant: "ghost",
                  })} bg-transparent p-0 text-left text-white hover:text-green-400 transition-colors duration-200`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Right - Contact Info */}
{/* Right - Contact Info */}
<div className="flex-1 text-sm leading-relaxed md:items-end md:text-right space-y-2">
  <p>
    <strong>Mail:</strong>{" "}
    <a href="mailto:reach@drmadhan.in" className="hover:text-green-400">
      reach@drmadhan.in
    </a>
  </p>
  <p>
    <strong>Website:</strong>{" "}
    <a
      href="https://www.drmadhan.in"
      target="_blank"
      rel="noreferrer"
      className="hover:text-green-400"
    >
      www.drmadhan.in
    </a>
  </p>
  <p>
    <strong>Number:</strong>{" "}
    <a href="tel:+919994326696" className="hover:text-green-400">
      +91-9994326696
    </a>
  </p>

  {/* Address below contact info */}
  <p className="mt-4">
    <strong>Address:</strong> 123, Example Street, Bangalore, Karnataka, India - 560001
  </p>
</div>

      </div>

      {/* Footer Bottom */}
      <div className="w-full px-5 sm:px-20 py-6 flex flex-col md:flex-row justify-between items-center text-[10px] sm:text-xs text-gray-400">
        <p>© {new Date().getFullYear()} DMIF. All rights reserved.</p>
        <p>Bangalore</p>
      </div>
    </footer>
  );
};
