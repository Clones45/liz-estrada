"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-16 pb-8 px-4 md:px-8 border-t border-gray-900">
      <div className="container-xl max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">

          {/* Column 1: Logos */}
          <div className="flex flex-col gap-8 items-start lg:col-span-1">
            <div className="relative w-40 h-16">
              <Image
                src="/First-Capital.png"
                alt="First Capital Group"
                fill
                className="object-contain object-left"
              />
            </div>
            {/* Note: Web browsers do not natively support EPS files. We use img here per instructions, but it may appear broken. */}
            <img
              src="/equal-housing-logo.png"
              alt="Equal Housing Opportunity"
              className="w-24 h-auto"
            />
          </div>

          {/* Column 2: Important Pages */}
          <div className="lg:ml-4">
            <h3 className="font-bold text-lg mb-6 tracking-wide">Important Pages</h3>
            <ul className="space-y-4 font-semibold text-[15px]">
              <li><Link href="#" className="hover:text-gray-300 transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-gray-300 transition-colors">Accessibility Assistance</Link></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 tracking-wide">Quick Links</h3>
            <ul className="space-y-4 font-semibold text-[15px]">
              <li><Link href="/programs" className="hover:text-gray-300 transition-colors">Programs</Link></li>
              <li><Link href="/blogs" className="hover:text-gray-300 transition-colors">Blogs</Link></li>
              <li><Link href="/about" className="hover:text-gray-300 transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Column 4: Social Media Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 tracking-wide">Social Media Links</h3>
            <ul className="space-y-4 font-semibold text-[15px]">
              <li>
                <a href="https://www.facebook.com/loanswithlize" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-gray-300 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/lizzylending" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-gray-300 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 hover:text-gray-300 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  YouTube
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact Us */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-lg mb-6 tracking-wide">Contact Us</h3>
            <ul className="space-y-4 font-semibold text-[15px]">
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 22.621l-3.521-6.795c-.007.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.082-1.026-3.492-6.817-2.106 1.039c-2.68 1.32-3.496 4.707-1.921 7.962 1.636 3.376 4.249 7.02 8.749 9.176 3.197 1.536 6.551 1.258 8.784-.112l-1.898-.944v-.002z" />
                  <path d="M21 9h2c0-6.065-4.935-11-11-11v2c4.962 0 9 4.038 9 9z" />
                  <path d="M17 9h2c0-3.859-3.141-7-7-7v2c2.757 0 5 2.243 5 5z" />
                </svg>
                (559) 737-0273
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.89l5.624-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                </svg>
                liz@lizestrada.com
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                </svg>
                <span className="leading-snug">525 N Hall St Visalia,<br />CA 93292</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-[13px] font-bold tracking-wide" style={{ color: "rgba(255,255,255,0.9)" }}>
            Copyright {currentYear}. All rights reserved. Liz Estrada NMLS #1514454 | First Capital Group NMLS #1156766 | Equal Housing Opportunity | Equal Housing Lender
          </p>
        </div>
      </div>
    </footer>
  );
}
