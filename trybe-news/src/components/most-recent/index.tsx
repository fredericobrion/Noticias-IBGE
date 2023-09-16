import { useContext } from "react";
import { Link } from "react-router-dom";
import NewsContext from "../../context/NewsContext";
import { Images, News } from "../../types";
import daysPosted from "../../services/daysPosted";
import styles from './most-recent.module.css';

import emptyHeart from '../../assets/images/empty-heart.svg';
import filledHeart from '../../assets/images/filled-heart.svg';

const BASE_URL = 'https://agenciadenoticias.ibge.gov.br/';

function MostRecent() {
  const { news, fetchCompleted } = useContext(NewsContext);

  const mostRecentNew = fetchCompleted ? news[0] : {} as News;

  const images = fetchCompleted ? JSON.parse(news[0].imagens) : {} as Images;

  const postedDate = fetchCompleted ? news[0].data_publicacao : '';

  return (
    <div className={ styles.container }>
      <img
        className={ styles.mainImage }
        src={ `${BASE_URL}${images.image_intro}` }
        alt="Imagem na noticia principal"
      />
      <div>
        <h6>Notícia mais recente</h6>
        <button>
          <img src={ filledHeart } alt="" />
        </button>
        <h2>{ mostRecentNew.titulo }</h2>
        <p>{ mostRecentNew.introducao }</p>
        <span>{ daysPosted(postedDate) }</span>
        <Link to='/' className={ styles.link }>Leia a noticia</Link>
      </div>
    </div>
  );
}

export default MostRecent;
