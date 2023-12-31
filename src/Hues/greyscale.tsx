import React, { useEffect, useState, ReactNode } from "react";

interface GreyscaleProps {
  children: ReactNode;
}

const Greyscale: React.FC<GreyscaleProps> = ({ children }) => {
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

  // Adjust the multiplier to control the darkness intensity
  const multiplier = 0.01; // You can adjust this value

  const darkness = Math.min(scrollPosition * multiplier, 100);

  const overlayStyle: React.CSSProperties = {
    background: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, ${darkness / 100}))`,
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    zIndex: 1,
  };

  return (
    <div style={{ position: "relative" }}>
      <div style={overlayStyle}></div>
      {children}
    </div>
  );
};

export default Greyscale;
