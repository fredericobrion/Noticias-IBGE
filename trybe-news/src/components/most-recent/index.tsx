import { useContext } from "react";
import { Link } from "react-router-dom";
import NewsContext from "../../context/NewsContext";
import { Images, News } from "../../types";

const BASE_URL = 'https://agenciadenoticias.ibge.gov.br/';

function MostRecent() {
  const { news, fetchCompleted } = useContext(NewsContext);

  const mostRecentNew = fetchCompleted ? news[0] : {} as News;

  const images = fetchCompleted ? JSON.parse(news[0].imagens) as Images : {} as Images;

  //
  const postedDate = fetchCompleted ? news[0].data_publicacao : '';
  const formatedPostedDate = `${postedDate.substring(6, 10)}/${postedDate.substring(3, 5)}/${postedDate.substring(0, 2)}`;

  const currentDate = new Date();
  const postedDateObject = new Date(formatedPostedDate);

  const differenceTime = currentDate.getTime() - postedDateObject.getTime();
  const days = Math.floor(differenceTime / (1000 * 60 * 60 * 24));
  console.log(days);
  
  const daysPosted = () => {
    switch (days) {
      case 0:
        return 'Hoje';
      case 1:
        return '1 dia atrás';
      default:
        return `${days} dias atrás`;
    }
  };

  return (
    <div>
      <img src={ `${BASE_URL}${images.image_intro}` } alt="Imagem na noticia principal" />
      <p>Noticia mais recente</p>
      <h2>{ mostRecentNew.titulo }</h2>
      <p>{ mostRecentNew.introducao }</p>
      <p>{ daysPosted() }</p>
      <Link to='/'>Leia a noticia</Link>
      <button>Favoritar</button>
    </div>
  );
}

export default MostRecent;
