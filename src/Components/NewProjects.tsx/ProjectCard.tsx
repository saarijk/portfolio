import React, { useState } from 'react';

type Props = {
    projectName: string;
    description: string;
    specialFeatures: string[];
    images: string[];
    lightBg: boolean;
}

const ProjectCard: React.FC<Props> = ({ projectName, description, specialFeatures, images, lightBg }) => {
    const [enlargedImage, setEnlargedImage] = useState<string | null>(null);

    const handleImageClick = (imageUrl: string) => {
        setEnlargedImage(imageUrl);
    };

    const handleCloseModal = () => {
        setEnlargedImage(null);
    };

    const bgColorClass = lightBg ? 'bg-white text-black border-slate-300' : 'bg-gray-900 text-white border-transparent';

    return (
        <div className={`relative ${bgColorClass} w-full h-auto mb-[30px] border-2 rounded-lg dramatic-shadow-light transition-all duration-300 p-8`}>
            {/* title, special features, screencaps */}
            <h2 className="font-bold text-3xl">{projectName.toUpperCase()}</h2>
            <p>{description}</p>
            <h3 className="font-bold pt-4">SPECIAL FEATURES</h3>
            <ul>
                {specialFeatures.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
            <div className="pt-4 mx-auto gap-4 grid grid-flow-col auto-cols-max overflow-x-auto">
                {images.map((imageUrl, index) => (
                    <img
                        key={index}
                        src={imageUrl}
                        className="h-[200px] w-auto rounded-md border-[1px] cursor-pointer"
                        alt={`Image ${index}`}
                        onClick={() => handleImageClick(imageUrl)}
                    />
                ))}
            </div>
            {/* enlarged image */}
            {enlargedImage && (
                <div className="absolute inset-0 p-6 rounded-md flex justify-center items-center bg-black bg-opacity-50 z-50">
                    <div className="max-w-screen-lg">
                        <img
                            src={enlargedImage}
                            className="w-auto max-h-[490px] mx-auto rounded-md"
                            alt="Enlarged Image"
                        />
                        <button
                            onClick={handleCloseModal}
                            className="absolute top-4 right-4 text-white text-xl bg-gray-900 px-3 py-1 rounded-md hover:bg-gray-700 transition-all duration-300"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProjectCard;
