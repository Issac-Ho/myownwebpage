"use client";

import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <main className="p-10 max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">Who Am I?</h2>
            <p className="leading-7">
              Hi, my name is Issac Ho, and I am a student in the Bachelor of Information (BI) program at the University of Toronto. I 
              previously completed a Software Development Diploma at the Southern Alberta Institute of Technology (SAIT), where I 
              developed a strong technical foundation in programming and systems design. While I initially aimed to become a software 
              developer, my academic experience led me to pursue a future career in data science, with a growing interest in AI and 
              machine learning.
              I have experience with programming, databases, and data-driven systems, along with strong communication and collaboration 
              skills developed through group projects and presentations. My background in both software development and information
              studies allows me to approach problems from technical and human-centered perspectives.
              I am an optimistic and empathetic person who values continuous learning and making a positive impact. 
              Outside of my studies, I enjoy exploring new technologies and staying engaged with emerging trends in data and AI.
              Overall, I am motivated to use data to solve meaningful problems and contribute thoughtfully to future teams and 
              organizations.
            </p>
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="space-y-4">
            <div>
              <strong className="text-lg">Soft Skills:</strong>
              <p className="mt-2">
                Critical thinking, problem-solving, Communication, User research, Teamwork, Adaptability, Time management, Creativity, Attention to detail, Empathy.
              </p>
            </div>
            <div>
              <strong className="text-lg">Technical Skills:</strong>
              <p className="mt-2">
                Prototyping tools (Figma, Balsamiq), Front-end development (HTML, CSS, JavaScript, React), Back-end development (Node.js, Python, Java, C++), Database management (MongoDB, MySQL, SQLite), Version control (Git, GitHub), UI/UX design principles, Responsive web design, Accessibility standards, Agile methodologies, Testing and debugging.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer /> 
    </div>
  );
}
