import React from 'react';
import { Home, Instagram } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const TG_navbar = () => {
  return (
    <nav className="w-full bg-gray-800 bg-opacity-15 bg-[url('/img/banner-bg-extended-vertical.png')] bg-repeat border-b border-gray-600">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="flex items-center justify-between h-14">
          {/* Left side - Home icon with text and logo */}
          <div className="flex items-center space-x-4">
            {/* Home icon with text */}
            <Link href="/" className="flex items-center space-x-1 text-gray-200 hover:text-white">
              <Home className="h-5 w-5" />
              <span className="text-sm sm:text-base font-medium">Home</span>
            </Link>

            {/* Logo with two-line text */}
            <div className="flex items-center">
              <Image
                src="/img/itsa.png"
                alt="Logo"
                width={64}
                height={64}
                className="h-10 w-10 md:h-12 md:w-12"
              />
              <div className="ml-2 flex font-sans flex-col justify-center h-full">
                <span className="text-gray-200 text-base font-bold leading-tight">
                  Information Technology
                </span>
                <span className="text-gray-200 text-base font-bold leading-tight">
                  Student Association
                </span>
              </div>
            </div>
          </div>

          {/* Right side - Instagram icon */}
          <div className="flex items-center">
            <a
              href="https://instagram.com/itsa_vppcoe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-white"
            >
              <Instagram className="h-5 w-5 text-pink-600" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TG_navbar;