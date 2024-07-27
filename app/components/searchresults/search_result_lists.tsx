import {
  SearchResultModel,
  SearchResultsPropModel,
} from "@/app/models/searchResults.model";
import { SearchResult } from "../searchresult/search_result";
import "./search_result_lists.css";

export const SearchResultList: React.FC<SearchResultsPropModel> = ({
  results,
  onClick,
}) => {
  return (
    <div className="results-list">
      {results.map((result: SearchResultModel, id: number) => {
        return <SearchResult result={result} onClick={onClick} key={id} />;
      })}
    </div>
  );
};
