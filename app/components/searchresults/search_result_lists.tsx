import { SearchResult } from "../searchresult/search_result";
import "./search_result_lists.css";

// NO es buena práctica usar any para el tipo
export const SearchResultList = ({ results }: any) => {
  return (
    <div className="results-list">
      {results.map((result: any, id: any) => {
        return <SearchResult result={result} key={id} />;
      })}
    </div>
  );
};
