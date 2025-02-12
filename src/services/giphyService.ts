import axios from 'axios';
import { ApiResponse } from '../types/api';

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
const BASE_URL = 'https://api.giphy.com/v1/gifs';

// Debugging API Key
console.log("API Key:", API_KEY);

export const fetchTrendingGifs = async (offset: number = 0): Promise<ApiResponse> => {
  try {

    console.log("📡 Fetching trending GIFs..."); // Debugging log

    const response = await axios.get<ApiResponse>(`${BASE_URL}/trending`, {
      params: {
        api_key: API_KEY,
        limit: 8,
        offset,
      },
    });

    if (!response.data?.data || !Array.isArray(response.data.data)) {
      throw new Error("Invalid API response structure for trending gifs api");
    }

    console.log("API Response for trending gifs api:", response?.data); // Debugging API Response

    return response.data;
  } catch (error) {

    console.error("❌ API Fetch Error for trending gifs api:", error);

    throw new Error("Failed to fetch GIFs for trending gifs api.");
  }
};

// Fetch search results
export const fetchSearchGifs = async (query: string, offset: number = 0): Promise<ApiResponse> => {
  try {

    console.log("📡 Fetching search GIFs for query:", query); // Debugging log

    const response = await axios.get<ApiResponse>(`${BASE_URL}/search`, {
      params: {
        api_key: API_KEY,
        q: query,
        limit: 8,
        offset,
      },
    });

    if (!response.data?.data || !Array.isArray(response.data.data)) {
      throw new Error("Invalid API response structure for search api");
    }

    console.log("Search API Response:", response?.data); // Debugging API Response

    return response.data;
  } catch (error) {

    console.error("❌ Search API Fetch Error:", error);

    throw new Error("Failed to search for GIFs.");
  }
};
