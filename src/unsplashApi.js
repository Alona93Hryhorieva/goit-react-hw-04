import axios from "axios";

const API_KEY = "Client-ID eveoGfY9v-_vE6YRah7GhiqRw7dhND10Bec3NxLWXH8";
const baseURL = "https://api.unsplash.com/search/photos";

export const fetchImages = async (searchQuery, currentPage) => {
  const response = await axios.get(baseURL, {
    headers: {
      Authorization: API_KEY,
    },
    params: {
      query: searchQuery,
      page: currentPage,
      per_page: 10,
    },
  });

  return response.data.results;
};
