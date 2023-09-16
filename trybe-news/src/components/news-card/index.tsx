import { Link } from 'react-router-dom';
import NewsContext from '../../context/NewsContext';
import { useContext } from 'react';
import { News } from '../../types';
import daysPosted from '../../services/daysPosted';
import styles from './news-card.module.css';

import emptyHeart from '../../assets/images/empty-heart.svg';
import filledHeart from '../../assets/images/filled-heart.svg';

type NewsCardProsps = {
  index: number;
};

function NewsCard({ index }: NewsCardProsps) {
  const { news, fetchCompleted } = useContext(NewsContext);

  const newByIndex = fetchCompleted ? news[index] : ({} as News);

  const postedDate = fetchCompleted ? newByIndex.data_publicacao : '';

  return (
    <div className={ styles.container__card }>
      <h4>{newByIndex.titulo}</h4>
      <p>{newByIndex.introducao}</p>
      <div>
        <p>{daysPosted(postedDate)}</p>
        <Link to="/" className={ styles.link }>Leia a Noticia</Link>
      </div>
      <button>
        <img src={ filledHeart } alt="" />
      </button>
    </div>
  );
}

export default NewsCard;
