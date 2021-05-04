import React from "react";
import { useState, useEffect } from 'react'
import TopicIntro from "../general/TopicIntro";
import TopicDisplay from "../general/TopicDisplay";

import MockData from "../../MOCK_DATA.json";

export default function AllTopics() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    console.log(position)
};

useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    // console.log(scrollPosition)
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

    return (
        <>
            <TopicIntro
                heading="Topics"
                description="Explore the world through topics of beautiful photos free to use under the"
            >
                <p>
                    <a href="#unsplash-license">Unsplash License</a>
                </p>
            </TopicIntro>
            <h2>All Topics</h2>
            <div className="grid-cols-3 grid-flow-col gap-4">
                {MockData.map((topic: any) => (
                    <TopicDisplay
                        topic={topic.topic}
                        description={topic.description}
                        contributors={topic.contributors}
                        image={topic.image}
                        scrollPosition={scrollPosition}
                    />
                ))}
            </div>
        </>
    );
}

//TODO: Complete the flex grid and the display block
