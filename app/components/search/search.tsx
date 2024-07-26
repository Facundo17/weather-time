import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./search.css";
import { SearchResultModel } from "@/app/models/searchResults.model";

// no es buena practica dejar los parameters y props como any
export default function Search({ setResults, url }: any) {
  const [input, setInput] = useState("");

  // usando un API de prueba
  // hace falta hacer un delay en la búsqueda (para no llamar cada vez que se ingresa un caracter)
  const fetchData = (value: string) => {
    // minimo 3 caracteres para que funcione la búsqueda
    if (value.length >= 3) {
      let requestURL = url + "&q=" + value;
      fetch(requestURL)
        .then((response) => response.json())
        .then((json: SearchResultModel) => {
          setResults(json);
        });
    }
  };

  const handleChange = (value: string) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}
