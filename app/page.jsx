import { Button } from "@/components/BtnPage"
import { FiDownload } from "react-icons/fi"
// Components
import Photo from "@/components/Photo"
import Social from "@/components/Social"
import Stats from "@/components/Stats"
import Link from "next/link"



const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
      <div className="flex flex-col lg:flex-row items-center justify-between lg:pt-8 lg:pb-24">
        {/* text */}
        <div className="text-center lg:text-left order-2 lg:order-none">
          <span className="text-xl text-accent">Web Develpoer</span>
          <div className="h1 mb-6">
          <h1>Hello I`m <br /> <span className="text-accent">Muhammad Rafay</span> </h1>
          </div>
          <p className="max-w-[550px] mb-9 text-white/80">
          I turn your ideas into interactive, high-performing web solutions. As a full stack developer, I create sleek, user-focused designs and powerful backends to deliver results that drive your success.
          </p>
          {/* Btn and socials */}
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <Link href="/web Cv.pdf" download="true">
           <Button  variant="outline" size="lg" className="uppercase flex items-center gap-2">
            <span>Download CV</span>
            <FiDownload className="text-xl " />
           </Button>
           </Link>
           <div className="mb-8 lg:mb-0 ">
            <Social containerStyles="flex gap-6" iconStyles="w-10 h-10 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
           </div>
          </div>
        </div>
        {/* photo */}
        <div className="order-1 lg:order-none mb-8 lg:mb-0">
          <Photo />
        </div>
      </div>
      </div>
      <Stats />
    </section>
  )
}

export default Home
