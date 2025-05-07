"use client";

import Link from 'next/link';
import { useDarkMode } from "./DarkModeContext";

export default function NavBar() {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
  
    return (
    <nav className="p-6 flex justify-center space-x-4 bg-gray-100 dark:bg-gray-800">
      <Link 
        href="/" 
        className="px-3 py-2 rounded-md text-gray-900 dark:text-white hover:underline hover:bg-gray-200 dark:hover:bg-gray-600">
        Home
      </Link>
      <Link 
        href="/about" 
        className="px-3 py-2 rounded-md text-gray-900 dark:text-white hover:underline hover:bg-gray-200 dark:hover:bg-gray-600">
        About
      </Link>
      <Link 
        href="/storyboard" 
        className="px-3 py-2 rounded-md text-gray-900 dark:text-white hover:underline hover:bg-gray-200 dark:hover:bg-gray-600">
        Storyboard
      </Link>
      <Link 
        href="/personalStatement" 
        className="px-3 py-2 rounded-md text-gray-900 dark:text-white hover:underline hover:bg-gray-200 dark:hover:bg-gray-600">
        Personal Statement
      </Link>
      <Link 
        href="/contact" 
        className="px-3 py-2 rounded-md text-gray-900 dark:text-white hover:underline hover:bg-gray-200 dark:hover:bg-gray-600">
        Contact
      </Link>
      <button
        onClick={() => {
          console.log("Dark mode button clicked");
          toggleDarkMode();
        }}
        className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
}
