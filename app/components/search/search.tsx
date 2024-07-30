import { useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./search.css";
import { SearchResultModel } from "@/app/models/searchResults.model";

// no es buena practica dejar los parameters y props como any
export default function Search({ setResults, url }: any) {
  const [input, setInput] = useState("");

  const debounceTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const DELAY = 300; // 0.3 segundos

  const fetchData = () => {
    // minimo 3 caracteres para que funcione la búsqueda
    let requestURL = url + "&q=" + input;
    fetch(requestURL)
      .then((response) => response.json())
      .then((json: SearchResultModel) => {
        setResults(json);
      });
  };

  // retrasar la función para no buscar en cada tecla que se presiona
  const debounce = (func: () => void, delay: number) => {
    return function (...args: []) {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
      debounceTimeout.current = setTimeout(() => {
        func(...args);
        debounceTimeout.current = null;
      }, delay);
    };
  };

  const debouncedSearch = debounce(fetchData, DELAY);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInput(value);
    if (value.length >= 3) {
      debouncedSearch();
    } else if (value.length <= 0) {
      setResults([]);
    }
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={handleInputChange}
      />
    </div>
  );
}
