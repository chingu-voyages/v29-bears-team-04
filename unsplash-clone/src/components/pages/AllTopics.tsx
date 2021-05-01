import React from "react";
import TopicIntro from "../general/TopicIntro";
import TopicDisplay from "../general/TopicDisplay";

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
            <div className="grid-cols-3 grid-flow-col gap-4">
                {MockData.map((topic: any) => (
                    <TopicDisplay
                        topic={topic.topic}
                        description={topic.description}
                        contributors={topic.contributors}
                    />
                ))}
            </div>
        </>
    );
}

//TODO: Complete the flex grid and the display block
