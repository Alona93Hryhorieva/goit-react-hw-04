import { useEffect, useState } from "react";
import { fetchImages } from "../../unsplashApi";
// import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";

export default function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleSearchSubmit = (newQuery) => {
    setQuery(newQuery);
    console.log("Search query:", newQuery);
  };

  useEffect(() => {
    async function getImages() {
      if (query === "") return;
      setLoading(true);
      try {
        const data = await fetchImages(query, page);
        setImages(data.results);
        console.log("Fetched images:", data.results);
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    }
    getImages();
  }, [query, page]);

  return (
    <div>
      <SearchBar onSubmit={handleSearchSubmit} />
      {/* <p>Current Search Query: {query}</p> */}
      {loading && <p>Loading photos. Please wait...</p>}
      {images.length > 0 && <ImageGallery images={images} />}
    </div>
  );
}
