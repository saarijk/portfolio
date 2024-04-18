import React from 'react';
import Link from './Link';
import { SelectedPage } from '@/Shared/types';

interface Props {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Navbar: React.FC<Props> = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
    console.log('isTopOfPage:', isTopOfPage);

    const navbarBackgroundStyle: React.CSSProperties = {
        backgroundColor: isTopOfPage ? 'rgba(255, 255, 255, 0)' : 'rgba(255, 255, 255, 0.8)',
        backdropFilter: isTopOfPage ? 'none' : 'blur(2px)',
        transition: 'background-color 0.5s ease-in-out'
    };

    return (
        <div
            className="w-full text-black hover:text-slate-600 top-0 fixed items-center align-center z-30 p-1"
            style={navbarBackgroundStyle}
        >
            <div className="w-[90%] mx-auto flex justify-between items-center py-3">
                {/* left */}
                <div className="flex align-center gap-8 text-sm font-bold font-roboto items-center p-1">
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
                </div>
                {/* right */}
                <div className="flex align-center gap-8 text-md font-bold font-roboto items-center p-1">
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

export default Navbar;
