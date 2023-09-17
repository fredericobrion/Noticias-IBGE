import { createContext } from 'react';
import { News } from '../types';

type NewsContextType = {
  news: News[];
  updateNews: (news: News[]) => void;
  fetchCompleted: boolean;
  updateCompleted: (arg: boolean) => void;
  favoriteNewsList: News[];
  updateFavoriteNews: (arg: News[]) => void;
}

const NewsContext = createContext({} as NewsContextType);

export default NewsContext;
