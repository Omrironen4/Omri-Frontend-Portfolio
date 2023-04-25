import React from "react";
import Head from "next/head";
import { useState } from "react";
import Intro from "./Intro.js";
import Projects from "./Projects.js";
import Link from "next/link";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  function toggleMoon() {
    document.getElementById("moon").style.display = "block";
    document.getElementById("sun").style.display = "none";
  }

  function toggleSun() {
    document.getElementById("moon").style.display = "none";
    document.getElementById("sun").style.display = "block";
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <Intro toggleMoon={toggleMoon} toggleSun={toggleSun} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Projects />

        
      </main>
    </div>
  );
}
