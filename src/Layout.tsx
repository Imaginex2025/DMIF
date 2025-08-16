import React from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar always on top */}
      <Navbar />

      {/* Page content */}
      <main className="flex-1">{children}</main>

      {/* Footer always at bottom */}
      <Footer />
    </div>
  );
};

export default Layout;
