import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
    projectName: string;
    thumbnail: string;
}

function ProjectCard({ projectName, thumbnail }: Props) {
    return (
        <>
            <Link to={`/projects#${projectName.toLowerCase()}`}>
                <div className="transition-all duration-[200ms] text-xl hover:p-[1px] hover:border-[4px] max-w-[250px] max-h-[180px] min-w-[250px] min-h-[180px] border-t-[1px] border-l-[1px] border-l-gray-300 border-t-gray-300 border-r-[1px] border-b-[1px] border-gray-500 bg-opacity-10 p-8 z-10 rounded-lg bg-cover bg-center flex flex-col items-center justify-center custom-background"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.9)), url(${thumbnail})`,
                        width: "100%",
                        maxWidth: "50%",
                    }}>
                    <h2 className="font-bold font-roboto text-center text-white">{projectName.toUpperCase()}</h2>
                </div>
            </Link>
        </>
    )
}

export default ProjectCard