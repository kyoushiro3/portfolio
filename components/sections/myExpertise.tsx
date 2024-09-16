import { HiMiniComputerDesktop } from "react-icons/hi2";

export default function MyExpertise() {
  return (
    <section className="bg-dark md:pb-0 relative after:absolute after:h-48 after:bottom-0 after:left-0 after:w-full after:bg-gradient-to-b after:from-dark after:to-[#13161B] after:content-[''] -mb-px">
      <div className="relative w-full z-10">
        <div className="max-w-screen-2xl mx-auto mt-4 mb-8 md:mb-16 md:my-16 px-2 md:px-2 z-10 relative">
          <h1 className="m-0 font-raleway text-center text-4xl md:text-7xl sm:text-3xl text-primary-foreground dark:text-primary-dark overflow-hidden pb-1">
            <span className="text-red dark:text-yellow ml-4 first:ml-0 inline-block font-extrabold animate-hero-title">
              MY EXPERTISE
            </span>
          </h1>
        </div>

        <div className="md:mt-4 pb-8 md:pb-0 w-full mx-auto px-4 2xl:px-0 flex items-center sm:items-end flex-col sm:flex-row">
          <div className="list-none m-0 p-0 pb-10 md:pb-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 flex-grow w-full text-primary-dark z-10 relative">
            <div className="flex flex-col px-7 py-8 bg-accent-dark border-2 border-gray-500   text-primary dark:text-primary-dark bg-accent">
              <div className="flex flex-row gap-2">
                <HiMiniComputerDesktop size={50} />
                <h5 className="font-bold">
                  <span className="relative z-10 after:absolute after:-bottom-0 after:left-0 after:w-full after:h-2 after:bg-gradient-to-r after:from-purple-100 after:to-purple-900 ">
                  Software
                  
                    </span>
                    <br/>
                    <span>
                    Development
                    </span> </h5>
              </div>
              
              <div className="mt-10 pl-8 after:absolute after:left-14 after:-mt-20 after:md:-mt-28 after:w-1 after:h-28 after:md:h-36 after:bg-slate-800">
                <span className="relative before:content-['<h3>'] before:-ml-6 before:-mt-6 before:absolute after:content-['</h3>'] after:absolute after:mt-8 after:-ml-28">Experienced in both functional and OOP: Dart, Python, Java, JavaScript, TypeScript.</span>
              </div>
            </div>
            <div className="flex items-center justify-center  w-full  h-24 py-6  lg:px-2 lg:h-40 bg-accent-dark  text-primary dark:text-primary-dark border-t border-l border-b border-black ">
              Frontend Dev React, NextJS
            </div>
            <div className="flex items-center justify-center  w-full  h-24 py-6  lg:px-2 lg:h-40 bg-accent-dark text-primary dark:text-primary-dark border border-black">
              Flutter Dev Android, iOS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
