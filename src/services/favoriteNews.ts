import { News } from "../types";

export const favoriteNews = (
  id: number,
  favorites: News[],
  updateFavoriteNews: (arg: News[]) => void,
  newToFavorite: News,
  ) => {
  const favoriteIndex = favorites.findIndex((favorite) => favorite.id === id);
  if (favoriteIndex === -1) {
    updateFavoriteNews([...favorites, newToFavorite]);
    localStorage.setItem("favorites", JSON.stringify([...favorites, newToFavorite]));

  } else {
    const newFavoriteList = favorites.filter((favorite) => favorite.id !== id);
    updateFavoriteNews(newFavoriteList);
    localStorage.setItem("favorites", JSON.stringify(newFavoriteList));
  }
};