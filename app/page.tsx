import MyExpertise from "@/components/sections/myExpertise";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-neutral-50 flex-col items-center justify-between z-10">
      <section className="relative pt-24 pb-28">
        <div className="lg:max-w-6xl md:max-w-xl mx-6">
          <div className="mx-auto grid lg:grid-cols-[1fr_0.7fr] sm:grid-cols-1 gap-20">
            <div className="max-w-full lg:text-left md:text-center sm:text-center sm:justify-center">
              <h1 className="mb-4 font-raleway lg:text-5xl md:text-4xl text-2xl font-bold leading-normal md:leading-tight lg:leading-1 animate-hero-title">
                I&rsquo;m&nbsp;
                <span className="px-1 text-red">KIM DARREN</span>
                ,
                <br />
                a Web Developer
                <br />
                from <span className="px-1 text-sky-500 ">PH</span>
              </h1>
              <p className="sm:justify-center text-lg md:text-center lg:text-left font-medium mb-12">
                A 24-year-old freelance full-stack web developer based in
                Cagayan Valley, Philippines.
              </p>

              <div className="flex flex-row space-x-5 items-center sm:space-x-4 md:space-x-3">
                <a
                  className="inline-block relative group  bg-yellow-600 top-[2px] text-neutral-800 text-center rounded-[8px] text-md font-semibold shadow-[0_5px_0_0] shadow-yellow-600"
                  href="/"
                >
                  <span className="relative border-yellow-700 text-center w-auto bg-warning text-primary hover:text-primary dark:text-primary dark:hover:text-primary border-button dark:border-button-dark dark:bg-orange rounded-[8px] text-[15px] font-bold border-[1.5px] px-5 py-2  hover:-translate-y-1 active:translate-y-0.5 group-disabled:hover:!-translate-y-1 block active:transition-all active:duration-100 select-none ">
                    Get in touch
                  </span>
                </a>
                <a
                  className="inline-block relative group  bg-yellow-600 top-[2px] text-neutral-800 text-center rounded-[8px] text-md font-semibold shadow-[0_5px_0_0] shadow-yellow-600
                "
                  href="/"
                >
                  <span className="relative border-yellow-700 text-center w-auto bg-white text-primary hover:text-primary dark:text-primary dark:hover:text-primary border-button dark:border-button-dark dark:bg-orange rounded-[8px] text-[15px] font-bold border-[1.5px] px-5 py-2  hover:-translate-y-1 active:translate-y-0.5 group-disabled:hover:!-translate-y-1 block active:transition-all active:duration-100 select-none ">
                    Book a meeting
                  </span>
                </a>
              </div>
            </div>

            <div className="max-w-md mx-auto">
              <div className="border-4 border-solid border-neutral-800 rounded-2xl shadow-[14px_14px_0_0] shadow-warning">
                <Image
                  src="https://cdn.prod.website-files.com/63360c0c2b86f80ba8b5421a/63407fbdc2d4ac5270385fd4_home-hero-image-paperfolio-webflow-template.svg"
                  width="400"
                  height="100"
                  className="aspect-square rounded-2xl"
                  alt="my pic hehe"
                ></Image>
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
      <section className="relative pt-24 pb-28 bg-neutral-800 w-full mx-6">
        <div className="lg:max-w-6xl md:max-w-xl mx-auto">
            <div className="max-w-full mx-auto lg:text-left md:text-center sm:text-center sm:justify-center">
              <h1 className="m-0 font-raleway text-center text-4xl md:text-7xl sm:text-3xl text-primary-foreground dark:text-primary-dark overflow-hidden pb-1">
                <span className="text-red dark:text-yellow ml-4 first:ml-0 inline-block font-extrabold animate-hero-title">
                  My tech stacks
                </span>
              </h1>
              <p className="text-center text-lg text-neutral-100">
                Lacus, adipiscing lectus convallis purus aliquet cursus magnaol
                montes augue donec cras turpis ultrices nulla sed doler.
              </p>
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
    </main>
  );
}

//TODO:h1 hero section animation
