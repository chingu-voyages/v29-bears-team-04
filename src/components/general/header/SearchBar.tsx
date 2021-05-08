import React, { useState } from "react";
import Search from "../images/Search";

export default function SearchBar() {
    const [searchText, updateSearchText] = useState<string>("");

    return (
        <form className="flex items-center rounded-full bg-gray-300 w-3/4 p-2">
            <button className="pl-2 pr-4">
                <Search width={20} height={20} />
            </button>
            <input
                placeholder="Search photos"
                value={searchText}
                className="flex-1 bg-transparent focus:outline-none"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    updateSearchText(e.target.value);
                }}
            />
        </form>
    );
}
