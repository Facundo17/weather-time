export interface SearchResultsPropModel {
  results: SearchResultModel[];
  onClick: (e: SearchResultModel) => void;
}

export interface SearchResultPropModel {
  result: SearchResultModel;
  onClick: (e: SearchResultModel) => void;
}
export interface SearchResultModel {
  id: number;
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  url: string;
}
