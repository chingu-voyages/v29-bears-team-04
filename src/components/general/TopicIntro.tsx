import React from "react";

type Props = {
    heading: string;
    description: string | React.ReactNode;
};

export default function TopicIntro({ heading, description }: Props) {
    return (
        <div className="block sm:px-0 py-12 px-3">
            <h1 className="text-4xl font-bold mb-4">{heading}</h1>
            <p>{description}</p>
        </div>
    );
}
