import MostRecent from '../../components/most-recent';
import { useContext, useEffect, useState } from 'react';
import { getNews } from '../../services/apiFetchs';
import NewsContext from '../../context/NewsContext';
import NewsCard from '../../components/news-card';
import styles from './home.module.css';

function Home() {
  const { news, updateNews, updateCompleted } = useContext(NewsContext);

  const [newsQuantity, setNewsQuantity] = useState(9);

  useEffect(() => {
    const apiResult = async () => {
      const response = await getNews();
      updateNews(response.items);
      updateCompleted(true);
    };
    apiResult();
  }, []);

  return (
    <div className={ styles.container }>
      <MostRecent />
      <div className={ styles.container__news }>
        {news.map((_, index) => {
          if (index < newsQuantity) {
            return <NewsCard key={index} index={index} />;
          }
        })}
      </div>
      {newsQuantity < 100 && <button
        className={ styles.moreNews }
        onClick={() => setNewsQuantity(newsQuantity + 9)}
      >
        MAIS NOTÍCIAS
      </button>}
      
    </div>
  );
}

export default Home;
