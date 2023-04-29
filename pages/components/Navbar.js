import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
    
      <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Dictionary App</span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
            <Link href={"/"} className="mr-5 hover:text-white">
              Home
            </Link>
            <Link href={"/start"} className="mr-5 hover:text-white">
              Search
            </Link>
            <Link href={"/contact"} className="mr-5 hover:text-white">
              Contact
            </Link>
          </nav>
         
        </div>
      </header>
    </div>
  );
};

export default Navbar;
