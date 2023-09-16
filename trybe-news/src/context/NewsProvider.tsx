import { useState } from 'react';
import NewsContext from './NewsContext';
import { News } from '../types';

type NewsProviderProps = {
  children: React.ReactNode;
};

function NewsProvider({ children }: NewsProviderProps) {
  const [news, setNews] = useState<News[]>([]);
  const [fetchCompleted, setFetchCompleted] = useState(false);

  const updateNews = (news: News[]) => {
    setNews(news);
  }

  const updateCompleted = (arg: boolean) => {
    setFetchCompleted(arg);
  }

  const valueContext = {
    news,
    updateNews,
    fetchCompleted,
    updateCompleted,
  }

  return (
    <NewsContext.Provider value={ valueContext }>
      {children}
    </NewsContext.Provider>
  );
}

export default NewsProvider;
