"use client";  // Ensure this is at the top

import { useState } from 'react';  // Import useState
import { Button } from "@/components/BtnPage";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import toast from "react-hot-toast";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  { icon: <FaPhoneAlt />, title: "phone", description: "(+92) 324 8356 101" },
  { icon: <FaEnvelope />, title: "Email", description: "mirxarafay25@gmail.com" },
  { icon: <FaMapMarkerAlt />, title: "Address", description: "Block-X, Madina Town, Faisalabad, Pakistan" }
];

const Contact = () => {  // Updated name to PascalCase
  const [selectedService, setSelectedService] = useState("");  // State for selected service

  const handleServiceChange = (value) => {
    setSelectedService(value);
    console.log("Selected Service:", value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f58ff923-62f7-4baa-8b9b-1636b972fcdf");
    formData.append("Service", selectedService);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      event.target.reset();
      toast.success("Form submitted successfully");
    } else {
      toast.error("Failed to submit form");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-[30px]">
          <div className="lg:w-[54%] order-2 lg:order-none">
            <form onSubmit={onSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl font-bold text-accent">Let`s Work Together</h3>
              <p className="text-white/60">
                Ready to turn your ideas into reality? Whether you need a custom website, an
                interactive web application, or modern solutions to elevate your brand, I’m here to
                help. Let’s collaborate and create something extraordinary!
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Input type="text" name="FirstName" placeholder="Enter your FirstName" />
                <Input type="text" name="LastName" placeholder="Enter your LastName" />
                <Input type="email" name="Email" placeholder="Enter your email" />
                <Input type="tel" name="Phone" placeholder="Enter your phone number" />
              </div>
              <Select onValueChange={handleServiceChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value="Frontend Development">Frontend Development</SelectItem>
                    <SelectItem value="Responsive Websites">Responsive Websites</SelectItem>
                    <SelectItem value="Animated Websites">Animated Websites</SelectItem>
                    <SelectItem value="Full-Stack Websites">Full-Stack Websites</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea className="h-[200px]" name="Message" placeholder="Type Your Queries Here" />
              <Button type="submit" size="md" variant="outline" className="flex items-center gap-2 max-w-100">
                Send Message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center lg:justify-end order-1 lg:order-none mb-8 lg:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] lg:w-[72px] lg:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;  // Ensure PascalCase and default export
