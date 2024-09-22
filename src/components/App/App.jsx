import { useEffect, useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import { getImages } from '../apiService/images';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';

export default function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(false);
  const [errorMes, setErrorMes] = useState('');
  const [loadMore, setLoadMore] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState({});

  useEffect(() => {
    if (!query) return;
    setLoader(true);
    const fetchData = async () => {
      try {
        const { results, total, total_pages } = await getImages(query, page);
        if (total === 0) {
          setIsEmpty(true);
          return;
        }

        setImages(prevState => [...prevState, ...results]);
        setLoadMore(page < total_pages);
      } catch (error) {
        setErrorMes(error.message);
      } finally {
        setLoader(false);
      }
    };

    fetchData();
  }, [query, page]);

  const onSubmit = text => {
    setImages([]);
    setQuery(text);
    setPage(1);
    setLoadMore(false);
    setIsEmpty(false);
    setErrorMes('');
  };

  const onLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalImage({});
  };

  const openModal = image => {
    setModalIsOpen(true);
    setModalImage(image);
  };
  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {isEmpty && (
        <p style={{ textAlign: 'center', marginTop: 10 }}>
          We can not find photos 🔎
        </p>
      )}
      {loadMore && <LoadMoreBtn onClick={onLoadMore} />}
      {errorMes && <ErrorMessage errorMes={errorMes} />}
      {loader && <Loader />}
      <ImageModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        src={modalImage.src}
        alt={modalImage.alt}
      />
    </>
  );
}