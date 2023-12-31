import React, { useEffect, useState, ReactNode } from "react";

interface HuesProps {
  children: ReactNode;
}

const Hues: React.FC<HuesProps> = ({ children }) => {
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

  // Calculate the hue based on the scroll position
  const hue =
    (scrollPosition /
      (document.documentElement.scrollHeight - window.innerHeight)) *
    360;

  const style = {
    filter: `hue-rotate(${hue}deg)`,
    transition: "filter 0.5s ease-in-out",
  };

  return <div style={style}>{children}</div>;
};

export default Hues;