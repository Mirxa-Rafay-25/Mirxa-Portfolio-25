"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Ecommerce Services",
    description:
      "Design Sleek & Eye-Catching Ecommerece Websites By Using Cutting Edge Technologies Like React & NextJs.",
    href: "https://aura-marketplace.vercel.app/",
  },
  {
    num: "02",
    title: "Responsive Web Design",
    description:
      "Creating mobile-friendly, responsive websites that adapt to all screen sizes and devices.",
    href: "https://my-responsive-landing-page.vercel.app/",
  },
  {
    num: "03",
    title: "Animated Websites",
    description:
      "Adding dynamic elements and interactivity using CSS, JavaScript, or libraries like Framer Motion to engage users.",
    href: "https://spacex-portfolio-eight.vercel.app/",
  },
  {
    num: "04",
    title: "Full-Stack Websites",
    description:
      "End-to-end web development solutions, crafting seamless, responsive, and scalable websites with expertise in both frontend and backend technologies.",
    href: "https://al-tastehubfinal.vercel.app/",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 lg:py-0">
      <div className="container mx-auto py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outine text-transparent group-hover:text-outine-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* Description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-accent w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
