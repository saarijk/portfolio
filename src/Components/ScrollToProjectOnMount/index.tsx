import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToProjectOnMount() {
    const location = useLocation();

    useEffect(() => {
        const { hash } = location;
        if (hash) {
            const element = document.getElementById(hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return null;
}

export default ScrollToProjectOnMount;
