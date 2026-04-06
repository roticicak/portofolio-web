import dash from "./assets/dashboard.png";
import cashier from "./assets/cashier.png";
import chart from "./assets/chart.png";
import React, { useState } from "react";
import profile from "./assets/profile.jpg";

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Angkringan Jo POS System (Web-Based Cashier & Analytics App)",
      desc: "A web-based Point of Sale (POS) system designed for small food businesses like angkringan. This application allows cashiers to manage transactions, track sales, and generate business insights such as best-selling products and cashier performance.",
      tech: ["React.js", "Tailwind CSS", "React Router DOM"],
      demo: "https://pos-angkringan.vercel.app/",
      github: "https://github.com/roticicak/pos-angkringan",
      detail:
        "This system helps manage transactions, track sales, and generate reports with a user-friendly dashboard.",
    },
    {
      title: "Inventory System",
      desc: "Stock tracking and product management system",
      tech: ["PHP", "MySQL"],
      demo: "#",
      github: "#",
      detail:
        "Designed to monitor stock levels, manage products, and reduce inventory errors.",
    },
    {
      title: "Sales Dashboard",
      desc: "Data visualization for sales performance analysis",
      tech: ["Excel", "SQL"],
      demo: "#",
      github: "#",
      detail:
        "Provides insights into sales trends, top products, and monthly performance.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="fixed w-full bg-gray-900 border-b border-gray-700 p-4 z-50">
        <div className="max-w-6xl mx-auto flex justify-between">
          <span className="font-bold">Steven</span>
          <div className="space-x-4 text-sm">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <div className="pt-24 p-6 max-w-6xl mx-auto">
        {/* Hero */}
        <section className="mb-16 flex items-center gap-6">
           <img src={profile} alt="profile" className="w-40 h-40 object-cover rounded-xl" />
          <div>
            <h1 className="text-4xl font-bold">Steven Samuel</h1>
            <p className="text-gray-400">Web Developer | Data</p>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">About</h2>
          <p className="text-gray-400 max-w-xl">
            I am an Information Systems student focused on building web applications and data-driven dashboards to solve real-world problems. I have experience developing systems like POS, inventory management, and analytics dashboards, with an emphasis on clean design and usability.

I combine web development, data analysis, and UI/UX to create practical and user-friendly solutions, and I continuously improve my skills to deliver better digital products.
          </p>
        </section>

        {/* Projects */}
        <section id="projects" className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <div
                key={i}
                onClick={() => setSelectedProject(p)}
                className="p-6 bg-gray-800 rounded-2xl cursor-pointer hover:scale-105 transition"
              >
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-gray-400 mb-3">{p.desc}</p>
                <div className="mt-4 flex gap-3">
  <a 
    href={p.demo} 
    target="_blank"
    className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition shadow"
  >
    Live Demo
  </a>

  <a 
    href={p.github} 
    target="_blank"
    className="border border-gray-600 px-4 py-2 rounded-lg hover:bg-gray-700 transition"
  >
    GitHub
  </a>
</div>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t, i) => (
                    <span key={i} className="text-xs bg-gray-700 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <div className="space-y-4 text-gray-400">
            <p>
              <strong>Freelance Web Developer</strong> – Built web-based systems
              including POS, inventory, and dashboards for academic and personal
              use.
            </p>
            <p>
              Developed multiple full-stack applications with authentication,
              CRUD operations, and reporting features.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-gray-400">stevensamuelputrabastian@email.com</p>
        </section>
      </div>

      {/* Full Page Detail */}
      {selectedProject && (
        <div className="fixed inset-0 bg-gray-900 z-50 overflow-y-auto p-10">
          <button
            onClick={() => setSelectedProject(null)}
            className="mb-6 text-gray-400"
          >
            ← Back
          </button>

          <h1 className="text-3xl font-bold mb-4">
            {selectedProject.title}
          </h1>

          <p className="text-gray-400 mb-6 max-w-2xl">
            {selectedProject.detail}
          </p>

          <div className="flex gap-4 mb-6">
            <a href={selectedProject.demo} className="bg-white text-black px-4 py-2 rounded">
              Live Demo
            </a>
            <a href={selectedProject.github} className="border px-4 py-2 rounded">
              GitHub
            </a>
          </div>

          <div className="flex gap-2 mb-10">
            {selectedProject.tech.map((t, i) => (
              <span key={i} className="text-xs bg-gray-700 px-2 py-1 rounded">
                {t}
              </span>
            ))}
          </div>

          <div className="bg-gray-800 p-4 rounded-2xl">
            <div className="mt-6 grid md:grid-cols-3 gap-4">
  <img
    src={dash}
    alt="Dashboard"
    className="rounded-xl shadow-lg hover:scale-105 transition"
  />

  <img
    src={cashier}
    alt="Cashier"
    className="rounded-xl shadow-lg hover:scale-105 transition"
  />

  <img
    src={chart}
    alt="Chart"
    className="rounded-xl shadow-lg hover:scale-105 transition"
  />
</div>
          </div>
        </div>
      )}
    </div>
  );
}
