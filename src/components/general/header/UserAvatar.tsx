import React from "react";


type Props = {
    source: string,
    cls: string
}

export default function UserAvatar ({ source, cls }: Props) {
    console.log(source)
    return (
        
        <div className={`w-12 pl-2 object-contain ${cls}`}>
            <img src={ source } alt="alt-text" className="rounded-full"></img>
        </div>
        
    )
}