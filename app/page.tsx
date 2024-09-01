import MyExpertise from "@/components/sections/myExpertise";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="py-28 px-14">
        <div className="relative w-full z-10">
        <div className="max-w-screen-2xl mx-auto mt-4 mb-8 md:mb-16 md:my-16 px-2 md:px-2 z-10 relative">
          <h1 className="m-0 font-raleway text-center text-4xl md:text-7xl sm:text-3xl text-primary-foreground dark:text-primary-dark overflow-hidden pb-1">
            <span className="text-red dark:text-yellow ml-4 first:ml-0 inline-block font-extrabold animate-hero-title">KIM DARREN</span>
          </h1> 
          <h2 className="m-0 text-center text-xl xl:text-2xl leading-tight font-semibold mt-2 md:mt-3 text-primary/80 dark:text-primary-dark/80 text-primary dark:text-primary-dark mb-6 home-hero-subtitle">
          A 24-year-old freelance full-stack web developer based in Cagayan Valley, Philippines.
          </h2>
        </div>
        </div>
      </section>
      <MyExpertise/>
    </main>
  );
}


//TODO:h1 hero section animation