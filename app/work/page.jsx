"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "Project 2",
    description: "NeXGeN – Stay ahead with the latest in web and app development, tech trends, and programming tips. Designed with simplicity, powered by Bootstrap, and dedicated to keeping you at the forefront of digital innovation." ,
    stack: [{name: "HTML 5"}, {name: "CSS 3"}, {name: "Bootstrap"}],
    image: "/assets/blog.png",
    live: "https://frontend-blog-web.vercel.app/",
    github: "https://github.com/Mirxa-Rafay-25/Frontend-Blog"
  },
  {
    num: "02",
    category: "Frontend & Animation",
    title: "Project 1",
    description: "Venture into the cosmos with our interactive space-themed Next.js website, powered by Framer Motion. Enjoy fluid animations that bring the mysteries of the universe to life, with smooth transitions and dynamic effects that enhance the user experience." ,
    stack: [{name: "Next Js"}, {name: "Framer-Moton"}, {name: "Tailwind CSS"}],
    image: "/assets/spacex.png",
    live: "https://spacex-portfolio-eight.vercel.app/",
    github: "https://github.com/Mirxa-Rafay-25/SpaceX"
  },
  
  {
    num: "03",
    category: "Frontend",
    title: "Project 3",
    description: "Comptaways provide a clean, modern layout featuring clear typography and color accents. Built using HTML, CSS, and JavaScript, the site includes interactive elements and animations to enhance user experience, such as trust ratings and pricing displays. Its responsive design ensures seamless viewing on various devices." ,
    stack: [{name: "HTML 5"}, {name: "CSS 3"}, {name: "JavaScript"}],
    image: "/assets/Responsive-landing-page.png",
    live: "https://my-responsive-landing-page.vercel.app/",
    github: "https://github.com/Mirxa-Rafay-25/Responsive-Landing-Page"
  },
  {
    num: "04",
    category: "Full-Stack",
    title: "Project 4",
    description: "This to-do list application, named iTask allows users to perform basic CRUD (Create, Read, Update, Delete) operations. Users can add new tasks, view existing ones, update task details, and delete completed or unnecessary tasks. The interface is simple and user-friendly, with a clean design featuring an input field and save button to manage tasks efficiently. The layout is responsive and provides a seamless user experience." ,
    stack: [{name: "React"}, {name: "Tailwind"}, {name: "JavaScript"}],
    image: "/assets/Todolist.png",
    live: "https://my-responsive-todo-list.vercel.app/",
    github: "https://github.com/Mirxa-Rafay-25/My-TodolList"
  },
]

const Work = () => {
  const [project, setProjects] = useState(projects[0]);

 const handleSlideChange = (swiper) => {
  // get current slides indexes
  const currentIndex = swiper.activeIndex;
  // update project state based on current slide index 
  setProjects(projects[currentIndex]);
 }

  return <motion.section 
  initial={{ opacity: 0}}
  animate={{opacity: 1, transition: {delay: 2.4, duration:0.4, ease: 'easeIn'}}}
  className="min-h-[80vh] flex flex-col justify-center py-12 lg:px-0"
  >
  <div className="container mx-auto">
    <div className="flex flex-col lg:flex-row lg:gap-[30px] ">
      <div className="w-full lg:w-[50%] lg:h-[460px] flex flex-col lg:justify-between order-2 lg:order-none">
        <div className="flex flex-col gap-[10px] h-[50%]">
          {/* outline num */}
          <div className="text-8xl leading-none font-extrabold text-accent  text-outine">
            {project.num}
            </div>
            {/* project category */}
            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent   transition-all duration-500 capitalize">{project.category} Project 
            </h2>
            <p className="text-white/60 ">{project.description}</p>
            {/* Stack */}
            <ul className="flex gap-6">
              {project.stack.map((item, index)=>{
                return <li key={index} className="text-xl text-accent">{item.name}
                {index !== project.stack.length - 1 && ","}
                </li>
              })}
            </ul>
            {/* Border */}
            <div className="border border-white/20"></div>
            {/* Buttons */}
            <div className="flex items-center gap-4">
              {/* Live project button */}
              <Link href={project.live} target="_blank" rel="noopener noreferrer">
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                    <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Live Project</p>
                    </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              </Link>
               {/* Github project Button */}
              <Link href={project.github} target="_blank" rel="noopener noreferrer">
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                    <BsGithub className="text-white text-3xl group-hover:text-accent" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Github Repository</p>
                    </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              </Link>
            </div>
        </div>
      </div>
      <div className="w-full lg:w-[50%]">
        <Swiper spaceBetween={30}
         slidesPerView={1}
          className="lg:h-[520px] mb-12"
           onSlideChange={handleSlideChange}
           >
          {projects.map((project , index)=>{
            return <SwiperSlide key={index} className="w-full">
              <div className="h-[360px] relative group flex justify-center items-center bg-pink-50/20">
               {/* overlay */}
               <div></div>
               {/* image */}
               <div className="relative w-full h-full">
                <Image
                src={project.image}
                fill
                className="object-cover"
                alt="hello"
                />
               </div>
              </div>
            </SwiperSlide>
          })}
        </Swiper>
        </div> 
    </div>
  </div>
  </motion.section>
}

export default Work;