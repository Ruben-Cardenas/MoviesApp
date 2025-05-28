import React, { createContext, useState } from 'react';

export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  const toggleFavorite = (movie) => {
    setFavoriteMovies((prevFavorites) => {
      if (prevFavorites.find((fav) => fav.id === movie.id)) {
        // Si ya está, lo elimina
        return prevFavorites.filter((fav) => fav.id !== movie.id);
      } else {
        // Si no está, lo añade
        return [...prevFavorites, movie];
      }
    });
  };

  return (
    <FavoriteContext.Provider value={{ favoriteMovies, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};
