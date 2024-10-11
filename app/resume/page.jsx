"use client"

import { FaHtml5, FaCss3, FaJs, FaFigma, FaReact, FaNodeJs } from "react-icons/fa"
import {SiTailwindcss, SiNextdotjs, SiMongodb, SiExpress} from 'react-icons/si'

// about data

const about = {
  title: "About Me",
  description: "I`m Muhammad Rafay, a passionate full-stack web developer dedicated to creating innovative and responsive web solutions. With expertise in the MERN stack, I build seamless, user-centric applications while focusing on clean design and performance. Whether freelancing or teaching aspiring developers, I aim to stay ahead of industry trends and deliver high-quality, impactful digital experiences. Through my brand, Aura, I blend creativity with technology to bring unique visions to life.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Muhammad Rafay"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+92) 324 8356 101"
    },
    {
      fieldName: "Experiernce",
      fieldValue: "1.5 Years"
    },
    {
      fieldName: "Whatsapp",
      fieldValue: "(+92) 324 8356 101"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Pakistani"
    },
    {
      fieldName: "Email",
      fieldValue: "MirxaRafay25@gmail.com"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Languages",
      fieldValue: "Urdu(Native), English"
    },
  ]
}

// experirnce data

const experience = {
  // icon: "/public/assets/resume/badge.svg",
  title: "My Experience",
  description: "As a Freelance Web Developer, I specialize in crafting high-performance, responsive websites, seamlessly blending frontend and backend technologies. My experience as a MERN-Stack Intern sharpened my skills in building scalable applications, while my role as a Brand Ambassador at Edify College of IT allows me to stay connected with the latest industry trends. Additionally, I teach web development on Preply, helping aspiring developers master HTML, CSS, and JavaScript with practical, hands-on learning.",
  items: [
    {
      Company: "Edify College of IT (PVT) LTD",
      Position: "MERN-Stack Intern",
      Duration: "Summer 2024"
    },
    {
      Company: "Edify College of IT (PVT) LTD",
      Position: "Freelance Web Developer",
      Duration: "2024 - Present"
    },
    {
      Company: "Edify College of IT (PVT) LTD",
      Position: "Brand Ambassador",
      Duration: "2024 - Present"
    },
    {
      Company: "Preply",
      Position: "Web-Teacher",
      Duration: "2024 - Present"
    },
    
  ]
};

// Education Data

const education = {
  // icon: "/public/assets/resume/cap.svg",
  title: "My Education",
  description: "I am currently pursuing a BS in Computer Science at NFC-IEFR University, Faisalabad (2023-2027), building a strong foundation in software development and computer systems. In Summer 2024, I will complete a Full-Stack Web Development course at Edify College of IT, honing my skills across the MERN stack. Previously, I completed my Intermediate (2020-2021) at Punjab Group of Colleges and Matriculation (2019) at Allied School, which laid the groundwork for my passion for technology.",
  items: [
     {
      Institution: "Edify College of IT (PVT) LTD",
      Degree: "Full-Stack Web Development",
      Duration: "Summer 2024"
    },
     {
      Institution: "NFC-IEFR University, Faisalabad",
      Degree: "BS Computer Science",
      Duration: "2023- 2027"
    },
     {
      Institution: "Punjab Group of College",
      Degree: "Inter",
      Duration: "2020 - 2021"
    },
    {
      Institution: "Allied School",
      Degree: "Matric",
      Duration: "2019"
    },
   
    
  ]
};

// Skills Data

const skills = {
  title: "My Skills",
  description: "I specialize in full-stack web development, with a strong command of HTML, CSS, JavaScript, and the MERN stack (MongoDB, Express, React, Node.js). My expertise extends to building responsive, user-friendly interfaces and implementing smooth animations using Framer Motion. I’m also proficient in troubleshooting CSS blend modes and optimizing websites for mobile and medium devices, ensuring seamless user experiences across platforms.",
  skillList: [
    {
      icon: <FaHtml5/>,
      name: "HTML 5"
    },
    {
      icon: <FaCss3/>,
      name: "CSS 3"
    },
    {
      icon: <FaJs/>,
      name: "JavaScript"
    },
    {
      icon: <FaReact/>,
      name: "React"
    },
    {
      icon: <FaNodeJs/>,
      name: "Node Js"
    },
    {
      icon: <SiTailwindcss/>,
      name: "Tailwind"
    },
    {
      icon: <FaFigma/>,
      name: "Figma"
    },
    {
      icon: <SiMongodb/>,
      name: "MongoDB"
    },
    {
      icon: <SiExpress/>,
      name: "Express Js"
    },
    {
      icon: <SiNextdotjs/>,
      name: "Next js"
    },
  ]
}

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import {  motion } from "framer-motion";

const resume = () => {
  return (
    <motion.div 
    initial={{opacity: 0}}
     animate={{
      opacity: 1,
       transition: {delay: 2.4, duration: 0.4,ease: 'easeIn'}
      }}
      className="min-h-[100%] flex justify-center items-center py-12 lg:py-0"
      >
        <div className="container mx-auto">
          <Tabs defaultValue="experience" className="flex flex-col  lg:flex-row ">
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto lg:mx-0 gap-[35px]">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="about">About</TabsTrigger>
            </TabsList>

            {/* content */}
            <div className="min-h-[80vh] w-full mt-12 lg:mt-0 lg:ml-12 px-4 sm:px-6">
              {/* Experience */}
              <TabsContent value="experience" className="w-full">
                <div className="flex flex-col gap-8 text-center lg:text-left">
                  <h3 className="text-accent text-4xl font-bold">{experience.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">{experience.description}</p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] mb-5">
                      {experience.items.map((item, index)=>{
                        return <li key={index} className="bg-[#232329] h-[220px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.Duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.Position}</h3>
                          <div className="flex items-center gap-3">
                            {/* Dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.Company}</p>
                          </div>
                        </li>
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              <TabsContent value="education" className="w-full">
                <div className="flex flex-col gap-8 text-center lg:text-left">
                  <h3 className="text-accent text-4xl font-bold">{education.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto mb-7 lg:mx-0">{education.description}</p>
                </div>
                <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] mb-5">
                      {education.items.map((item, index)=>{
                        return <li key={index} className="bg-[#232329] h-[220px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.Duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.Degree}</h3>
                          <div className="flex items-center gap-3">
                            {/* Dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.Institution}</p>
                          </div>
                        </li>
                      })}
                    </ul>
                  </ScrollArea>
              </TabsContent>
              <TabsContent value="skills" className="w-full h-full">
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[30px] text-center lg:text-left">
                    <h3 className="text-4xl text-accent font-bold">{skills.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">{skills.description}</p>
                  </div>
                  <ul className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-4 gap-4 lg:gap-[30px] mb-5">
                    {skills.skillList.map((skill, index)=>{
                      return <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      </li>
                    })}
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="about" className="w-full text-center lg:text-left">
               <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl text-accent font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 max-w-[620px] mx-auto lg:mx-0 mb-5">
                  {about.info.map((item, index)=>{
                    return <li key={index} className="flex justify-center items-center lg:justify-start gap-4">
                      <span className="text-accent">{item.fieldName}</span>
                      <span className="text-xl ">{item.fieldValue}</span>
                    </li>
                  })}
                </ul>
               </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </motion.div>
  )
}

export default resume