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
    title: "Project 1",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero mollitia sit architecto, totam odit provident.",
    stack: [{name: "HTML 5"}, {name: "CSS 3"}, {name: "Bootstrap"}],
    image: "",
    live: "",
    github: ""
  },
]

const work = () => {
  return (
    <div>Work Page</div>
  )
}

export default work