import MostRecent from '../../components/most-recent';
import { useContext, useState } from 'react';
import NewsContext from '../../context/NewsContext';
import NewsCard from '../../components/news-card';
import styles from './home.module.css';

import listIcon from '../../assets/images/list-icon.svg'
import cardIcon from '../../assets/images/card-icon.svg'
import { News } from '../../types';

function Home() {
  const { news, fetchCompleted, favoriteNewsList, styleNews, updateStyle } = useContext(NewsContext);

  const [newsToShow, setNewsToShow] = useState<'recents' | 'favorites' | 'release' | 'news'>('recents');
  const [newsQuantity, setNewsQuantity] = useState(10);
  const [filter, setFilter] = useState('');

  if (!fetchCompleted) return (<h1>Carregando...</h1>);

  const newsList = () => {
    if (newsToShow === 'recents') return news.filter((_, index) => index !== 0);
    if (newsToShow === 'release') return news.filter((notice) => notice.tipo === 'Release');
    if (newsToShow === 'news') return news.filter((notice) => notice.tipo === 'Notícia');
    if (newsToShow === 'favorites') return favoriteNewsList;
    return [] as News[];
  }

  const newsListToDisplay = newsList().filter((notice) => notice.titulo.toLowerCase().includes(filter.toLowerCase()));

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
            className={ newsToShow === 'release' ? styles.typeSelected : '' }
            onClick={ () => setNewsToShow('release') }
          >
            Release
          </button>
          <button
            className={ newsToShow === 'news' ? styles.typeSelected : '' }
            onClick={ () => setNewsToShow('news') }
          >
            Notícia
          </button>
          <button
            className={ newsToShow === 'favorites' ? styles.typeSelected : '' }
            onClick={ () => setNewsToShow('favorites') }
          >
            Favoritas
          </button>
          <input
            type="text"
            value={ filter }
            placeholder="Filtre por título"
            onChange={ (e) => setFilter(e.target.value) }
          />
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
        {newsToShow === 'favorites' && favoriteNewsList.length === 0 ?
        <h2>Não há notícias favoritas</h2>
        : newsListToDisplay.length === 0 ?
        <h2>Nenhum resultado encontrado</h2>
        :newsListToDisplay.map((notice, index) => {
          if (index < newsQuantity) {
            return <NewsCard key={notice.id} notice={notice} />;
          }
        })}
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
