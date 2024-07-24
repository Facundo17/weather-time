
import { FaSearch } from "react-icons/fa";
import "./search.css";

export const Search = () => {
  return (
    <div className="input-wrapper">
        <FaSearch id="search-icon" />
        <input placeholder="Type to search..." />
    </div>
  )
}