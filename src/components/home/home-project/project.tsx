"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { GradientBackground } from "../home-background/gradientBackground";
import { AnimatedRoundedGradient } from "@/components/backgrounds/animated-rounded-gradient/AnimatedRoundedGradient";
import { AnimatedHoverRoundedGradient } from "@/components/backgrounds/animated-rounded-gradient/AnimatedHoverRoundedGradient";

const projectData = [
  {
    title: "Andranoviax - Personal Portfolio",
    description: "Website | Branding",
    imgSrc: "/assets/projects/andranoviax.png",
    width: 700,
    height: 399,
  },
  {
    title: "Bukwush - Discover Book Series",
    description: "Mobile app | UI - UX",
    imgSrc: "/assets/projects/aldo.png",
    width: 670,
    height: 381,
  },
  {
    title: "Project 2",
    description: "Website | School",
    imgSrc: "/assets/test.png",
    width: 508,
    height: 381,
  },
  {
    title: "Project 3",
    description: "Website | School",
    imgSrc: "/assets/test.png",
    width: 608,
    height: 399,
  },
  {
    title: "Project 4",
    description: "Website | School",
    imgSrc: "/assets/test.png",
    width: 608,
    height: 399,
  },
  {
    title: "Project 5",
    description: "Website | School",
    imgSrc: "/assets/test.png",
    width: 508,
    height: 381,
  },
];

const Projects = () => {
  return (
    <div className=" pt-20 justify-center items-center text-white pb-96">
      <p className="text-center font-[600] text-[46px] mb-[100px]">
        Innovation and Creativity at Its Best.
      </p>

      <div className="relative flex flex-col items-center">
        <AnimatedRoundedGradient className="bottom-[calc(50%-var(--size)/2)] left-[calc(35%-var(--size))] animate-first" />
        <AnimatedRoundedGradient className="top-[calc(20%-var(--size)/2)]   right-[calc(35%-var(--size))] animate-first" />
        <div>
          <div className="w-870 h-496 relative">
            <GradientBackground>
              <Image
                src={"/assets/test.png"}
                alt="smkpurwosari"
                width={870}
                height={496}
                className="object-cover"
              />
            </GradientBackground>
          </div>

          <div className="w-full max-w-7xl mt-8 px-4">
            <div className="flex justify-between items-center px-32">
              <div className="flex flex-col">
                <h1 className="font-semibold text-3xl mb-8">
                  SMK Negeri 1 Purwosari
                </h1>
                <p className="font-medium text-lg mb-4">
                  Website <span className="mx-2">|</span> School
                </p>
              </div>

              <div>
                <button
                  type="button"
                  className="border px-9 py-2 rounded-full cursor-hand hover:bg-gray-400"
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 px-[9rem] py-10 mb-[19rem]">
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            className={`flex flex-col items-center ${
              index % 2 === 0 ? "self-start" : "self-end mt-36"
            }`}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div>
              <div
                className={`relative w-${project.width} h-${project.height}`}
              >
                <GradientBackground>
                  <Image
                    src={project.imgSrc}
                    alt={project.title}
                    width={project.width}
                    height={project.height}
                    className="object-cover"
                  />
                </GradientBackground>
              </div>

              <div className="w-full max-w-7xl mt-8">
                <div className="flex justify-between items-center px-9">
                  <div className="flex flex-col">
                    <h1 className="font-semibold text-3xl mb-8">
                      {project.title}
                    </h1>
                    <p className="font-medium text-lg mb-4">
                      {project.description}
                    </p>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="border px-9 py-2 rounded-full cursor-hand hover:bg-gray-400"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <AnimatedRoundedGradient className="top-[calc(10%-var(--size)/2)] right-[calc(90%-var(--size))] animate-second w-[40%] " />
      <AnimatedRoundedGradient className="top-[calc(20%-var(--size)/2)] left-[calc(90%-var(--size))] animate-second w-[50%] " />
      <div className="text-center">
        <h1 className="font-bold text-[54px]">
          Our Creations{" "}
          <span className="underline underline-offset-[13px] opacity-[50%]">
            Go Beyond That!
          </span>{" "}
          <br />
          Discover More.
        </h1>
        <button
          type="button"
          title="serious"
          className="bg-[#101D1F] px-2 py-2 rounded-full mt-7 flex items-center cursor-hand justify-center mx-auto"
        >
          <Link href={"/projects"}>
            <div className="flex items-center cursor-hand">
              <div className="rounded-full bg-[#AAC8CD] mr-4 p-8"></div>
              <h1 className="pl-2 pr-4">SERIOUSLY?</h1>
            </div>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Projects;
