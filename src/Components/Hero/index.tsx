import React, { useState, useEffect } from 'react';
import sidebarImg from '@/assets/typing.png';

interface Position {
    x: number;
    y: number;
}

const Hero: React.FC = () => {
    const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
    const parallaxFactor = 200;

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const maxX = window.innerWidth;
            const maxY = window.innerHeight;
            const newX = (maxX - event.clientX) / parallaxFactor;
            const newY = (maxY - event.clientY) / parallaxFactor;
            //setPosition({ x: (maxX - event.clientX) / parallaxFactor, y: (maxY - event.clientY) / parallaxFactor });

            if (event.clientX >= 0 && event.clientX <= maxX && event.clientY >= 0 && event.clientY <= maxY) {
                setPosition({ x: newX, y: newY });
            } else {
                setPosition({ x: 0, y: 0 });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="w-full h-[100vh] flex justify-center">
            {/* container */}
            <div className="flex w-5/6 h-5/6 items-center my-auto justify-center" style={{ transform: `translate(${position.x}px, ${position.y}px)` }}>
                {/* left side */}
                <div className="font-montserrat font-normal w-2/5 max-w-[400px]">
                    <h1 className="text-6xl">Hello and <span className="font-bold text-7xl">welcome!</span></h1>
                    <br />
                    <p className="text-2xl rainbow-text">
                        I'm <span className="font-bold">Katariina</span>, an aspiring web developer with a flair for crafting engaging and <span className="font-bold">responsive</span> user interfaces.
                    </p>
                </div>
                {/* right side */}
                <div className="w-2/5">
                    <img src={sidebarImg} className="h-auto w-full max-w-[500px] transition-all duration-300" alt="Typing" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
