import { SearchResultPropModel } from "@/app/models/searchResults.model";
import "./search_result.css";

export const SearchResult: React.FC<SearchResultPropModel> = ({
  result,
  onClick,
}) => {
  return (
    <div className="search-result" onClick={(e) => onClick(result)}>
      <p>
        {result.name}, {result.region}
      </p>
    </div>
  );
};
