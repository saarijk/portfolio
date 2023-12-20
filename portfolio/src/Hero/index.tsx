import React, { useEffect, useState } from 'react';
import reactSvg from "@/assets/react.svg";
import { SelectedPage } from '@/Shared/types';
import { motion } from "framer-motion";
import Purple from "@/assets/purpleAbstract.jpg";
import Particles from "@/assets/particles.jpg";
import Particles2 from "@/assets/particles2.jpg";

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
      className="h-[90vh] w-full relative overflow-hidden"
    >
      {/* Background Image Container */}
      <div
        className="w-full h-full relative"
        style={{
          backgroundImage: `url(${Particles})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
        }}
      >
        {/* Overlay element for the background image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: overlayColor,
            transition: "background-color 0.4s ease-in-out",
            zIndex: 0, // Set zIndex to 0 to ensure it's behind the text
          }}
        />
      </div>

      {/* container */}
      <motion.div
        className="w-full mx-auto flex relative z-10"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* left side */}
        <div
          className="w-1/2 relative z-10"
          style={{
            position: 'fixed',
            top: 0,
            zIndex: scrollPosition > fixedPosition ? 1 : 0,
            width: scrollPosition > fixedPosition ? 'auto' : '50%',
            backgroundColor: scrollPosition > fixedPosition ? `rgba(0, 0, 0, 0.7)` : 'transparent',
            marginTop: scrollPosition > fixedPosition ? '0px' : '300px',
            WebkitBackdropFilter: scrollPosition > fixedPosition ? 'blur(8px)' : 'blur(0px)',
            backdropFilter: scrollPosition > fixedPosition ? 'blur(8px)' : 'blur(0px)',
            transition: 'width 0.5s ease-in-out, background-color 0.5s ease-in-out, margin-top 0.5s ease-in-out',
          }}
        >
          {/* Transparent overlay for the text container */}
          <div
            className="p-16 rounded-xl bg-transparent"
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
        <div className="w-1/2 mx-auto flex items-center justify-center">
          <img src={reactSvg} className="w-[200px]" alt="React logo" />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
