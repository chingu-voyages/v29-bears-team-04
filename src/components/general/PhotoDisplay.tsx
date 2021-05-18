import React, { useEffect, useState } from "react";

export default function PhotoDisplay() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const updateDimensions = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    return <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-3 sm:mx-2"></div>;
}
