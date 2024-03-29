import React from "react";
import Head from "next/head";
import Image from "next/image";
import makebuy from "../public/makebuy.png";
import Taskify from "../public/Taskify.png"


const Projects = () => {
  return (
    <section>
      <div>
        <h3 className="  text-3xl py-1 dark:text-white ">Projects:</h3>

        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          Scroll through my projects and click to view.
        </p>
        {/* Make it Buy it App */}
      </div>
      <div className="lg:flex gap-10">
        <div className="borderLight text-center p-5 rounded-xl my-10 border-4 border-cyan-400 dark:border-0d9488 dark:bg-gray-800 flex-1 hover:transform duration-500 hover:scale-105">
          <a
            href={"https://omrironen4.github.io/Make-it-Buy-it/makeit.html"}
            target={"_blank"}
            rel="noreferrer"
          >
            <Image
              priority
              src={makebuy}
              alt="project image"
              className="rounded"
              style={"width: 1em; height: 1em"}
            />
          </a>

          <u className="text-teal-600">
            <h1
              style={{ fontSize: "2em" }}
              className=" body-font text-teal-600  "
            >
              Make/Buy
            </h1>
          </u>
          <h3 style={{ fontSize: "1.4em" }} className="body-font text-teal-600">
            Description:
          </h3>
          <p style={{ fontSize: "1em" }} className="body-font text-teal-600">
            Search for recipes to cook, or find restaurants near by.
          </p>
          <h3
            style={{ fontSize: "1.4em" }}
            className=" body-font pt-2 text-teal-600"
          >
            Tech Tools:
          </h3>
          <p style={{ fontSize: "1em" }} className=" text-teal-600">
            {" "}
            JavaScript, HTML, CSS, Spoonacular, Yelp APIS.
          </p>
        </div>
        {/* Taskify */}
        <div className="borderLight text-center p-5 rounded-xl my-10 border-4 border-cyan-400 dark:border-#0d9488 dark:bg-grey-800 flex-1 hover:transform duration-500 hover:scale-105">
          <a
            href={"https://taskify-a76sb3a5t-omrironen4.vercel.app/"}
            target={"_blank"}
            rel="noreferrer"
          >
            <Image
              priority
              src={Taskify}
              alt="project image"
              className="rounded"
              style={{ width: "1em", height: "1em" }}
            />
          </a>

          <u className="text-teal-600">
            <h1
              style={{ fontSize: "2em" }}
              className=" body-font text-teal-600  "
            >
              Taskify
            </h1>
          </u>
          <h3 style={{ fontSize: "1.4em" }} className="body-font text-teal-600">
            Description:
          </h3>
          <p style={{ fontSize: "1em" }} className="body-font text-teal-600">
            Create a task, mark it as complete, edit it, and move it around!
          </p>
          <h3
            style={{ fontSize: "1.4em" }}
            className=" body-font pt-2 text-teal-600"
          >
            Tech Tools:
          </h3>
          <p style={{ fontSize: "1em" }} className=" text-teal-600">
            {" "}
            React, TypeScript, DragnDrop npm package, Css.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
