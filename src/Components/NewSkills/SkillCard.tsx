import React from 'react'

type Props = {
    name: string;
    logo: string;
    description: string;
    lightBg: boolean;
}

function SkillCard({ name, logo, description, lightBg }: Props) {
    const bgColorClass = lightBg ? 'bg-white text-black border-slate-300' : 'bg-gray-900 text-white border-transparent';

    return (
        <div className={`dramatic-shadow hover:z-30 p-4 rounded-lg border-2 transition-all duration-300 ${bgColorClass} w-1/4 min-w-[250px] min-h-[250px] max-w-[600px] max-h-[400px]`}>
            {/* Title */}
            <h2 className="text-xl font-semibold mb-2">{name}</h2>

            {/* Image */}
            <img src={logo} alt={name} className="w-12 h-12 mb-2" />

            {/* Description */}
            <p className="text-sm ">{description}</p>
        </div>
    );
}

export default SkillCard