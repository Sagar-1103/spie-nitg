"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { NextPage } from "next";
import Image from 'next/image';
import Spienitg from "../public/Spie-nitg-black.png";
import Nitgoa from "../public/nitg.png";
import { FaUserCircle } from "react-icons/fa";

const Navbar:NextPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // console.log("Hello");
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    // Add a resize event listener to close the mobile menu when the screen size becomes larger
    window.addEventListener("resize", handleResize);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="bg-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between md:items-center relative">
        {/* Brand name centered for mobile view */}
        <Link
          href="/"
          className="text-black text-2xl flex font-bold text-start md:text-left"
        >
          <Image className="mx-4" src={Spienitg} alt="SPIE Logo" width={100} height={100}/>
          <Image className="mx-4" src={Nitgoa} alt="SPIE Logo" width={45} height={45}/>
        </Link>
        <div className="md:flex space-x-4 mt-4 md:mt-0 hidden">
          <Link href="/" className={`text-black font-bold hover:bg-gray-200 hover:text-black hover:font-extrabold hover:ring-offset-2 hover:ring-2 rounded-3xl px-3 py-1`}>
            Home
          </Link>
           <Link href="/" className={`text-black rounded-2xl px-3 py-1`}>
            News
          </Link>
           <Link href="/" className={`text-black rounded-2xl px-3 py-1`}>
            Gallery
          </Link>
          <Link href="/committies" className={`text-black rounded-2xl px-3 py-1`}>
            Committies
          </Link>
          <Link href="/" className={`text-black rounded-2xl px-3 py-1`}>
            About us
          </Link>
          <Link href="/" className={`text-black rounded-2xl px-3 py-1`}>
          <FaUserCircle size={28} color="black" title="User Icon" />
          </Link>
        
        </div>
        {/* Toggle button at top-right for mobile view */}
        <button
          onClick={toggleMobileMenu}
          className="absolute p-1 top-0.5 right-4 md:hidden text-black focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/* Mobile menu */}
        
          <div className={`bg-white mt-2 ${!isMobileMenuOpen?"hidden -translate-y-100":"flex ease-linear translate-y-0"} justify-center flex-col items-center`}>
            <Link href="/" className={`block py-2 px-4 rounded-2xl text-black`} onClick={toggleMobileMenu}>
              Home
            </Link>
            <Link href="/" className={`block py-2 px-4  rounded-2xl text-black`} onClick={toggleMobileMenu}>
            News
          </Link>
          <Link href="/" className={`block py-2 px-4  rounded-2xl text-black`} onClick={toggleMobileMenu}>
            Committies
          </Link>
          <Link href="/" className={`block py-2 px-4  rounded-2xl text-black`} onClick={toggleMobileMenu}>
            About
          </Link>
          <Link href="/" className={`block py-2 px-4  rounded-2xl text-black`} onClick={toggleMobileMenu}>
            Login
          </Link>
          </div>
      </div>
    </nav>
  );
}

export default Navbar;