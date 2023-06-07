import React, { useState } from "react";
import FavoritesContext from "./context";

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (character) => {
    setFavorites((currentFavorites) => [...currentFavorites, character]);
  };

  const removeFavorite = (characterId) => {
    setFavorites((currentFavorites) =>
      currentFavorites.filter((char) => char.id !== characterId)
    );
  };
  

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
