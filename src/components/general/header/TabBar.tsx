import React from "react";
import { Link, useLocation } from "react-router-dom";

type Tabs = {
    text: string;
    path: string;
};

type Props = { tabs: Tabs[] };

enum TabsClass {
    FREE = "inline-block pr-4 pb-3 list-none",
    SELECTED = "inline-block pr-4 pb-3 list-none border-b-2 border-gray-700",
}

export default function TabBar({ tabs }: Props) {
    const location = useLocation();
    console.log(location.pathname);

    return (
        <div className="px-2 pt-2 shadow-md flex justify-between">
            <div className="w-9/12 sm:w-11/12 pt-3 whitespace-nowrap overflow-hidden">
                {tabs.map((tab) => (
                    <li
                        className={
                            location.pathname === tab.path
                                ? TabsClass.SELECTED
                                : TabsClass.FREE
                        }
                    >
                        <Link className="opacity-75" to={tab.path}>
                            {tab.text}
                        </Link>
                    </li>
                ))}
            </div>
            <div className="py-3">
                <Link className="opacity-75" to="/t">
                    View All
                </Link>
            </div>
        </div>
    );
}
