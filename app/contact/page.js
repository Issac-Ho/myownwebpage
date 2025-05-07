"use client";

import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <main className="p-10 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Contact</h1>
        <p className="leading-7">Email: hexiyu81@gmail.com</p>
        <p className="leading-7">Phone: (403)371-1204</p>
        <p className="leading-7">GitHub: <a href="https://github.com/Issac-Ho?tab=repositories" className="text-blue-500 hover:underline">Issac Ho</a></p>
        <p className="leading-7">LinkedIn: <a href="https://www.linkedin.com/in/issac-ho-4094a92b9/" className="text-blue-500 hover:underline">Issac Ho</a></p>
      </main>
      <Footer /> 
    </div>
  );
}
