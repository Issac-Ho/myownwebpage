"use client";

import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <main className="p-10 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Hi, I am Issac Ho</h1>
        <h2 className="text-2xl font-semibold mb-4">Welcome to My Introduction Page</h2>
        <p className="leading-7">
          Explore the links above to learn more about me, and how to get in touch. 
        </p>
      </main>
      <Footer /> 
    </div>
  );
}