"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-[#ead9d5] bg-[#f8f1ee]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

        {/* Logo */}
        <a href="#" className="flex items-center">
          <img
            src="/images/tulip-logo.png"
            alt="Tulip Beauty Parlour"
            className="h-14 w-auto object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">

          <a
            href="#"
            className="text-sm text-[#6b4a4a] transition hover:text-[#b98282]"
          >
            Home
          </a>

          <a
            href="#services"
            className="text-sm text-[#6b4a4a] transition hover:text-[#b98282]"
          >
            Services
          </a>

          <a
            href="#about"
            className="text-sm text-[#6b4a4a] transition hover:text-[#b98282]"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-sm text-[#6b4a4a] transition hover:text-[#b98282]"
          >
            Contact
          </a>

          <a
            href="#appointment"
            className="rounded-full bg-[#b98282] px-6 py-2.5 text-sm font-medium text-white transition hover:bg-[#6b4a4a]"
          >
            Book Appointment
          </a>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-[#6b4a4a] md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? "×" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-[#ead9d5] bg-[#f8f1ee] px-6 py-5 md:hidden">

          <div className="flex flex-col gap-4">

            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className="text-sm text-[#6b4a4a]"
            >
              Home
            </a>

            <a
              href="#services"
              onClick={() => setIsOpen(false)}
              className="text-sm text-[#6b4a4a]"
            >
              Services
            </a>

            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="text-sm text-[#6b4a4a]"
            >
              About
            </a>

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="text-sm text-[#6b4a4a]"
            >
              Contact
            </a>

            <a
              href="#appointment"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-full bg-[#b98282] px-6 py-3 text-center text-sm font-medium text-white"
            >
              Book Appointment
            </a>

          </div>

        </div>
      )}
    </nav>
  );
}