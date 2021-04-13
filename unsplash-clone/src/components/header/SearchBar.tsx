import Search from "../../images/search-line.svg";

export default function SearchBar() {
    return (
        <form className="form-container">
            <button className="search-btn">
                <img src={Search}></img>
            </button>
            <input className="search-input"></input>
        </form>
    );
}
