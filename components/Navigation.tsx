"use client";

import { Menu, X, Home, Info, Flame } from "lucide-react";
import React, { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

// Base nav items for public navigation
const navItems = [
  {
    name: "Home",
    href: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    name: "Features",
    href: "/#features",
    icon: <Info className="h-4 w-4" />,
  },
  {
    name: "Pricing",
    href: "/pricing",
    icon: <Info className="h-4 w-4" />,
  },
  {
    name: "Gallery",
    href: "/#gallery",
    icon: <Info className="h-4 w-4" />,
  },
  {
    name: "Blog",
    href: "/blog",
    icon: <Info className="h-4 w-4" />,
  },
];

// NavItem component with hover and active animations
function NavItem({
  item,
  pathname,
  onClick,
}: {
  item: { name: string; href: string; icon: React.ReactNode };
  pathname: string;
  onClick?: () => void;
}) {
  const isActive = pathname === item.href;

  return (
    <Button
      variant="ghost"
      asChild
      className={cn(
        "relative px-3 py-2 text-sm font-medium transition-colors",
        isActive
          ? "text-foreground"
          : "text-muted-foreground hover:text-foreground"
      )}
      onClick={onClick}
    >
      <Link href={item.href}>
        <motion.div
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <span className="mr-1">{item.icon}</span>
          <span>{item.name}</span>
        </motion.div>
        {isActive && (
          <motion.span
            className="absolute bottom-0 left-0 h-0.5 w-full bg-primary rounded-full"
            layoutId="navbar-indicator"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
      </Link>
    </Button>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Handle scroll effects
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card",
        isScrolled ? "shadow-md" : "shadow-inner bg-opacity-15"
      )}
    >
      {/* Logo */}
      <Link href="/" className="flex font-semibold items-center">
        <Flame className="h-8 w-8 text-orange-500 mr-2" />
        <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
          Dripflow
        </span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center">
        <ul className="flex space-x-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <NavItem item={item} pathname={pathname} />
            </li>
          ))}
        </ul>
      </nav>

      {/* Auth Buttons */}
      <div className="hidden lg:flex lg:gap-4">
        <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
          Sign In
        </Button>
        <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg">
          Get Started
        </Button>
      </div>

      {/* Mobile Menu */}
      <div className="flex items-center lg:hidden">
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="cursor-pointer lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Link href="/" className="flex font-semibold items-center">
                    <Flame className="h-7 w-7 text-orange-500 mr-2" />
                    <span className="text-lg font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                      Dripflow
                    </span>
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Button
                    key={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base"
                  >
                    <Link href={item.href} className="flex items-center">
                      <span className="mr-3">{item.icon}</span>
                      {item.name}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              <Separator className="mb-2" />
              <div className="flex flex-col w-full gap-2">
                <Button
                  variant="ghost"
                  className="w-full text-gray-600 hover:text-gray-900"
                >
                  Sign In
                </Button>
                <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg">
                  Get Started
                </Button>
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
