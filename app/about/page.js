"use client";

import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <main className="p-10 max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">Who Am I?</h2>
            <div className="space-y-4">
              <div>
                <strong className="text-lg">👋 Who I Am</strong><br />
                <p>
                  Bachelor of Information student at U of Toronto with a software development background from SAIT. 
                  I bridge technical skills and human-centered design to solve real-world problems, focusing on data 
                  science, AI, and accessible user experiences.
                </p>
              </div>
              <div>
                <strong className="text-lg">💡 What I Do</strong><br />
                <ul className="list-disc list-inside space-y-2 leading-6">
                  <li>Transform data into actionable insights</li>
                  <li>Design intuitive, user-friendly systems</li>
                  <li>Build functional, accessible web and software applications</li>
                </ul>
              </div>
              <div >
                <strong className="text-lg">🌟 What Makes Me Unique</strong><br />
                <ul className="list-disc list-inside space-y-2 leading-6">
                  <li>Combines software development experience with information design thinking</li>
                  <li>Strong at team collaboration and translating research into actionable design decisions</li>
                  <li>Motivated to create solutions that are impactful, efficient, and user-focused</li>
                </ul>
              </div>
            </div>
            
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="space-y-4">
            <div>
              <strong className="text-lg">Soft Skills:</strong>
              <p className="mt-2">
                Critical thinking • Problem-solving • Communication • Teamwork • Adaptability • Empathy • Time management • Creativity • Attention to detail • Leadership
              </p>
            </div>
            <div>
              <strong className="text-lg">Technical Skills:</strong>
              <p className="mt-2">
                Figma, Balsamiq • HTML, CSS, JS, React • Node.js, Python, Java, C++ • MongoDB, MySQL, SQLite • Git/GitHub • UI/UX Design • Responsive & Accessible Design • Testing & Debugging • Agile 
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer /> 
    </div>
  );
}
