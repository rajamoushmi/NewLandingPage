import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { buttonVariants } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { ChevronDown } from "lucide-react";

interface RouteProps {
  href?: string;
  label: string;
  subRoutes?: { href: string; label: string }[];
}

const routeList: RouteProps[] = [
  {
    label: "Services",
    subRoutes: [
      { href: "#about", label: "About Us" },
      { href: "#sponsors", label: "What we do?" },
     
    ],
  },
  {
    href: "#testimonials",
    label: "Solutions",
  },
  {
    href: "#team",
    label: "Our Team",
  },
  {
    href: "#faq",
    label: "Contact Us",
  },
];

export const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-40 w-full bg-white dark:bg-background border-b dark:border-slate-700">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between">
          {/* Logo */}
          <NavigationMenuItem className="font-bold flex">
            <a
              rel="noreferrer noopener"
              href="/"
              className="ml-2 font-bold text-xl flex"
            >
              
              Intelion
            </a>
          </NavigationMenuItem>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 items-center">
            {routeList.map((route, i) => (
              <div
                key={i}
                className="relative group"
                onMouseEnter={() =>
                  route.subRoutes ? setOpenDropdown(route.label) : null
                }
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  rel="noreferrer noopener"
                  href={route.href || "#"}
                  className={`text-[17px] flex items-center gap-1 ${buttonVariants({
                    variant: "ghost",
                  })}`}
                >
                  {route.label}
                  {route.subRoutes && <ChevronDown size={16} />}
                </a>

                {/* Dropdown Menu */}
                {route.subRoutes && openDropdown === route.label && (
                  <div className="absolute top-full left-0 w-64 bg-white dark:bg-gray-900 shadow-lg rounded-md py-2 border border-gray-200 dark:border-gray-700">
                    {route.subRoutes.map((subRoute, j) => (
                      <a
                        key={j}
                        href={subRoute.href}
                        className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                      >
                        {subRoute.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side - Mode Toggle */}
          <div className="hidden md:flex gap-2">
            <a
              rel="noreferrer noopener"
              href="https://schedule.finolity.com/#/202122000000132193"
              target="_blank"
              className={`border ${buttonVariants({ variant: "secondary" })}`}
            >
              Schedule for free consultation
            </a>
            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};