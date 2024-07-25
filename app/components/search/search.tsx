import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./search.css";

// no es buena practica dejar los parameters y props como any
export default function Search({ setResults } : any) {
  const [input, setInput] = useState("");

  // usando un API de prueba
  // hace falta hacer un delay en la búsqueda (para no llamar cada vez que se ingresa un caracter)
  const fetchData = (value: string) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user: any) => {
          return value && user && user.name && user.name.toLowerCase().includes(value);
        });
        setResults(results);
      });
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
};
