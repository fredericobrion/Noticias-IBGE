import { Link } from "react-router-dom";
import NewsContext from "../../context/NewsContext";
import { useContext } from "react";
import { News } from "../../types";
import daysPosted from "../../services/daysPosted";

type NewsCardProsps = {
  index: number;
}

function NewsCard({ index }: NewsCardProsps) {
  const { news, fetchCompleted } = useContext(NewsContext);

  const newByIndex = fetchCompleted ? news[index] : {} as News;

  const postedDate = fetchCompleted ? newByIndex.data_publicacao : '';

  return (
    <div>
      <h4>{ newByIndex.titulo }</h4>
      <p>{ newByIndex.introducao }</p>
      <p>{ daysPosted(postedDate) }</p>
      <Link to='/'>Leia a Noticia</Link>
      <button>Favoritar</button>
    </div>
  );
}

export default NewsCard;
