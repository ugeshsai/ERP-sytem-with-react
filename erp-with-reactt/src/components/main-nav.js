import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet"; // Adjust the path as per your project structure
import { useTheme } from "next-themes";

function MainNav({ className, ...props }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    // Add any necessary side effects here
  }, []);

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            className="md:hidden"
            size="icon"
            variant="outline"
            onClick={toggleMenu}
          >
            <MenuIcon />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" isOpen={isMenuOpen} onClose={toggleMenu}>
          <nav
            className={`flex flex-col items-center space-y-4 bg-white p-4`}
            {...props}
          >
            {/* Replace with your navigation items */}
            <NavigationMenuItem href="/dashboard">Dashboard</NavigationMenuItem>
            <NavigationMenuItem href="/products">Products</NavigationMenuItem>
            <NavigationMenuItem href="/orders">Orders</NavigationMenuItem>
          </nav>
        </SheetContent>
      </Sheet>
      <nav
        className={`hidden md:flex items-center space-x-4 lg:space-x-6 ${className}`}
        {...props}
      >
        {/* Duplicate navigation items for non-mobile view */}
        <NavigationMenuItem href="/dashboard">Dashboard</NavigationMenuItem>
        <NavigationMenuItem href="/products">Products</NavigationMenuItem>
        <NavigationMenuItem href="/orders">Orders</NavigationMenuItem>
      </nav>
    </>
  );
}

export default MainNav;

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function NavigationLink({ href, children }) {
  return (
    <a href={href} passHref>
      <a className="flex w-full items-center py-2 text-lg font-semibold">{children}</a>
    </a>
  );
}

function NavigationMenuItem({ href, children }) {
  const { theme } = useTheme();

  return (
    <a href={href} passHref>
      <a className={`py-4 px-10 rounded-md border border-primary focus:outline-none focus:border-primary-dark focus:ring focus:ring-primary-dark disabled:opacity-50 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} hover:bg-gray-200 dark:hover:bg-gray-700`}>{children}</a>
    </a>
  );
}