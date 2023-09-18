import { Link } from 'react-router-dom';
import NewsContext from '../../context/NewsContext';
import { useContext } from 'react';
import { News } from '../../types';
import daysPosted from '../../services/daysPosted';
import styles from './news-card.module.css';

import emptyHeart from '../../assets/images/empty-heart.svg';
import filledHeart from '../../assets/images/filled-heart.svg';
import { favoriteNews } from '../../services/favoriteNews';

type NewsCardProsps = {
  notice: News;
};

function NewsCard({ notice }: NewsCardProsps) {
  const { favoriteNewsList, updateFavoriteNews } = useContext(NewsContext);

  const postedDate = notice.data_publicacao;

  const localStorageFavorites = JSON.parse(localStorage.getItem('favorites')) as News[] || [] as News[];

  const isFavorite = localStorageFavorites.some((favorite) => favorite.id === notice.id);

  return (
    <div className={ styles.container__card }>
      <h4>{notice.titulo}</h4>
      <p>{notice.introducao}</p>
      <div>
        <p>{daysPosted(postedDate)}</p>
        <a
          className={ styles.link }
          href={ notice.link }
          target='_blank'
        >
          Leia a Noticia
        </a>
      </div>
      <button
        onClick={ () => favoriteNews(notice.id, favoriteNewsList, updateFavoriteNews, notice) }
      >
        <img src={ isFavorite ? filledHeart : emptyHeart } alt="" />
      </button>
    </div>
  );
}

export default NewsCard;
