import React from "react";


type Props = {
    source: string
}

export default function UserAvatar ({ source }: Props) {
    console.log(source)
    return (
        
        <div className="w-12 pl-2 object-contain">
            <img src={ source } alt="alt-text" className="rounded-full"></img>
        </div>
        
    )
}