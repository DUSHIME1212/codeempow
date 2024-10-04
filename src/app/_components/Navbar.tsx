"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(prev => !prev);
  }

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#members", label: "Members" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="fixed top-0 z-20 flex min-h-16 w-full flex-row items-center justify-between bg-white px-8 py-2 shadow-md md:px-16 lg:px-32">
      <Link href="/" className="text-lg font-bold text-blue-600 md:text-2xl">
        Code Empowerment
      </Link>
      <div className="hidden items-center md:flex">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-md px-3 py-8 text-sm font-medium text-gray-700 hover:text-blue-600"
          >
            {item.label}
          </Link>
        ))}
      </div>
      <button onClick={toggleMenu} className="gap-1 flex flex-col md:hidden">
        <div className={`h-1 w-6 rounded-full ${isOpen ? "rotate-45 translate-y-2" : ""} bg-gray-700 transition-all`}></div>
        <div className={`h-1 w-6 rounded-full bg-gray-700 ${isOpen ? "opacity-0" : ""} transition-all`}></div>
        <div className={`h-1 w-6 rounded-full ${isOpen ? "-rotate-45 -translate-y-2" : ""} bg-gray-700 transition-all`}></div>
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white py-8 shadow-md md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
