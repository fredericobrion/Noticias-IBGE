import MostRecent from "../../components/most-recent";
import { useContext, useEffect } from 'react'
import { getNews } from "../../services/apiFetchs";
import NewsContext from "../../context/NewsContext";
import NewsCard from "../../components/news-card";

function Home() {
  const { news, updateNews, updateCompleted } = useContext(NewsContext);

  useEffect(() => {
    const apiResult = async () => {
      const response = await getNews();
      updateNews(response.items);
      updateCompleted(true);
    };
    apiResult();
  }, []);


  return (
    <div>
      <MostRecent />
      {news.map((_, index) => <NewsCard key={ index } index={index} />)}
    </div>
  );
}

export default Home;