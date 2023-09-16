import MostRecent from "../../components/most-recent";
import { useContext, useEffect } from 'react'
import { getNews } from "../../services/apiFetchs";
import NewsContext from "../../context/NewsContext";

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

  console.log(news[0])

  return (
    <div>
      <MostRecent />
    </div>
  );
}

export default Home;