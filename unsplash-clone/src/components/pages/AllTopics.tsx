import React from "react";
import TopicIntro from "../general/TopicIntro";

import MockData from "../../MOCK_DATA.json";

export default function AllTopics() {
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
            {MockData.map((topic: any) => {
                <div>
                    <h1> {topic.topic}</h1>
                    <p>{topic.description}</p>
                </div>;
            })}
        </>
    );
}

//TODO: Complete the flex grid and the display block