import Contact from "./Contact";
import Hero from "./Hero";
import Hues from "./Hues";
import Nav from "./Nav";
import Projects2 from "./Projects2";
import Skills from "./Skills";
import { SelectedPage } from "./Shared/types";
import { useState, useEffect } from "react";
import Greyscale from "@/Hues/greyscale";
import Home from "./Home";
import mountains from "@/assets/mountains.png";
import Projects from "./Projects";

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

  const appStyle = {
    /*backgroundImage: `url(${mountains})`,
    backgroundSize: "cover",
    backgroundPosition: "top center",*/
  };

  return (
    <>
      <div className="app bg-white" style={appStyle}>
        <Nav
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Home setSelectedPage={setSelectedPage} />
        <Skills setSelectedPage={setSelectedPage} />
        <Projects setSelectedPage={setSelectedPage}  />
      </div>
    </>
  );
}

export default App;
