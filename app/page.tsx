import MyExpertise from "@/components/sections/myExpertise";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-neutral-50 flex-col items-center justify-between">
      <section className="relative pt-24 pb-28"> 
        <div className="lg:max-w-6xl md:max-w-xl mx-6">
          <div className="mx-auto grid lg:grid-cols-2 sm:grid-cols-1 gap-20">
            <div className="max-w-full lg:text-left md:text-center sm:text-center sm:justify-center">
              <h1 className="mb-4 lg:text-4xl md:text-3xl text-xl font-bold leading-normal md:leading-tight lg:leading-1">
                I&apos;m&nbsp;
                <span className="px-1 text-red">
                  KIM DARREN
                </span>
                , 
                <br/>
                a Web Developer
                <br/>
                from <span className="px-1 text-sky-500 ">
                  PHILIPPINES
                </span>
              </h1>
              <p className="sm:justify-center md:text-center lg:text-left font-medium mb-12">
              Lacus, adipiscing lectus convallis purus aliquet cursus magnaol montes augue donec cras turpis ultrices 
              </p>
              <div className="flex flex-row items-center">
                <a className="border-[1.5px] border-neutral-800 flex flex-row items-center bg-white text-neutral-800 text-center rounded-2xl py-4 px-4 text-md font-semibold shadow-[7px_7px_0_0] shadow-warning" href="/">
                <FaInstagram size={20} className="mr-2"/>
                    Get in touch
                </a>
              </div>
            </div>
            
            <div className="max-w-md mx-auto">
              <div className="border-4 border-solid border-neutral-800 rounded-2xl shadow-[14px_14px_0_0] shadow-warning">
              <Image src="https://cdn.prod.website-files.com/63360c0c2b86f80ba8b5421a/63407fbdc2d4ac5270385fd4_home-hero-image-paperfolio-webflow-template.svg" width="400" height="100"className="aspect-square rounded-2xl"
              alt="my pic hehe">
              </Image>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="relative w-full z-10">
        <div className="max-w-screen-2xl mx-auto mt-4 mb-8 md:mb-16 md:my-16 px-2 md:px-2 z-10 relative">
          <h1 className="m-0 font-raleway text-center text-4xl md:text-7xl sm:text-3xl text-primary-foreground dark:text-primary-dark overflow-hidden pb-1">
            <span className="text-red dark:text-yellow ml-4 first:ml-0 inline-block font-extrabold animate-hero-title">KIM DARREN</span>
          </h1> 
          <h2 className="m-0 text-center text-md xl:text-xl leading-tight font-semibold mt-2 md:mt-3 text-primary/80 dark:text-primary-dark/80 text-primary dark:text-primary-dark mb-6 home-hero-subtitle">
          A 24-year-old freelance full-stack web developer based in Cagayan Valley, Philippines.
          </h2>
        </div>
        </div> */}

      </section>
      {/* <section className="py-[5%]">
        <div className="w-full flex inline-flex overflow-hidden bg-neutral-800 py-14 transform -translate-x-4 -rotate-6">
         
        </div>
      </section> */}
      <MyExpertise/>
    </main>
  );
}


//TODO:h1 hero section animation