import React, { useEffect, useState } from 'react';
import electric from "@/assets/electric.png";
import { SelectedPage } from '@/Shared/types';
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Hero = ({ setSelectedPage }: Props) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Adjust the multiplier to control the overlay intensity
  const multiplier = 0.01; // You can adjust this value
  const fixedPosition = 200; // Adjust this value based on your needs

  const overlayColor = `rgba(0, 0, 0, ${scrollPosition * multiplier})`;

  return (
    <section
      id="home"
      className="h-[100vh] w-full relative overflow-hidden bg-darkBlue"
    >
      <div
        className="w-full h-[50%] relative flex items-center justify-center"
        style={{
          backgroundImage: `url(${electric})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          marginTop: '150px',
          opacity: '30%'
        }}
      ></div>
      {/* Overlay element for the background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: overlayColor,
          transition: "background-color 0.4s ease-in-out",
          zIndex: 0, // Set zIndex to 0 to ensure it's behind the text
        }}
      />

      {/* container */}
      <motion.div
        className="w-full mx-auto flex relative z-10"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        <div
          className="w-5/6 relative z-10"
          style={{
            position: 'fixed',
            left: '50%',
            transform: 'translateX(-50%)',
            top: 0,
            zIndex: scrollPosition > fixedPosition ? 1 : 0,
            width: scrollPosition > fixedPosition ? '100%' : '75%',
            textAlign: 'center',
            backgroundColor: scrollPosition > fixedPosition ? `rgba(0, 0, 0, 0.7)` : 'transparent',
            marginTop: scrollPosition > fixedPosition ? '0px' : '750px',
            WebkitBackdropFilter: scrollPosition > fixedPosition ? 'blur(8px)' : 'blur(0px)',
            backdropFilter: scrollPosition > fixedPosition ? 'blur(8px)' : 'blur(0px)',
            transition: 'width 0.5s ease-in-out, background-color 0.5s ease-in-out, margin-top 0.5s ease-in-out',
          }}
        >
          {/* text */}
          <div
            className="p-16 rounded-xl bg-transparent flex flex-col items-center justify-center align-center"
            style={{
              backgroundColor: `rgba(0, 0, 0, 0)`,
            }}
          >
            {/* title */}
            <h1 className="text-6xl font-bold text-slate-500">PORTFOLIO</h1>
            {/* description */}
            <p className="text-lg text-slate-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        {/* right side */}
        <></>
      </motion.div>
    </section>
  );
}

export default Hero;
