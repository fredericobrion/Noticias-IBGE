import MostRecent from '../../components/most-recent';
import { useContext, useState } from 'react';
import NewsContext from '../../context/NewsContext';
import NewsCard from '../../components/news-card';
import styles from './home.module.css';

import listIcon from '../../assets/images/list-icon.svg'
import cardIcon from '../../assets/images/card-icon.svg'

function Home() {
  const { news, fetchCompleted, favoriteNewsList, styleNews, updateStyle } = useContext(NewsContext);

  const [newsToShow, setNewsToShow] = useState<'recents' | 'favorites'>('recents');

  const [newsQuantity, setNewsQuantity] = useState(10);

  if (!fetchCompleted) return (<h1>Carregando...</h1>);

  return (
    <div className={ styles.container }>
      <MostRecent />
      <div className={ styles.button__container }>
        <div className={ styles.type__container }>
          <button
            className={ newsToShow === 'recents' ? styles.typeSelected : '' }
            onClick={ () => setNewsToShow('recents') }
          >
            Mais recentes
          </button>
          <button
            className={ newsToShow === 'favorites' ? styles.typeSelected : '' }
            onClick={ () => setNewsToShow('favorites') }
          >
            Favoritas
          </button>
        </div>

        <div className={ styles.style__container }>
          <button onClick={ () => updateStyle('list') }>
            <img src={ listIcon } alt="" />
          </button>
          <button onClick={ () => updateStyle('card') }>
            <img src={ cardIcon } alt="" />
          </button>
        </div>
      </div>
      <div className={ styles.container__news }>
        {newsToShow === 'recents'
        ? news.map((notice, index) => {
          if (index < newsQuantity && index !== 0) {
            return <NewsCard key={notice.id} notice={notice} />;
          }
        })
        : favoriteNewsList.length ? favoriteNewsList.map((notice, index) => {
          if (index < newsQuantity) {
            return <NewsCard key={notice.id} notice={notice} />;
          }
        }) : <h2>Não há notícias favoritas</h2>
      }
      </div>
      {(newsQuantity < 100 && newsToShow === 'recents') && <button
        className={ styles.moreNews }
        onClick={() => setNewsQuantity(newsQuantity + 9)}
      >
        MAIS NOTÍCIAS
      </button>}
      
    </div>
  );
}

export default Home;
