import { Link, useNavigate, useLocation } from "react-router-dom";
import { LogoIcon } from "./Icons";
import { buttonVariants } from "./ui/button";
import { appRoutes } from "../Routes/route";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  { href: appRoutes.home, label: "Home" },
  { href: appRoutes.programs, label: "Programs" },
  { href: appRoutes.about, label: "About" },
  { href: appRoutes.Outcomes, label: "Outcomes" },
  { href: "#Contact", label: "Contact" }, // Special case
];

export const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleFooterNavClick = (href: string) => {
    if (href === "#Contact") {
      // Always navigate to home first
      if (location.pathname !== "/") {
        navigate("/");
        // Delay scroll until route changes
        setTimeout(() => {
          const targetElement = document.querySelector("#Contact");
          targetElement?.scrollIntoView({ behavior: "smooth" });
        }, 200);
      } else {
        // Already on home → just scroll
        const targetElement = document.querySelector("#Contact");
        targetElement?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="text-white border-t border-[#2E2132] text-xs sm:text-sm">
      <div className="flex flex-col md:flex-row justify-between gap-10 px-5 sm:px-20 py-10">
        {/* Left - Logo */}
        <div className="flex-1 flex flex-col items-start">
          <Link
            to={appRoutes.home}
            className="font-bold text-2xl flex items-center gap-2 mb-4"
          >
            <LogoIcon />
            DMIF
          </Link>
          <p className="mt-2 text-gray-400 max-w-xs">
            DMIF provides digital media solutions to help businesses grow online
            with innovative technology and expert support.
          </p>
        </div>

        {/* Center - Nav */}
        <div className="flex-1">
          <ul className="flex flex-col md:items-center">
            {routeList.map(({ href, label }) => (
              <li key={label}>
                {href === "#Contact" ? (
                  <button
                    onClick={() => handleFooterNavClick(href)}
                    className={`${buttonVariants({
                      variant: "ghost",
                    })} bg-transparent p-0 text-left text-white hover:text-green-400 transition-colors duration-200`}
                  >
                    {label}
                  </button>
                ) : (
                  <Link
                    to={href}
                    className={`${buttonVariants({
                      variant: "ghost",
                    })} bg-transparent p-0 text-left text-white hover:text-green-400 transition-colors duration-200`}
                  >
                    {label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

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
