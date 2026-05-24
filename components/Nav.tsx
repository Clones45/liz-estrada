"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    label: "Mortgage Solutions",
    href: "https://mortgage.lizestrada.com/",
    desc: "Residential lending & home loans",
  },
  {
    label: "Credit Repair",
    href: "/credit-repair",
    desc: "Credit optimization & restoration",
  },
  {
    label: "Business Funding",
    href: "/business-funding",
    desc: "Lines of credit & capital solutions",
  },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className="sticky top-0 left-0 right-0 z-50 transition-all duration-300 bg-black"
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div className="container-xl">
          <div className="flex items-center justify-between h-16 md:h-24">
            {/* Logo */}
            <Link href="/" className="flex items-center" id="nav-logo">
              <Image
                src="/logo-2_transparent.png"
                alt="Liz Estrada Logo"
                width={251}
                height={160}
                className="h-14 w-auto md:h-20 md:w-auto object-contain transition-transform duration-300 hover:scale-105"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
              <Link href="/" className="nav-link text-white" id="nav-home">Home</Link>

              {/* Services dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  id="nav-services-toggle"
                  className="nav-link text-white flex items-center gap-1.5"
                  onClick={() => setDropdownOpen((v) => !v)}
                  aria-expanded={dropdownOpen}
                  aria-haspopup="true"
                >
                  Services
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {dropdownOpen && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 rounded-xl overflow-hidden z-50 animate-fade-up bg-white"
                    style={{
                      border: "1px solid #E5E7EB",
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                      animationDuration: "0.2s"
                    }}
                    id="nav-services-dropdown"
                  >
                    {services.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="flex flex-col px-5 py-3.5 transition-colors duration-150 group/item hover:bg-gray-50 border-b border-gray-100 last:border-none"
                        onClick={() => setDropdownOpen(false)}
                      >
                        <span
                          className="text-sm font-semibold text-gray-900 group-hover/item:text-[var(--color-navy-700)] transition-colors"
                        >
                          {s.label}
                        </span>
                        <span className="text-xs mt-0.5 text-gray-500">
                          {s.desc}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/about" className="nav-link text-white" id="nav-about">About</Link>
              <Link href="/#contact" className="nav-link text-white" id="nav-contact">Contact</Link>
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/consultation"
                className="btn-gold px-6 py-2.5 rounded-md text-sm"
                id="nav-cta-book"
              >
                Book Consultation
              </Link>
            </div>

            {/* Hamburger */}
            <button
              id="nav-mobile-toggle"
              className="md:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle mobile menu"
              aria-expanded={menuOpen}
            >
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`} id="nav-mobile-menu">
        <div className="flex flex-col items-center gap-6 text-center">
          <Link
            href="/"
            className="flex flex-col items-center group mb-4"
            onClick={() => setMenuOpen(false)}
          >
            <div className="relative w-56 h-36 transition-transform duration-300 hover:scale-105">
              <Image
                src="/logo-2_transparent.png"
                alt="Liz Estrada Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>
          <Link
            href="/"
            className="text-2xl font-serif font-bold text-white"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="text-2xl font-medium text-white/80 hover:text-white transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {s.label}
            </Link>
          ))}
          <Link
            href="/about"
            className="text-2xl font-medium text-white/80 hover:text-white transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/consultation"
            className="btn-gold px-8 py-3.5 rounded-md text-base mt-4"
            onClick={() => setMenuOpen(false)}
            id="nav-mobile-cta"
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </>
  );
}
