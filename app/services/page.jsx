"use client";

import { BsArrowDownRight } from 'react-icons/bs';
import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
  {
    num: '01',
    title: "Front-End Development",
    description: "Design Sleek & Eye-Catching Websites By Using Cutting Edge Technologies Like React & NextJs.",
    href: "https://frontend-blog-web.vercel.app/"
  },
  {
    num: '02',
    title: "Responsive Web Design",
    description: "Creating mobile-friendly, responsive websites that adapt to all screen sizes and devices.",
    href: "https://my-responsive-landing-page.vercel.app/"
  },
  {
    num: '03',
    title: "Animations & Interactivityt",
    description: "Adding dynamic elements and interactivity using CSS, JavaScript, or libraries like Framer Motion to engage users.",
    href: "https://spacex-portfolio-eight.vercel.app/"
  },
  {
    num: '04',
    title: "Version Control and Collaboration (Git)",
    description: "Implementing version control using Git, collaborating with teams via platforms like GitHub or GitLab, and managing deployment pipelines.",
    href: "https://github.com/Mirxa-Rafay-25"
  },
 
  // {
  //   num: '05',
  //   title: "Authentication System Implementation",
  //   description: "Set up secure, user-friendly authentication systems in SPAs, including features like social logins, token-based authentication, and password recovery.",
  //   href: ""
  // },
  // {
  //   num: '06',
  //   title: "Single-Page Application (SPA) Development",
  //   description: "Create websites that load a single HTML page and update content dynamically, providing a more fluid user interface.",
  //   href: ""
  // },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 lg:py-0">
      <div className="container mx-auto py-16">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' } }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outine text-transparent group-hover:text-outine-hover transition-all duration-500">{service.num}</div>
                  <Link href={service.href} target="_blank" rel="noopener noreferrer" className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
  <BsArrowDownRight className="text-primary text-3xl" />
</Link>

                </div>
                 {/* title */}
                 <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
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
