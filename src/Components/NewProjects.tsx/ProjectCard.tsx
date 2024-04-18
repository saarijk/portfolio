import React from 'react'

type Props = {
    projectName: string;
    description: string;
    specialFeatures: string[];
    images: string[];
}

function ProjectCard({ projectName, description, specialFeatures, images }: Props) {
    return (
        <>
            <div className="w-full h-auto mb-[50px] border-2 rounded-lg dramatic-shadow-light transition-all duration-300 p-8">
                {/* title, special features, screencaps */}
                <h2 className="font-bold text-2xl">{projectName.toUpperCase()}</h2>
                <p>{description}</p>
                <h3 className="font-bold pt-4">SPECIAL FEATURES</h3>
                <ul>
                    {specialFeatures.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
                <div className="pt-4 mx-auto gap-4 grid grid-flow-col auto-cols-max overflow-x-auto">
                    {images.map((imageUrl, index) => (
                        <img key={index} src={imageUrl} className="h-[200px] w-auto rounded-md border-[1px]" alt={`Image ${index}`} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default ProjectCard