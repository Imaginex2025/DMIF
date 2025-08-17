import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
import { LogoIcon } from "./Icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { appRoutes } from "../Routes/route";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  { href: appRoutes.home, label: "Home" },
  { href: appRoutes.about, label: "About" },
  { href: appRoutes.programs, label: "Programs" },
  { href: appRoutes.Outcomes, label: "Outcomes" },
];

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
    <header className="sticky top-0 z-40 w-full border-b bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container flex h-14 w-screen justify-between px-4">
          {/* Logo */}
          <NavigationMenuItem className="flex font-bold">
            <Link to={appRoutes.home} className="flex text-xl font-bold ml-2">
              <LogoIcon />
              DMIF
            </Link>
          </NavigationMenuItem>

          {/* Mobile */}
          <span className="flex md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu
                  className="h-5 w-5 md:hidden"
                  onClick={() => setIsOpen(true)}
                />
              </SheetTrigger>

              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle className="text-xl font-bold">DMIF</SheetTitle>
                </SheetHeader>
                <nav className="mt-4 flex flex-col items-center justify-center gap-2">
                  {routeList.map(({ href, label }) => (
                    <Link
                      key={label}
                      to={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* Desktop */}
          <nav className="hidden gap-2 md:flex">
            {routeList.map((route, i) => (
              <Link
                to={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({ variant: "ghost" })}`}
              >
                {route.label}
              </Link>
            ))}
          </nav>

          {/* Apply Now Button */}
          <div className="hidden gap-2 md:flex">
            <button
              onClick={() => handleFooterNavClick("#Contact")}
              className={`border ${buttonVariants({
                variant: "secondary",
              })} cursor-pointer transform duration-300 hover:scale-110`}
            >
              Apply Now
            </button>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
