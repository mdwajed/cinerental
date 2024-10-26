import { getImgUrl } from "../utils/movie-utils";
import tags from "../assets/tag.svg";
import { Rating } from "./Rating";
import { useContext, useState } from "react";
import MovieDetailModal from "./MovieDetailModal";
import { MovieContex } from "../contex/Provider";
import { toast } from "react-toastify";
const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedModal, setSelectedModal] = useState(false);
  const { state, dispatch } = useContext(MovieContex);

  const handleAddToCart = (event, movie) => {
    event.stopPropagation();
    const found = state.cartData.find((item) => {
      return item.id === movie.id;
    });
    if (!found) {
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          ...movie,
        },
      });
      toast.success(`The movie ${movie.title} is added to cart`, {
        position: "bottom-right",
      });
    } else {
      toast.error(`The movie ${movie.title} ia already added in the cart`, {
        position: "bottom-right",
      });
    }
  };

  const handleModalClose = () => {
    setSelectedModal(null);
    setShowModal(false);
  };

  const handleSelectMovie = () => {
    setSelectedModal(movie);
    setShowModal(true);
  };

  return (
    <>
      {showModal && (
        <MovieDetailModal
          onClose={handleModalClose}
          movie={selectedModal}
          onAddToCart={handleAddToCart}
        />
      )}
      <figure
        key={movie.id}
        className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl"
      >
        <a href="#" onClick={() => handleSelectMovie(movie)}>
          <img
            className="w-full object-cover"
            src={getImgUrl(`${movie.cover}`)}
            alt=""
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating value={movie.rating} />
            </div>
            <button
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
              onClick={(e) => handleAddToCart(e, movie)}
            >
              <img src={tags} alt="" />
              <span>${movie.price} | Add to Cart</span>
            </button>
          </figcaption>
        </a>
      </figure>
    </>
  );
};

export default MovieCard;
