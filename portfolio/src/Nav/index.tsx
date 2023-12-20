import React from 'react';
import Link from './Link';
import { SelectedPage } from '@/Shared/types';

type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
};

const Nav = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
    const navbarBackground = isTopOfPage ? "" : "bg-black transition-all ease-in";
    const transitionDuration = "0.3s";

    return (
        <div className="w-full top-0 fixed items-center align-center z-30 p-1 bg-black bg-opacity-50" 
            style={{
                backgroundColor: navbarBackground,
                transitionDuration: `${transitionDuration}`,
                WebkitBackdropFilter: 'blur(8px)',
                backdropFilter: 'blur(8px)',
            }}
        >
            <div className="w-5/6 mx-auto flex justify-between items-center">
                {/* title */}
                <h1 className="text-slate-400 text-sm p-1"></h1>
                {/* links */}
                <div className="flex align-center gap-8 text-xs font-bold items-center text-slate-500 p-1">
                    <Link 
                        page="HOME"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                    <Link 
                        page="SKILLS"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                    <Link 
                        page="PROJECTS"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                    <Link 
                        page="CONTACT"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                </div>
            </div>
        </div>
    );
};

export default Nav;
