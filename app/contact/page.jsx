"use client"

import { Button } from "@/components/BtnPage";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger,SelectValue } from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "phone",
    description: "(+92) 324 8356 101"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "mirxarafay25@gmail.com"
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Block-X, Madina Town, Faisalabad, Pakistan"
  },
]

import { motion } from "framer-motion";

const contact = () => {
  return (
    <motion.section  initial={{ opacity: 0}}
    animate={{
      opacity: 1,
       transition: {delay: 2.4, duration:0.4, ease: 'easeIn'}
       }}
       className="py-6"
       >
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-[30px]">
            {/* form */}
            <div className="lg:w-[54%] order-2 lg:order-none">
              <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl font-bold text-accent">Let`s Work Together</h3>
              <p className="text-white/60">Ready to turn your ideas into reality? Whether you need a custom website, an interactive web application, or modern solutions to elevate your brand, I’m here to help. Let’s collaborate and create something extraordinary!</p>
              {/* input */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Input type="FirstName" placeholder="Enter your FirstName" />
                <Input type="LastName" placeholder="Enter your LastName" />
                <Input type="Email" placeholder="Enter your email" />
                <Input type="Phone" placeholder="Enter your phone number" />
              </div>
                  {/* select */}
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a Service" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select a Service</SelectLabel>
                  <SelectItem value="est">Frontend Development</SelectItem>
                  <SelectItem value="cst">Responsive Websites</SelectItem>
                  <SelectItem value="mst">Animated Websites</SelectItem>
                  <SelectItem value="fst">Full-Stack Websites</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {/* textarea */}
            <Textarea className="h-[200px]" placeholder="Type Your Queries Here" />
            {/* btn */}
            <Button size="md" variant="outline" className="flex items-center gap-2 max-w-100">Send Message</Button>
              </form>
            </div>
            {/* info */}
            <div className="flex-1 flex items-center lg:justify-end order-1 lg:order-none mb-8 lg:mb-0">
              <ul className="flex flex-col gap-10">
                {info.map((item, index)=>{
                  return <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] lg:w-[72px] lg:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                })}
              </ul>
            </div>
          </div>
        </div>
        </motion.section>
  )
}

export default contact