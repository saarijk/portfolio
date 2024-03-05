import Link from './Link';
import { SelectedPage } from '@/Shared/types';

type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
};

const Nav = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
    console.log('isTopOfPage:', isTopOfPage);
    const navbarBackground = isTopOfPage ? "bg-white" : "bg-transparent";
    const transitionDuration = "0.3s";

    return (
        <div className={` ${navbarBackground} w-full text-black hover:text-slate-600 top-0 fixed items-center align-center z-30 p-1 bg-opacity-0`}
            style={{
                transitionDuration: `${transitionDuration}`,
                WebkitBackdropFilter: 'blur(0px)',
                backdropFilter: 'blur(0px)',
            }}
        >
            <div className="w-[90%] mx-auto flex justify-between items-center py-3">
                {/* left */}
                <div className="flex align-center gap-8 text-sm font-bold font-roboto items-center p-1 bg-white ">
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
                <div className="flex align-center gap-8 text-md font-bold font-roboto items-center p-1 bg-white">
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
