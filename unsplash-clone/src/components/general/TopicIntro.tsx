import React from "react";

type Props = {
    heading: string;
    description: string;
    children: React.ReactNode;
};

export default function TopicIntro({ children, heading, description }: Props) {
    return (
        <div className="block px-2 sm:px-0">
            <h1>{heading}</h1>
            <p>{description}</p>
            {children}
        </div>
    );
}
