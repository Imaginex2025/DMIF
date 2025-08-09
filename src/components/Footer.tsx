import { LogoIcon } from "./Icons";

export const Footer = () => {
  return (
    <footer id="footer" className="border-t text-gray-300">
      {/* Main Footer Section */}
      <section className="container py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        
        {/* Left Section - Logo + Social */}
        <div className="flex flex-col items-start">
          <a
            href="/"
            className="font-bold text-2xl flex items-center gap-2 mb-4 text-white"
          >
            <LogoIcon  />
            DMIF
          </a>
          {/* Social Links */}
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-white transition-colors duration-200">🌐</a>
            <a href="#" className="hover:text-white transition-colors duration-200">📘</a>
            <a href="#" className="hover:text-white transition-colors duration-200">🐦</a>
          </div>
        </div>

        {/* Center - Quick Links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
          {[
            { label: "Home", href: "/" },
            { label: "Programs", href: "/programs" },
            { label: "Apply", href: "/apply" },
            { label: "Partner", href: "/partner" },
            { label: "Contact", href: "/contact" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right - Contact Info */}
        <div className="text-sm leading-relaxed text-right">
          <p>
            📧 <a href="mailto:reach@drmadhan.in" className="hover:text-white">reach@drmadhan.in</a>
          </p>
          <p>
            🌐 <a href="https://www.drmadhan.in" target="_blank" rel="noreferrer" className="hover:text-white">www.drmadhan.in</a>
          </p>
          <p>
            📱 <a href="tel:+919994326696" className="hover:text-white">+91-9994326696</a>
          </p>
        </div>
      </section>

      {/* Bottom Bar */}
      <div className=" border-gray-700 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} DMIF. All rights reserved.
      </div>
    </footer>
  );
};
