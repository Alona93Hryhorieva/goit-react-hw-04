import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { fetchImages } from "../../unsplashApi";
import css from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
// Modal.setAppElement("#root");

export default function App() {
  //   const [inputValue, setInputValue] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalImages, setTotalImages] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState("");

  //   useEffect(() => {
  //     async function getImages() {
  //       if (query === "") return;
  //       setLoading(true);
  //       try {
  //         const data = await fetchImages(query, page);
  //         setImages(data);
  //         setLoading(true);
  //       } catch (error) {
  //         setError(true);
  //       } finally {
  //         setLoading(false);
  //       }
  //     }
  //     getImages();
  //   }, [query, page]);

  const handleSearch = async (newQuery) => {
    if (newQuery.trim() === "") {
      toast.error("Please enter a search query");
      return;
    }
    setImages([]);
    setPage(1);
    setTotalImages(0);
    setQuery(newQuery);
  };
  //  const handleSearch = async (newQuery) => {
  //    try {
  //      setImages([]);
  //      setQuery(newQuery);
  //      setError(false);
  //      setLoading(true);
  //      const data = await fetchImages(newQuery, page);
  //      setImages(data);
  //    } catch (error) {
  //      setError(true);
  //    } finally {
  //      setLoading(false);
  //    }
  //  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
    toast.error("Error loading additional images");
    // setTotalImages(page < total);
  };
  //   const handleLoadMore = async () => {
  //     try {
  //       setLoading(true);
  //       const data = await fetchImages(query, page + 1);
  //       setImages((prevImages) => [...prevImages, ...data]);
  //       setPage((prevPage) => prevPage + 1);
  //     } catch (error) {
  //       setError(true);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  useEffect(() => {
    if (query === "") {
      return;
    }

    async function getImages() {
      try {
        setLoading(true);
        setError(false);
        const { results, total } = await fetchImages(query, page);
        setImages((prevImages) => [...prevImages, ...results]);
        setTotalImages(page < total);
        // if (images.length + results.length >= total) {
        //   toast.error("There are no more images to upload");
        // }
      } catch (error) {
        setError(true);
        toast.error("Error loading images");
      } finally {
        setLoading(false);
      }
    }
    getImages();
  }, [query, page]);
  //     async function getImages() {
  //       try {
  //         setLoading(true);
  //         setError(false);
  //         const data = await fetchImages(query, page);
  //         setImages(data);
  //       } catch (error) {
  //         setError(true);
  //       } finally {
  //         setLoading(false);
  //       }
  //       getImages();
  //     }
  //   }, [query, page]);

  const openModal = (imageUrl) => {
    setSelectedImageUrl(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {totalImages && !loading && images.length > 0 && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      <ImageModal
        isOpen={modalIsOpen}
        imageUrl={selectedImageUrl}
        closeModal={closeModal}
      />
      <Toaster position="top-сenter" reverseOrder={false} />
      {error && <ErrorMessage />}
    </div>
  );
}
