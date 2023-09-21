import { useContext } from 'react';
import NewsContext from '../../context/NewsContext';
import { Images, News } from '../../types';
import daysPosted from '../../services/daysPosted';
import styles from './most-recent.module.css';

import emptyHeart from '../../assets/images/empty-heart.svg';
import filledHeart from '../../assets/images/filled-heart.svg';
import { favoriteNews } from '../../services/favoriteNews';

const BASE_URL = 'https://agenciadenoticias.ibge.gov.br/';

function MostRecent() {
  const { news, fetchCompleted, favoriteNewsList, updateFavoriteNews } =
    useContext(NewsContext);

  const mostRecentNew = fetchCompleted ? news[0] : ({} as News);

  const images = fetchCompleted ? JSON.parse(news[0].imagens) : ({} as Images);

  const postedDate = fetchCompleted ? news[0].data_publicacao : '';

  const isFavorite = favoriteNewsList.some(
    (favorite) => favorite.id === mostRecentNew.id
  );

  return (
    <div className={styles.container}>
      <a href={mostRecentNew.link} target="_blank">
        <img
          className={styles.mainImage}
          src={`${BASE_URL}${images.image_intro}`}
          alt="Imagem na noticia principal"
        />
      </a>
      <div>
        <h6>Notícia mais recente</h6>
        <button
          className={ styles.favoriteButton }
          data-testid="favorite-button"
          onClick={() =>
            favoriteNews(
              mostRecentNew.id,
              favoriteNewsList,
              updateFavoriteNews,
              mostRecentNew
            )
          }
        >
          <img
            src={isFavorite ? filledHeart : emptyHeart}
            alt={ isFavorite ? 'Filled heart' : 'Empty heart' }
          />
        </button>
        <a href={mostRecentNew.link} target="_blank">
          <h2>{mostRecentNew.titulo}</h2>
        </a>
        <a href={mostRecentNew.link} target="_blank">
        <p>{mostRecentNew.introducao}</p>
        </a>
        <span>{daysPosted(postedDate)}</span>
        <a className={styles.link} href={mostRecentNew.link} target="_blank">
          Leia a noticia
        </a>
      </div>
    </div>
  );
}

export default MostRecent;
