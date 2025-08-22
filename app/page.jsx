import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi"
// comps
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";


function Homepage() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 ">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span>Software Developer</span>
            <h1 className="h1 mb-6">Hi, I'm <br /> 
              <span className="text-accent">
                Yousif Ceballos
              </span> 
            </h1>
            <p className="text-xl max-w-[500px] mb-9 text-white/80">
              Efficient · Learner · User-focused · Versatile · Innovative · Collaborative · Problem solver</p>
            {/*buttons and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0 ">
                <Socials containerStyles="flex gap-6" iconStyles="w-12 h-12 text-xl border border-accent rounded-full flex justify-center
                items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0"><Photo/></div>
        </div>
      </div>
      <Stats/>
    </section >
  )
}
export default Homepage;
