import NewsCard from "../../components/news-card";
import { News } from "../../types";

function FavoritesPage() {
  const localStorageFavorites = JSON.parse(localStorage.getItem('favorites')) as News[] || [] as News[];

  if (localStorageFavorites.length === 0) {
    return <h1>Não há notícias favoritadas</h1>;
  }

  return (
    <div>
      {localStorageFavorites.map((notice) => <NewsCard key={notice.id} notice={notice}/>)}
    </div>
  );
}

export default FavoritesPage;
