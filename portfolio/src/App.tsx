import Contact from "./Contact";
import Hero from "./Hero";
import Hues from "./Hues";
import Nav from "./Nav";
import Projects from "./Projects";
import Skills from "./Skills";
import { SelectedPage } from "./Shared/types";
import { useState, useEffect } from "react";
import Greyscale from "@/Hues/greyscale";

function App() {

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
      <div className="app">
        <Nav 
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Greyscale>
          <Hero setSelectedPage={setSelectedPage} />
          <Skills setSelectedPage={setSelectedPage}  />
          <Projects setSelectedPage={setSelectedPage}  />
          <Contact setSelectedPage={setSelectedPage}  />
        </Greyscale>
        <Hues>
        </Hues>
      </div>
    </>
  );
}

export default App;
