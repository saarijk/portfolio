import React from 'react'

type Props = {
    linkName: string;
    link: string;
}

const LinkCard: React.FC<Props> = ({ linkName, link }) => {
    return (
        <>
            <div className="w-[350px] h-[150px] bg-white border-[1px] border-slate-600 rounded-lg z-30 mt-[-35px] flex items-center justify-center text-xl font-bold hover:text-2xl transition-all duration-300">
                <a href={link}>Explore {linkName}</a>
            </div>
        </>
    )
}

export default LinkCard