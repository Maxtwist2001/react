'use client'

import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import Button from "./button";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image className="cursor-pointer hover:opacity-75" src="/hilink-logo.svg" alt="hilink logo" width={74} height={29} />
      </Link>
      
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-grey-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button type="button" title="Login" icon="/user.svg" variant="btn_dark_green" />
      </div>
      
      
      <div className="lg:hidden">
        <Image
          src={isMenuOpen ? "/close.svg" : "/menu.svg"}
          alt={isMenuOpen ? "close" : "menu"}
          width={32}
          height={32}
          className="cursor-pointer"
          onClick={toggleMenu}
        />
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed top-0 right-0 h-screen w-[40%] bg-white z-50 shadow-2xl transition-all duration-300 lg:hidden">
          {/* Close button */}
          <div className="absolute top-5 right-5 p-2 bg-green-400 rounded-full">
            <Image
              src="/close.svg"
              alt="close"
              width={20}
              height={20}
              className="cursor-pointer invert"
              onClick={toggleMenu}
            />
          </div>
          
          <ul className="flex flex-col items-start gap-6 p-8 mt-14 h-full">
            {NAV_LINKS.map((link) => (
              <Link 
                href={link.href} 
                key={link.key} 
                className="regular-16 text-gray-90 cursor-pointer transition-all hover:font-bold"
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4">
              <Button type="button" title="Login" icon="/user.svg" variant="btn_dark_green" />
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;