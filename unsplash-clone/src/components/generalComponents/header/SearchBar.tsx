import Search from "../../../images/search-line.svg";
import { useState } from 'react';

export default function SearchBar() {
    const [searchText, updateSearchText] = useState("");

    const changeText = (e:any)=> {
        updateSearchText(e.target.value)
    }
    return (
        <>
        <form className="form-container">
            <button className="search-btn">
                <img src={Search}></img>
            </button>
            <input placeholder="Search photos" value= { searchText } className="search-input" onChange={ changeText }></input>
        </form>
        </>
    );
}
