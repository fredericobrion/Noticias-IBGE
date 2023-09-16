import { Link } from "react-router-dom";

function NewsCard() {
  return (
    <div>
      <h4>Title</h4>
      <p>Content</p>
      <p>Date</p>
      <Link to='/'>Leia a Noticia</Link>
      <button>Favoritar</button>
    </div>
  );
}

export default NewsCard;
