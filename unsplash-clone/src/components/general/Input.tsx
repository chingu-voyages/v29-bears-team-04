import React from "react";

type Props = {
    type: string;
    id: string;
    setChange: React.Dispatch<any>;
};

export default function Input({ type, id, setChange }: Props) {
    return (
        <input
            className="w-full border-solid border-gray-300"
            type={type}
            id={id}
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
                setChange(e.currentTarget.value);
            }}
        />
    );
}
