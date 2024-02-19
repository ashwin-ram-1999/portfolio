import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <div>
      <ul className="flex">
        <li className="flex-1 mr-2">
          <Link href="/portfolio">
            <div className="text-center block border border-gray-200 rounded hover:border-gray-200 text-gray-300 hover:bg-gray-200 hover:text-gray-900 py-2 px-4">
              About Me
            </div>
          </Link>
        </li>
        <li className="flex-1 mr-2">
          <Link href="/portfolio">
            <div className="text-center block border border-gray-200 rounded hover:border-gray-200 text-gray-300 hover:bg-gray-200 hover:text-gray-900 py-2 px-4">
              Skills and Projects
            </div>
          </Link>
        </li>
        <li className="flex-1 mr-2">
          <Link href="/portfolio">
            <div className="text-center block border border-gray-200 rounded hover:border-gray-200 text-gray-300 hover:bg-gray-200 hover:text-gray-900 py-2 px-4">
              My Socials
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
