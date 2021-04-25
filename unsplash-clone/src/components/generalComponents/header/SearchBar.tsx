import { useState } from "react";
import Search from "../images/Search";

export default function SearchBar() {
    const [searchText, updateSearchText] = useState<string>("");

    const changeText = (e: any) => {
        updateSearchText(e.target.value);
    };
    return (
        <>
            <form className="flex border rounded-2xl bg-gray-300 w-3/4">
                <button className="search-btn">
                    <Search width={30} height={30} cls="px-2" />
                </button>
                <input
                    placeholder="Search photos"
                    value={searchText}
                    className="flex w-full bg-transparent focus:outline-none"
                    onChange={changeText}
                ></input>
            </form>
        </>
    );
}
