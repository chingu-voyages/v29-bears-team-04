import React from "react";
import FacebookLogo from "../general/images/FacebookLogo";

type Props = {
    width: number;
    height: number;
    buttonText: string;
};

export default function FacebookButton({ width, height, buttonText }: Props) {
    return (
        <div className="w-full flex justify-center">
            <button className="flex justify-center items-center w-11/12 py-1 bg-blue-600 text-white rounded-md my-5">
                <FacebookLogo cls="fill-current mr-3 " width={width} height={height} />
                <div>{buttonText}</div>
            </button>
        </div>
    );
}
