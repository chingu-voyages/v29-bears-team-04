import Search from "../../images/search-line.svg";

export default function SearchBar() {
    return (
        <div>
            <form>
                <button className="search-btn">
                    <img src={Search}></img>
                </button>
                <input></input>
            </form>
        </div>
    );
}
