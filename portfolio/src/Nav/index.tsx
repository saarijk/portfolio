import React from 'react';
import Link from './Link';
import { SelectedPage } from '@/Shared/types';

type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
  };

  const Nav = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
    const navbarBackground = isTopOfPage ? "" : "drop-shadow-md";

  return (
    <>
        <div className={` ${navbarBackground} w-full top-0 fixed bg-slate-900 items-center align-center z-30 p-1`}>
            <div className="w-5/6 mx-auto flex justify-between items-center">
                {/* title */}
                <h1 className="text-slate-400 text-sm p-1">PORTFOLIO: Katariina Saari</h1>
                {/* links */}
                <div className="flex align-center gap-8 text-xs items-center text-slate-500">
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
    </>
  )
}

export default Nav