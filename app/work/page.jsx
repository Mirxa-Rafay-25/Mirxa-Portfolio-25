"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Ecommerce",
    title: "Project 1",
    description: "AURA is a sleek multi-vendor e-commerce marketplace, enabling users to explore, compare, and shop across various brands with ease. This project highlights Muhammad Rafay's skill in creating user-friendly, high-functionality websites." ,
    stack: [{name: "Next Js"}, {name: "MongoDB"}, {name: "Node Js"}],
    image: "/assets/AURA Marketplace.png",
    live: "https://my-responsive-todo-list.vercel.app/",
    github: "https://github.com/codewithmudassar/project-ecommerce"
  },
  
  {
    num: "02",
    category: "Animated",
    title: "Project 2",
    description: "Venture into the cosmos with our interactive space-themed Next.js website, powered by Framer Motion. Enjoy fluid animations that bring the mysteries of the universe to life, with smooth transitions and dynamic effects ." ,
    stack: [{name: "Next Js"}, {name: "Framer-Moton"}, {name: "Tailwind CSS"}],
    image: "/assets/spacex.png",
    live: "https://spacex-portfolio-eight.vercel.app/",
    github: "https://github.com/Mirxa-Rafay-25/SpaceX"
  },
  {
    num: "03",
    category: "Restaurant",
    title: "Project 3",
    description: "Al-Tastehub is a sleek, user-friendly restaurant website, showcasing a curated menu, exclusive deals, and easy online reservations. Designed for a seamless dining experience, it invites users to explore and savor every detail." ,
    stack: [{name: "Next Js"}, {name: "MongoDB"}, {name: "Node Js"}],
    image: "/assets/Al-Tastehub.png",
    live: "https://al-tastehubfinal.vercel.app/",
    github: "https://github.com/Mubisherali/restourent"
  },
  
  {
    num: "04",
    category: "Frontend",
    title: "Project 4",
    description: "Comptaways provide a clean, modern layout featuring clear typography and color accents. Built using HTML, CSS, and JavaScript, the site includes interactive elements and animations to enhance user experience." ,
    stack: [{name: "HTML 5"}, {name: "CSS 3"}, {name: "JavaScript"}],
    image: "/assets/Responsive-landing-page.png",
    live: "https://my-responsive-landing-page.vercel.app/",
    github: "https://github.com/Mirxa-Rafay-25/Responsive-Landing-Page"
  },
  
 
  {
    num: "05",
    category: "Frontend",
    title: "Project 5",
    description: "NeXGeN – Stay ahead with the latest in web and app development, tech trends, and programming tips. Designed with simplicity, powered by Bootstrap, and dedicated to keeping you at the forefront of digital innovation." ,
    stack: [{name: "HTML 5"}, {name: "CSS 3"}, {name: "Bootstrap"}],
    image: "/assets/blog.png",
    live: "https://frontend-blog-web.vercel.app/",
    github: "https://github.com/Mirxa-Rafay-25/Frontend-Blog"
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
                className="object-fill"
                alt="hello"
                />
               </div>
              </div>
            </SwiperSlide>
          })}
          {/* slider button */}
          <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] lg:bottom-24 z-20 w-full justify-between lg:w-max lg:justify-none"
          btnStyles="bg-accent hover:bg-black hover:text-accent text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
          />
        </Swiper>
        </div> 
    </div>
  </div>
  </motion.section>
}

export default Work;