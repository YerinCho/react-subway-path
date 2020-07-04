import React, {useEffect, useState} from "react";

const Favorite = ({isFavorite, departure, arrival}) => {
  const [favorite, setFavorite] = useState(isFavorite);

  useEffect(() => {
    setFavorite(isFavorite);
  },[departure])

  useEffect(() => {
    setFavorite(isFavorite);
  },[arrival])

  const changeFavorite = () => {
    setFavorite(!favorite);
  }

  return (
    <button
      id="favorite-button"
      className={`favorite-button mdi ${favorite ? "mdi-star text-yellow-500" : "mdi-star-outline text-white bg-yellow-500"} absolute bg-transparent d-inline-block font-semibold py-2 px-3 hover:border-transparent rounded-full z-10`}
      onClick={changeFavorite}
    >
    </button>
  );
}
export default Favorite