import Social from "../menu/Social";

export default function Header() {
  return (
    <header className="relative px-4 sm:px-6">
      <nav className="max-w-6xl mx-auto px-4 py-10 md:py-20">
        <div className="flex  md:flex-row justify-between items-center">
          <div className="flex flex-row gap-8">
            <b>Kim Darren</b>
          </div>
          <div className="space-x-8 hidden md:block mt-4">
            <a href="/" className="text-base font-normal text-gray-600 dark:text-gray-300">About</a>
            <a href="/" className="text-base  text-gray-800 font-bold dark:text-gray-400">Projects</a>
            <a href="/" className="text-bae font-normal text-gray-600 decoration-sky-300">Experience</a>
            <a href="/" className="text-bae font-normal text-gray-600 decoration-sky-300">Contact</a>
          </div>
          <Social />
        </div>
        <div className="space-x-8 block md:hidden mt-4">
        <a href="/" className="text-base font-normal text-gray-600 dark:text-gray-300">About</a>
            <a href="/" className="text-base  text-gray-800 font-bold dark:text-gray-400">Projects</a>
            <a href="/" className="text-bae font-normal text-gray-600 decoration-sky-300">Experience</a>
            <a href="/" className="text-bae font-normal text-gray-600 decoration-sky-300">Contact</a>
        </div>
      </nav>
    </header>
  );
}
