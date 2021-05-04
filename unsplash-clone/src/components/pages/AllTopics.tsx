import React from "react";
import TopicIntro from "../general/TopicIntro";
import TopicDisplay from "../general/TopicDisplay";

import MockData from "../../MOCK_DATA.json";

export default function AllTopics() {
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
                {MockData.map((topic: any) => (
                    <TopicDisplay
                        key={topic.id}
                        topic={topic.topic}
                        description={topic.description}
                        contributors={topic.contributors}
                    />
                ))}
            </div>
        </div>
    );
}
