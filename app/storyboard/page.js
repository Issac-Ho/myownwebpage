"use client";

import Link from 'next/link';
import Footer from "../components/Footer";

export default function Storyboard() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <main className="p-10 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">My Work</h1>
        <p className="leading-7 mb-4">
          Here you can find information about my projects and work experience.
        </p>
        <Link 
          href="/project" 
          className="inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-colors">
          Self-checkout Machine Project
        </Link>
      </main>
      <Footer /> 
    </div>
  );
}
