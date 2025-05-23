"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-primary-dark text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-semibold hover:text-secondary transition-colors">
              Triumph AI Hub
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link href="/howto" className="hover:text-secondary transition-colors">
              Workflows
            </Link>
            <Link href="/tipsnips" className="hover:text-secondary transition-colors">
              Resources
            </Link>
            <Link href="/resources" className="hover:text-secondary transition-colors">
              Community
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;