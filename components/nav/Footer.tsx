import Social from "../menu/Social";

export default function Footer(){
    return(
        <footer className="relative bg-gray-100 px-10 sm:px-10">
            <nav className="mx-auto flex max-w-6xl items-center justify-between py-1 px-2">
        <div className="flex flex-row gap-8">
          <b>Kim Darren</b>
        </div>
        <Social/>
        </nav>
        </footer>
    )
}