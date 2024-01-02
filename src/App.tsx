import Nav from "./Nav";
import Projects from "./Projects";
import Skills from "./Skills";
import { SelectedPage } from "./Shared/types";
import { useState, useEffect } from "react";
import Home from "./Home";
import Contact from "./Contact";

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
      <div className="app bg-white w-full" style={appStyle}>
        <Nav
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Home setSelectedPage={setSelectedPage} />
        <Skills setSelectedPage={setSelectedPage} />
        <Projects setSelectedPage={setSelectedPage}/>
        <Contact setSelectedPage={setSelectedPage}/>
      </div>
    </>
  );
}

export default App;
