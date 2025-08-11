import { useEffect, useState } from "react";

export default function useWindowDimensions() {
    const [dimensions, setDimensions] = useState([window.innerWidth, window.innerHeight]);

    const onResize = () => {
        console.log('setting dimensions: ', window.innerWidth, window.innerHeight);
        
        setDimensions([window.innerWidth, window.innerHeight]);
    }

    useEffect(() => {
        window.addEventListener('resize', onResize);

        // clean up function
        return () => {
            window.removeEventListener('resize', onResize);
        }
    }, []);

    return dimensions;
}