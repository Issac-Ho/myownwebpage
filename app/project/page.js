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
                Redesigning Self-Checkout to Reduce Stress and Improve Confidence
              </h1>
              <p className="leading-7">
                Self-checkout machines are meant to save time, yet many shoppers leave feeling confused, rushed, or frustrated.

                How might we redesign self-checkout experiences to feel clearer, calmer, and more supportive—especially in 
                high-pressure retail environments?
              </p>
            </section>

            {/* 2. Course Context */}
            <section>
              <p className="leading-7">
                In this project, our team redesigned a self-checkout machine interface using user-centered
                design principles to improve clarity, efficiency, and accessibility. This is a course project for Dr. Olivier St-Cyr’s 
                design course, INF352 - How to Design. The semester-long project was aimed at exploring the iterative design 
                process through practical application.
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
                <p><b>Methodologies:</b> User Research, Journey Mapping, Prototyping, Lean Evaluation</p>
                <p><b>Tools Used:</b> Figma, Miro, Google Workspace</p>
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
            <h3 className="text-xl font-bold mb-3">Why self-checkout fails users</h3>
            <p className=" leading-7">
                Self-checkout is meant to be fast, but unclear instructions, sensitive systems, 
                and constant errors leave users confused and stressed—often requiring staff help.
            </p>
        </section>

        <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen mt-10 mb-8" />
        <section className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-3">
                <u>Solution</u>
            </h2>
            <h3 className="text-xl font-bold mb-3">How we fixed it</h3>
            <p className=" leading-7">
                We redesigned the self-checkout experience around clarity and reassurance, using clear guidance, 
                consistent interactions, and better error recovery to help users check out confidently and independently.
            </p>
        </section>

         <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen mt-10 mb-8" />
         <section className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-3">
                <u>Secondary Research</u>
            </h2>
            <h3 className="text-xl font-bold mb-3">What research already tells us</h3>
            <p className=" leading-7"> 
                Research shows that user satisfaction depends more on experience clarity than advanced technology.Common 
                pain points include sensitive scales, unclear feedback, limited bagging space, and lack of support—reinforcing
                the need for intuitive, accessible design.

            </p>
        </section>

        <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen mt-10 mb-8" />
         <section className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-3">
                <u>Primary Research</u>
            </h2>
            <h3 className="text-xl font-bold mb-3">What users actually experience</h3>
            <p className=" leading-7">
                Through interviews, surveys, and observations, we identified recurring issues with scanning, bagging, and staff dependence.
                These insights revealed emotional stress points that directly informed our design decisions.
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
            <h3 className="text-xl font-bold mb-3">What patterns emerged</h3>
            <p className="leading-7">
                By synthesizing qualitative and quantitative data, we uncovered how stress, uncertainty, and time pressure 
                disrupt checkout flow. These findings highlighted clear opportunities to improve feedback, layout consistency, 
                and error recovery.
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
            <h4 className="text-l font-bold mb-3">What mattered most</h4>
            <ul className="list-disc list-inside text-left space-y-3 mx-auto">
                <li>Bagging area issues caused the most frustration</li>
                <li>Staff reliance increased anxiety and slowed checkout</li>
                <li>Unclear feedback led to hesitation and double-checking</li>
                <li>Environmental pressure amplified usability breakdowns</li>
            </ul>
        </section>

        {/* User Persona & Empathy Map Section */}
        <section className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                {/* LEFT: User Persona */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-semibold">User Persona</h3>
                    <h4 className="text-l font-bold mb-3">Who we designed for</h4>
                    <p className="leading-7">
                        A representative self-checkout user balancing speed, accuracy, and social pressure while shopping independently.
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
                    <h4 className="text-l font-bold mb-3">How users feel</h4>
                    <p className="leading-7">
                        Users start anxious, feel relief with clear guidance, and become stressed again when space or errors interrupt flow.
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
                <h3 className="text-xl font-bold mb-3">What users need</h3>
                <p className="leading-7">
                    Users need clear steps, easy recovery from errors, visible help options, and enough space to work confidently at their own pace.
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
                <h3 className="text-xl font-bold mb-3">How we chose what to design</h3>
                <p className="leading-7">
                    We generated multiple concepts, then prioritized solutions based on user impact and feasibility.
                    This ensured we focused on changes that meaningfully reduced confusion and stress.
                </p>
            </section>

            <div className="flex flex-col gap-3 text-center mt-6">
                <a
                    href="https://miro.com/app/board/uXjVJgYWgvo=/"
                    className="text-blue-600 dark:text-blue-400 underline"
                >
                    View Prioritization Grid
                </a>
            </div>

        {/* To-Be Scenario */}
        <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen mt-10 mb-8" />
            <section className="max-w-6xl mx-auto text-center">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    <u>To-Be Scenario</u>
                </h2>
                <h3 className="text-xl font-bold mb-3">What the improved experience looks like</h3>
                <p className="text-center leading-7 max-w-3xl mx-auto mb-10">
                    The redesigned journey supports users through approach, scanning, payment, and bagging with clear cues, 
                    flexible pacing, and reassuring feedback.
                </p>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                    {[
                        { title: "Approach", desc: "User selects self-checkout with confidence" },
                        { title: "Scan", desc: "Items are scanned quickly and accurately" },
                        { title: "Pay", desc: "Payment is flexible and stress-free" },
                        { title: "Bag", desc: "User bags items comfortably at their own pace" },
                    ].map((step) => (
                        <div
                            key={step.title}
                            className="border rounded-xl p-5 text-center shadow-sm bg-gray-50 dark:bg-gray-800"
                        >
                            <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                            <p className="text-sm leading-6">{step.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Experience Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* Doing */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">🎬 Doing</h3>
                        <ul className="list-disc list-inside space-y-2 text-sm leading-6">
                            <li>Starts checkout and places basket on counter</li>
                            <li>Scans items automatically or selects produce easily</li>
                            <li>Removes items without staff assistance</li>
                            <li>Selects cash payment and completes transaction</li>
                            <li>Bags items after payment with clear confirmation</li>
                        </ul>
                    </div>

                    {/* Thinking */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">💬 Thinking</h3>
                        <ul className="list-disc list-inside space-y-2 text-sm leading-6">
                            <li>This machine feels easy to use</li>
                            <li>I can always ask for help if needed</li>
                            <li>The icons and layout are clear</li>
                            <li>I’m moving at a reasonable pace</li>
                            <li>I feel confident everything scanned correctly</li>
                        </ul>
                    </div>

                    {/* Feeling */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">❤️ Feeling</h3>
                        <ul className="list-disc list-inside space-y-2 text-sm leading-6">
                            <li>Slightly anxious at first</li>
                            <li>Relieved during scanning and payment</li>
                            <li>Focused while organizing items</li>
                            <li>Momentarily rushed when others wait</li>
                            <li>Satisfied and confident when leaving</li>
                        </ul>
                    </div>
                </div>
            </section>

        <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen mt-10 mb-8" />
            <section className="max-w-6xl mx-auto text-center">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    <u>Prototypes</u>
                </h2>
                <h3 className="text-xl font-bold mb-3">How the design evolved</h3>
                <p className="text-center leading-7 max-w-3xl mx-auto mb-8">
                    Low-fidelity sketches validated flow and structure.
                    Medium-fidelity prototypes refined hierarchy, feedback, and interactions based on user evaluation.
                </p>

                {/* LOW-FIDELITY PROTOTYPE */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-3">Low-Fidelity Prototype</h3>
                    <p className="text-center leading-7 max-w-3xl mx-auto mb-10">
                        Early sketches allowed us to quickly test assumptions about task flow before committing to visual detail.
                    </p>

                    {/* Sequential images */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {[
                            "/img/sketch1.png",
                            "/img/sketch2.png",
                            "/img/sketch3.png",
                            "/img/sketch4.png",
                            "/img/sketch5.png",
                            "/img/sketch6.png",
                            "/img/sketch7.png",
                         ].map((src, index) => (
                            <div key={index} className="flex flex-col items-center gap-2">
                                <Image
                                    src={src}
                                    alt={`Low-fidelity screen ${index + 1}`}
                                    width={260}
                                    height={200}
                                    className="rounded-lg border shadow-sm cursor-pointer hover:scale-105 transition"
                                    onClick={() => setZoomedImage(src)}
                                />
                                <span className="text-xs text-gray-500">
                                    Step {index + 1}
                                 </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Lean Evaluation */}
                <section className="max-w-6xl mx-auto text-center mb-8">
                    <h3 className="text-xl font-semibold mb-3">Lean Evaluation</h3>

                    <p className="text-center leading-7 max-w-3xl mx-auto mb-10">
                        Lean evaluation validated the overall checkout flow while revealing gaps in real-world clarity, particularly 
                        around scanning, weighing, cash insertion, and error recovery. Based on this feedback, the medium-fidelity 
                        prototype introduced clearer visual signifiers, stronger confirmation feedback, persistent navigation and 
                        help options, and improved guidance between scanning and produce selection to reduce user anxiety.
                    </p>
                </section>

                {/* MID-FIDELITY PROTOTYPE */}
                <div>
                    <h3 className="text-xl font-semibold mb-3">Medium-Fidelity Prototype</h3>
                    <p className="text-center leading-7 max-w-3xl mx-auto mb-10">
                        Based on evaluation feedback, the medium-fidelity prototype refined layout, hierarchy, 
                        and signifiers to address moments of hesitation and confusion.

                    </p>

                    {/* Figma Link */}
                    <div className="mb-8">
                        <a
                            href="https://www.figma.com/proto/aTDEtXzwHO074GgOAw1RzE/Self-checkout-Machine?node-id=0-1&t=WzU1oqDMuF3vFeVY-1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-blue-600 dark:text-blue-400 underline font-medium"
                        >
                        View Medium-Fidelity Prototype in Figma →
                        </a>
                    </div>

                    {/* Sequential images */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {[
                            "/img/figma1.png",
                            "/img/figma2.png",
                            "/img/figma3.png",
                            "/img/figma4.png",
                            "/img/figma5.png",
                            "/img/figma6.png",
                            "/img/figma7.png",
                            "/img/figma8.png",
                            "/img/figma9.png",
                        ].map((src, index) => (
                            <div key={index} className="flex flex-col items-center gap-2">
                                <Image
                                    src={src}
                                    alt={`Medium-fidelity screen ${index + 1}`}
                                    width={260}
                                    height={200}
                                    className="rounded-lg border shadow-sm cursor-pointer hover:scale-105 transition"
                                    onClick={() => setZoomedImage(src)}
                                />
                                <span className="text-xs text-gray-500">
                                Step {index + 1}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto text-center mb-8">
                    <h3 className="text-xl font-semibold mb-3">Usability Testing</h3>
                    <h4 className="text-l font-bold mb-3">What worked—and what didn’t</h4>
                    <p className="text-center leading-7 max-w-3xl mx-auto mb-10">
                        Testing confirmed the flow felt intuitive and calming.
                        Key improvements were identified around labeling, weighing cues, button affordances, and accessibility.
                    </p>
            </section>

            <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen mt-10 mb-8" />
            <section className="max-w-6xl mx-auto text-center">
                <h2 className="text-2xl font-bold mb-3">
                    <u>Lessons Learned</u>
                </h2>
                <h3 className="text-xl font-bold mb-3">What this project taught me</h3>
                <p className="leading-7">
                    I learned how to translate user emotions—stress, hesitation, urgency—into concrete interaction design decisions.
                    I can now confidently design complex physical-digital systems using research-driven iteration.
                </p>
            </section>

            <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen mt-10 mb-8" />
            <section className="max-w-6xl mx-auto text-center">
                <h2 className="text-2xl font-bold mb-3">
                    <u>Moving Forward</u>
                </h2>
                <h3 className="text-xl font-bold mb-3">What comes next</h3>
                <p className="leading-7">
                    Future work includes broader accessibility testing, multilingual support, 
                    and higher-fidelity validation in real retail environments.
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
                className="absolute top-2 right-2 text-black text-3xl font-bold z-50"
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
