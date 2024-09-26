import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline"

type Props = {}

function Description({ }: Props) {
    return (
        <div className="flex flex-col items-center sm:items-start">
            <div className="text-black text-2xl font-roboto w-full mt-12 text-center sm:text-left sm:w-1/2">
                <h1>Hello and welcome!<br /><br />I'm <span className="font-bold text-4xl">Katariina</span>, an aspiring web developer with a flair for crafting engaging and responsive user interfaces.</h1>
                <p className="text-2xl"><br />If you like what you see, feel free to <span className="hover:border-b-[1px] hover:border-black border-transparent transition duration-500 font-bold hover-underline-animation"><a href="https://www.linkedin.com/in/katariina-saari-2b5812188/">connect with me on LinkedIn</a></span></p>
            </div>
            <ChevronDoubleDownIcon className="h-10 w-10 sm:hidden mt-24 animate-bounce" />
        </div>
    )
}

export default Description