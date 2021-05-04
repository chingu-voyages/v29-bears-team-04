import React from "react";
import { useState, useEffect } from 'react'
import TopicIntro from "../general/TopicIntro";
import TopicDisplay from "../general/TopicDisplay";
import { trackWindowScroll } from 'react-lazy-load-image-component';

import { mockData } from "../../MOCK_DATA.js";

const AllTopics = () => {
    const [scrollPosition, setScrollPosition] = useState({x: 0, y: 0});
    const handleScroll = () => {
    const position = {
        x: window.scrollX,
        y: window.scrollY
    }
    setScrollPosition(position);
};

useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    // console.log(scrollPosition)
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);
    const allTopicsDescription = (
        <p className="text-sm">
            Explore the world through topics of beautiful photos free to use under the"
            <a href="#unsplash-license">Unsplash License</a>.
        </p>
    );

    return (
        <div className="mx-auto p-2">
            <TopicIntro heading="Topics" description={allTopicsDescription}></TopicIntro>
            <h2 className="text-3xl mb-7 font-bold px-3">All topics</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {mockData.map((topic: any) => (
                    <TopicDisplay
                        key={topic.id}
                        topic={topic.topic}
                        description={topic.description}
                        contributors={topic.contributors}
                        image={topic.image}
                        scrollPosition={scrollPosition}
                    />
                ))}
            </div>
        </div>
    );
}


export default trackWindowScroll(AllTopics)