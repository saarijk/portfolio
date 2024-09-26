import Nav from "./Nav";
import Skills from "./Skills";
import { SelectedPage } from "./Shared/types";
import { useState, useEffect } from "react";
import Home from "./Home";
import Contact from "./Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectPage from "./ProjectPage";

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
    <Router>
      <div className="app bg-white" style={appStyle}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Nav
                  isTopOfPage={isTopOfPage}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Home setSelectedPage={setSelectedPage} />
                <Skills setSelectedPage={setSelectedPage} />
                <Contact setSelectedPage={setSelectedPage} />
              </>
            }
          />

          <Route
            path="/projects"
            element={<ProjectPage />}
          />
        </Routes>
        <div className="text-xs bottom-0 right-0 font-ibm">
          <p className="text-right">
            &copy; 2024 Katariina Saari. All Rights Reserved.
          </p>
        </div>
      </div>
    </Router>
  );
}

export default App;
