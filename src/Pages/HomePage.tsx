import Nav from "@/Components/Nav";
import Skills from "@/Components/Skills";
import { SelectedPage } from "@/Shared/types";
import { useState, useEffect } from "react";
import Home from "@/Components/Home";
import Contact from "@/Components/Contact";
import Footer from "@/Components/Footer";
import ProjectsMain from "@/Components/Projects/ProjectsMain";

function HomePage() {

    const [selectedPage, setSelectedPage] = useState<SelectedPage>(
        SelectedPage.Home
    );
    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setIsTopOfPage(true);
                setSelectedPage(SelectedPage.Home);
            }
            if (window.scrollY !== 0) setIsTopOfPage(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div className="app bg-white">
                <Nav
                    isTopOfPage={isTopOfPage}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />
                <Home setSelectedPage={setSelectedPage} />
                <Skills setSelectedPage={setSelectedPage} />
                <ProjectsMain setSelectedPage={setSelectedPage} />
                <Contact setSelectedPage={setSelectedPage} />
                <Footer />
            </div>
        </>
    );
}

export default HomePage