import { motion } from "framer-motion";
import { SelectedPage } from "@/Shared/types";
import React, { useEffect, useState } from "react";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Projects2 = ({ setSelectedPage }: Props) => {
  const [isInSection, setIsInSection] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);

      // Check if the section is at least one-third into the viewport
      const sectionElement = document.getElementById("projects");
      if (sectionElement) {
        const rect = sectionElement.getBoundingClientRect();
        setIsInSection(rect.top < window.innerHeight * (1 / 3) && rect.bottom >= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  // Adjust the multiplier to control the overlay intensity
  const multiplier = 0.01; // You can adjust this value
  const fixedPosition = 200; // Adjust this value based on your needs

  // Determine overlay color based on scroll position and section visibility
  const overlayColor = isInSection
    ? `rgba(6, 8, 54, ${scrollPosition * multiplier})`
    : "rgba(0, 0, 0, 0)";

  return (
    <>
      <motion.section
        id="projects"
        onViewportEnter={() => {
          setSelectedPage(SelectedPage.Projects);
        }}
      >
        <motion.div
          className="h-[100vh] w-full relative overflow-hidden bg-black flex align-center justify-center"
        >
          {/* Overlay element for the background */}
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: overlayColor,
              transition: "background-color 0.6s ease-in-out",
              zIndex: 0,
            }}
          />
          <div
            className="w-5/6 pt-10 mx-auto flex relative z-10"
            style={{
              zIndex: scrollPosition > fixedPosition ? 1 : 0,
              // Add other styles as needed
            }}
          >
            <div
              className="bg-transparent"
              style={{
                backgroundColor: `rgba(0, 0, 0, 0)`,
              }}
            >
              <h1 className="text-slate-300 text-4xl font-bold">PROJECTS</h1>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </>
  );
};

export default Projects2;
