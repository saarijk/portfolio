import Link from './Link';
import { SelectedPage } from '@/Shared/types';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
};

const Nav = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
    console.log('isTopOfPage:', isTopOfPage);
    const isSmScreen = useMediaQuery({ maxWidth: 640 });
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

    return (
        <div className="w-full mx-auto flex items-center py-3 z-10">
      {/* left */}
      <div className="flex align-center gap-8 text-sm font-bold font-roboto items-center p-1 bg-transparent">
        {isSmScreen ? (
          /* Render a button for small screens */
          <button
                className="rounded-full p-2 relative"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-10 w-10 text-black text-right fixed right-0 top-0 mr-6 mt-4" />
              </button>
        ) : (
          /* Render links for larger screens */
          <>
            <Link page="HOME" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page="SKILLS" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page="PROJECTS" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <div className="flex align-center gap-8 text-md font-bold font-roboto items-center p-1 ">
                <Link page="CONTACT" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            </div>
          </>
        )}
      </div>

      {/* MOBILE MENU MODAL */}
      {isSmScreen && isMenuToggled && (
        <div className="fixed right-0 top-0 z-40 bg-white w-[300px] h-[500px] drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-10 w-10 text-black" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl text-black font-roboto font-bold">
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
      )}
    </div>
    );
};

export default Nav;
