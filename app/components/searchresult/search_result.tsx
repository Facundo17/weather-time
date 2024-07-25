import "./search_result.css";

export const SearchResult = ({ result }: any) => {
  return (
    <div className="search-result" onClick={(e) => alert(result.name)}>
      {result.name}
    </div>
  );
};
