import { useContext } from "react";
import { Link } from "react-router-dom";
import NewsContext from "../../context/NewsContext";
import { Images, News } from "../../types";
import daysPosted from "../../services/daysPosted";

const BASE_URL = 'https://agenciadenoticias.ibge.gov.br/';

function MostRecent() {
  const { news, fetchCompleted } = useContext(NewsContext);

  const mostRecentNew = fetchCompleted ? news[0] : {} as News;

  const images = fetchCompleted ? JSON.parse(news[0].imagens) : {} as Images;

  const postedDate = fetchCompleted ? news[0].data_publicacao : '';

  return (
    <div>
      <img src={ `${BASE_URL}${images.image_intro}` } alt="Imagem na noticia principal" />
      <p>Noticia mais recente</p>
      <h2>{ mostRecentNew.titulo }</h2>
      <p>{ mostRecentNew.introducao }</p>
      <p>{ daysPosted(postedDate) }</p>
      <Link to='/'>Leia a noticia</Link>
      <button>Favoritar</button>
    </div>
  );
}

export default MostRecent;
