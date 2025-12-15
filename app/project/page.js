"use client";

import { useState } from "react";
import Footer from "../components/Footer";
import Image from "next/image";

export default function Storyboard() {
    const [zoomedImage, setZoomedImage] = useState(null);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <main className="p-10 max-w-6xl mx-auto">
        
        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* LEFT: Text content */}
          <div className="flex flex-col gap-8">

            {/* 1. Project Overview */}
            <section>
              <h1 className="text-3xl font-bold mb-3">
                Self-Checkout Machine Redesign
              </h1>
              <p className="leading-7">
                How can we reduce confusion and frustration when customers use self-checkout machines?
              </p>
            </section>

            {/* 2. Course Context */}
            <section>
              <p className="leading-7">
                In this project, our team redesigned a self-checkout machine interface using user-centered
                design principles to improve clarity, efficiency, and accessibility. I contributed through
                user research, data analysis, ideation, prototyping, and usability testing. The final outcome
                was a streamlined interface that improved task flow, reduced user uncertainty, and created a
                more confident self-checkout experience.
              </p>
            </section>

            {/* 3. My Role */}
            <section>
              <h2 className="text-xl font-semibold mb-2">My Role</h2>
              <p className="leading-7">
                I conducted user research, analyzed findings, developed needs statements, generated
                design concepts, created a prioritization grid, designed prototypes, and summarized
                usability testing results.
              </p>
            </section>

            {/* 4. Project Details */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Project Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm">
                <p><b>Team:</b> Issac Ho, Vincent Li, Kate Yang, Valerie Huang, Zara Hashme</p>
                <p><b>Platform:</b> Self-checkout machine interface</p>
                <p><b>Sector:</b> Retail Technology</p>
                <p><b>Methodologies:</b> Design Thinking, User-Centered Design, Lean Evaluation</p>
                <p><b>Tools Used:</b> Miro, Google Workspace, Figma</p>
                <p><b>Skills Developed:</b> Interaction Design, Prototyping, Data Analysis</p>
              </div>
            </section>

          </div>

          {/* RIGHT: Image */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/img/HomeScreen.png"
              alt="Self-checkout machine interface redesign"
              width={520}
              height={360}
              className="rounded-lg shadow-md cursor-pointer hover:scale-105 transition"
            />
          </div>
        </div>

        {/* Section Divider */}
        <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen mt-10 mb-8" />
        <section className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-3">
                <u>Problem</u>
            </h2>
            <p className=" leading-7">
                Many self-checkout machines are difficult to use due to unclear interfaces, inefficient task flows, and a lack of 
                accessibility, leading to user confusion and uncertainty. This project addresses these issues by identifying usability 
                barriers through user research and design evaluation to improve the overall self-checkout experience.
            </p>
        </section>

        <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen mt-10 mb-8" />
        <section className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-3">
                <u>Solution</u>
            </h2>
            <p className=" leading-7">
                This project proposes a more human-centered self-checkout experience by redesigning the interface to improve clarity, 
                reduce errors, and lower user stress. Through user research and usability evaluation, the design identifies pain points 
                in instructions, error handling, and interaction flow, and addresses them with clearer guidance and more supportive 
                feedback. The resulting solution aims to make self-checkout systems more intuitive, accessible, and welcoming for users 
                with diverse needs and comfort levels.
            </p>
        </section>

         <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen mt-10 mb-8" />
         <section className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-3">
                <u>Secondary Research</u>
            </h2>
            <p className=" leading-7">
                
            </p>
        </section>

        <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen mt-10 mb-8" />
         <section className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-3">
                <u>Primary Research</u>
            </h2>
            <p className=" leading-7">
                Our primary research used a mixed-methods approach combining surveys, interviews, and field observations to 
                understand real-world experiences with self-checkout machines. This approach allowed us to capture both quantitative 
                usage patterns and qualitative insights into users’ emotions, behaviors, and pain points. By triangulating data
                across methods, we identified recurring usability issues such as scanning errors, bagging confusion, and reliance on 
                staff assistance, which informed key design opportunities.
            </p>
        </section>

        <section className="mt-8">
                <div className="overflow-x-auto">
                    <table className="w-full border border-gray-200 dark:border-gray-700 text-sm">
                        <thead className="bg-gray-100 dark:bg-gray-800">
                            <tr>
                                <th className="border px-4 py-2 text-left">Method</th>
                                <th className="border px-4 py-2 text-left">Participants</th>
                                <th className="border px-4 py-2 text-left">Questions / Focus</th>
                                <th className="border px-4 py-2 text-left">Tools Used</th>
                                <th className="border px-4 py-2 text-left">Time per Participant</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border px-4 py-2 font-medium">Interviews</td>
                                <td className="border px-4 py-2">6</td>
                                <td className="border px-4 py-2">
                                    18 open-ended questions focused on usability, emotions, and improvement ideas
                                </td>
                                <td className="border px-4 py-2">Consent form, Interview guide</td>
                                <td className="border px-4 py-2">20–30 minutes</td>
                            </tr>

                            <tr className="bg-gray-50 dark:bg-gray-900">
                                <td className="border px-4 py-2 font-medium">Survey</td>
                                <td className="border px-4 py-2">24</td>
                                <td className="border px-4 py-2">
                                    16 multiple-choice & Likert-scale questions on usage, comfort, and frustration
                                </td>
                                <td className="border px-4 py-2">Google Forms</td>
                                <td className="border px-4 py-2">5–7 minutes</td>
                            </tr>

                            <tr>
                                <td className="border px-4 py-2 font-medium">Observations</td>
                                <td className="border px-4 py-2">11</td>
                                <td className="border px-4 py-2">
                                    Behavioral focus: scanning, bagging, errors, waiting time, staff interaction
                                </td>
                                <td className="border px-4 py-2">Observation template, Field notes</td>
                                <td className="border px-4 py-2">10–15 minutes</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
        </section>

        <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen mt-10 mb-8" />
         <section className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-3">
                <u>Research Analysis</u>
            </h2>
            <p className="leading-7">
                This research analysis synthesizes findings from interviews, surveys, and field observations to
                uncover both behavioral patterns and measurable usability issues in self-checkout machines.
                Qualitative insights reveal users’ emotions, frustrations, and coping strategies, while
                quantitative data highlights recurring pain points and efficiency breakdowns across the checkout
                process.
                </p>
        </section>

        <section className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                {/* LEFT: Qualitative */}
                <div className="flex flex-col gap-6">
                    <h3 className="text-xl font-semibold">
                        Qualitative Insights
                    </h3>
                    <p className="leading-7">
                        Qualitative data from interviews and observations was analyzed using affinity mapping to
                        identify recurring themes related to user emotions, behaviors, and environmental factors.
                        These insights helped explain why certain breakdowns occurred during the self-checkout
                        process and how users emotionally responded to them.
                    </p>    
                    {/* Links */}
                    <div className="flex flex-col gap-3">
                        <a
                            href="https://miro.com/app/board/uXjVJwj0Iug=/"
                            className="text-blue-600 dark:text-blue-400 underline"
                        >
                            View Interview Affinity Map
                        </a>
                        <a
                            href="https://miro.com/app/board/uXjVJwArld4=/"
                            className="text-blue-600 dark:text-blue-400 underline"
                        >
                            View Observation Affinity Map
                        </a>
                    </div>
                </div>

                {/* RIGHT: Quantitative */}
                <div className="flex flex-col gap-6">
                    <h3 className="text-xl font-semibold">
                        Quantitative Findings
                    </h3>

                    <p className="leading-7">
                        Survey responses and observational timing data revealed consistent usability issues across
                        participants, particularly related to bagging, scanning, and staff assistance. These
                        measurable trends helped validate and strengthen the qualitative findings.
                    </p>

                    {/* Images / Charts */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Image
                            src="/img/numberOfItems.png"
                            alt="Survey results showing bagging-related frustration"
                            width={300}
                            height={200}
                            className="rounded-lg border cursor-pointer hover:scale-105 transition"
                            onClick={() => setZoomedImage("/img/numberOfItems.png")}
                        />
                        <Image
                            src="/img/timeSpent.png"
                            alt="Average checkout time per user"
                            width={300}
                            height={200}
                            className="rounded-lg border cursor-pointer hover:scale-105 transition"
                            onClick={() => setZoomedImage("/img/timeSpent.png")}
                        />
                    </div>
                </div>
            </div>
        </section>

        <section className="mt-12 max-w-4xl">
            <h3 className="text-xl font-semibold mb-3">
                Key Findings
            </h3>
            <p className="leading-7">
                Across interviews, surveys, and observations, issues related to the bagging area emerged as the
                most significant pain point, including overly sensitive weight sensors, limited space, and
                workflow interruptions. The need for staff assistance was another major challenge, often
                creating pressure and frustration when help was slow or difficult to access. Additional
                findings highlighted problems with scanning accuracy, unclear screen interfaces, and the
                influence of environmental factors such as noise, crowding, and time pressure on user comfort
                and efficiency.
            </p>
        </section>

        {/* User Persona & Empathy Map Section */}
        <section className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                {/* LEFT: User Persona */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-semibold">User Persona</h3>
                    <p className="leading-7">
                        The user persona represents a key self-checkout user type, capturing their goals, behaviors, and frustrations 
                        to guide design decisions.
                    </p>
                    <Image
                        src="/img/userPersona.png"
                        alt="User Persona"
                        width={400}
                        height={300}
                        className="rounded-lg shadow-md"
                        onClick={() => setZoomedImage("/img/userPersona.png")}
                    />
                </div>

                {/* RIGHT: Empathy Map */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-semibold">Empathy Map</h3>
                    <p className="leading-7">
                        The empathy map visualizes what users think, feel, say, and do while using self-checkout machines, helping 
                        uncover emotional pain points and unmet needs.
                    </p>
                    <Image
                        src="/img/empathyMap.png"
                        alt="Empathy Map"
                        width={400}
                        height={300}
                        className="rounded-lg shadow-md"
                        onClick={() => setZoomedImage("/img/empathyMap.png")}
                    />
                </div>

            </div>
        </section>

        <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen mt-10 mb-8" />
            <section className="max-w-6xl mx-auto text-center">
                <h2 className="text-2xl font-bold mb-3">
                    <u>Needs Statement</u>
                </h2>
                <p className="leading-7">
                    Based on our research and analysis, we identified key user needs to guide the redesign of the self-checkout experience:
                </p>
                <ul className="list-disc list-inside text-left space-y-3 mx-auto">
                    <li>Sally needs a clear understanding of each step in the checkout process so she can complete her shopping confidently without confusion or rush.</li>
                    <li>Sally needs easy access to assistance when issues arise so she doesn’t feel anxious or stuck if the system malfunctions.</li>
                    <li>Sally needs a comfortable way to organize and bag her items so she can work at her own pace without pressure from others waiting.</li>
                    <li>Sally needs calm, reassuring feedback from the machine so she knows her actions are registered correctly and avoids second-guessing herself.</li>
                    <li>Sally needs a more intuitive and consistent interface so she can rely on familiar layouts and avoid unnecessary frustration when using machines across different stores.</li>
                </ul>
            </section>

        <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen mt-10 mb-8" />
            <section className="max-w-6xl mx-auto text-center">
                <h2 className="text-2xl font-bold mb-3">
                    <u>Ideation and Prioritization Grid</u>
                </h2>
                <p className="leading-7">
                    
                </p>

            </section>


        
        {/* ZOOM MODAL */}
        {zoomedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-20"
            onClick={() => setZoomedImage(null)}
          >
            <div className="relative w-full h-full overflow-auto"
             onClick={(e) => e.stopPropagation()} // prevent closing modal when clicking image container
            >
              <button
                className="absolute top-2 right-2 text-white text-3xl font-bold z-50"
                onClick={() => setZoomedImage(null)}
              >
                ×
              </button>

              <Image
                src={zoomedImage}
                alt="Zoomed image"
                width={1200}
                height={800}
                className="rounded-lg shadow-xl mx-auto"
                style={{
                    width: "100%",
                    height: "auto",
                    cursor: "grab",
                }}
              />
            </div>
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
}
