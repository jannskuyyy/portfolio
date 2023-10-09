import React from "react";
import { GrInstagram, GrGithub, GrLinkedin } from "react-icons/gr";
import { TfiHtml5 } from "react-icons/tfi";
import { IoLogoCss3, IoLogoReact } from "react-icons/io5";
import {
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiMysql,
} from "react-icons/si";

const App = () => {
  return (
    <div className="bg-gray-900 px-10">
      <section className="relative min-h-screen text-white">
        {/* Navbar */}
        <nav className="fixed left-0 right-0 top-0 bg-gray-900">
          <div className="flex justify-center">
            <ul className="p-5">
              <li>
                <a
                  className="px-4 py-2 hover:text-lg hover:text-cyan-500"
                  href="#about"
                >
                  About
                </a>
                <a
                  className="px-4 py-2 hover:text-lg hover:text-cyan-500"
                  href="#contact"
                >
                  Contact
                </a>
                <a
                  className="px-4 py-2 hover:text-lg hover:text-cyan-500"
                  href="#skill"
                >
                  Skills
                </a>
                <a
                  className="px-4 py-2 hover:text-lg hover:text-cyan-500"
                  href="#project"
                >
                  My work
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* About */}
        <div className="text-center pt-24 p-10 py-10">
          <h2
            id="about"
            className="text-5xl py-2 bg-gradient-to-r from-cyan-500 to-teal-500 inline-block text-transparent bg-clip-text font-medium pt-20"
          >
            Putra Januard Setiawan
          </h2>
          <h3 className="text-2xl py-2">Fullstack web developer</h3>
          <p className="text-md pt-5 leading-8 text-gray-300">
            I am a junior fullstack web developer who loves code and music.
            <br />
            Contact me below!
          </p>
          <div className="mx-auto flex justify-center bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 overflow-hidden mt-10">
            <img src="./shooo.png" alt="" />
          </div>
          <div
            id="contact"
            className="pt-20 text-3xl py-2 bg-gradient-to-r from-cyan-500 to-teal-500 inline-block text-transparent bg-clip-text font-medium"
          >
            Contact me!
          </div>
          <div className="text-3xl flex justify-center gap-10 py-5 text-white dark:text-gray-400">
            <a
              href="https://www.instagram.com/putrajan21/"
              className="p-2 rounded-full hover:bg-cyan-600"
            >
              <GrInstagram />
            </a>
            <a
              href="https://github.com/jannskuyyy"
              className="p-2 rounded-full hover:bg-cyan-600"
            >
              <GrGithub />
            </a>
            <a href="" className="p-2 rounded-full hover:bg-cyan-600">
              <GrLinkedin />
            </a>
          </div>
        </div>

        {/* Skills */}
        <div id="skill" className="text-center py-10 pt-20">
          <div className="text-3xl py-2 bg-gradient-to-r from-cyan-500 to-teal-500 inline-block text-transparent bg-clip-text font-medium">
            Skill
          </div>
          <div className="text-3xl flex justify-center flex-wrap gap-10 py-5 text-white dark:text-gray-400">
            <p>
              <TfiHtml5 />
            </p>
            <p>
              <IoLogoCss3 />
            </p>
            <p>
              <SiTailwindcss />
            </p>
            <p>
              <SiJavascript />
            </p>
            <p>
              <IoLogoReact />
            </p>
            <p>
              <SiNodedotjs />
            </p>
            <p>
              <SiMysql />
            </p>
          </div>
        </div>

        {/* Project */}
        <div id="project" className="text-center py-10 pt-20">
          <h1 className="text-3xl py-2 bg-gradient-to-r from-cyan-500 to-teal-500 inline-block text-transparent bg-clip-text font-medium">
            Project
          </h1>
          <div className="grid grid-cols-2">
            <div>
              <h2 className="text-2xl font-serif bg-gradient-to-r from-cyan-600 to-teal-600 inline-block px-5 rounded-full">
                Attendify
              </h2>
              <p className="text-sm">
                Attendify is a management application with role-based
                authorization, which also has role-based functionality.
                Basically Attendify is a simple CRUD application with the main
                purpose of being an activity management and monitoring tool.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-serif bg-gradient-to-r from-cyan-600 to-teal-600 inline-block px-5 rounded-full">
                CRUD database
              </h2>
              <p className="text-sm">
                A simple website to input, read, update, and delete data.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-5">
            <img src="./attendify.png" alt="" />
            <img src="./crud.png" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
