import { Gif } from "./gif";

export interface Pagination {
  total_count: number;
  count: number;
  offset: number;
}

export interface Meta {
  status: number;
  msg: string;
  response_id: string;
}

export interface ApiResponse {
  data: Gif[];
  pagination: Pagination;
  meta: Meta;
}

export interface InfiniteGifsResponse {
  pages: ApiResponse[];
  pageParams: number[];
}
