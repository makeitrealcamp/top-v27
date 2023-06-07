import React from "react";

const FavoritesContext = React.createContext({
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
})

export default FavoritesContext;