import NewsContext from '../../context/NewsContext';
import { useContext } from 'react';
import { Images, News } from '../../types';
import daysPosted from '../../services/daysPosted';
import styles from './news-card.module.css';

import emptyHeart from '../../assets/images/empty-heart.svg';
import filledHeart from '../../assets/images/filled-heart.svg';
import { favoriteNews } from '../../services/favoriteNews';

type NewsCardProsps = {
  notice: News;
};

const BASE_URL = 'https://agenciadenoticias.ibge.gov.br/';


function NewsCard({ notice }: NewsCardProsps) {
  const { favoriteNewsList, updateFavoriteNews, styleNews } = useContext(NewsContext);

  const images = JSON.parse(notice.imagens) as Images;

  const postedDate = notice.data_publicacao;

  const isFavorite = favoriteNewsList.some((favorite) => favorite.id === notice.id);

  if (styleNews === 'card') return (
    <div className={ styles.container__card }>
      <a href={ notice.link } target='_blank'>
        <h4>{notice.titulo}</h4>
      </a>
      <a href={ notice.link } target='_blank'>
        <p>{notice.introducao}</p>
      </a>
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

  return (
    <div className={ styles.container__list }>
      <a href={ notice.link } target='_blank' className={ styles.container__list__image }>
        <img
          src={ `${BASE_URL}${images.image_intro}` }
          alt="Imagem principal da notícia"
        />
      </a>
      <div>
        <a href={ notice.link } target='_blank'>
          <h4>{notice.titulo}</h4>
        </a>
        <a href={ notice.link } target='_blank'>
          <p>{notice.introducao}</p>
        </a>
        <div className={ styles.container__extra }>
          <span>{daysPosted(postedDate)}</span>
          <a
            className={ styles.link }
            href={ notice.link }
            target='_blank'
          >
            Leia a Noticia
          </a>
          <button
            onClick={ () => favoriteNews(notice.id, favoriteNewsList, updateFavoriteNews, notice) }
          >
            <img src={ isFavorite ? filledHeart : emptyHeart } alt="" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default NewsCard;
