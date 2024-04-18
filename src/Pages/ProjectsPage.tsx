import Arneura from '@/Components/Projects/Arneura'
import Gymapp from '@/Components/Projects/Gymapp'
import RecipeMe from '@/Components/Projects/RecipeMe'
import Seelevel from '@/Components/Projects/Seelevel'
import ScrollToProjectOnMount from '@/Components/ScrollToProjectOnMount'

type Props = {}

function ProjectsPage({ }: Props) {
    return (
        <>
            <ScrollToProjectOnMount />
            <div className="w-full h-auto flex flex-col items-center relative">
                <div className="ml-3 mt-3 left-0 absolute">
                    <a href="/" className="text-xl font-roboto font-bold hover-underline-animation">Return</a>
                </div>
                <div className="w-5/6 flex flex-col items-center justify-center">
                    <div className="text-black font-bold font-roboto mt-[100px]">
                        <h1 className="text-4xl text-center">ALL PROJECTS</h1>
                        <p className="text-center mt-3">Here, I'll be sharing updates on the various projects I'm currently working on and those I've completed. It's a space where you can catch a glimpse of my ongoing creative endeavors and see the progress over time.</p>
                    </div>
                    <div>
                        <RecipeMe />
                        <Seelevel />
                        <Arneura />
                        <Gymapp />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectsPage