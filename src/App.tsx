import './App.css'
import Home from './pages/home'
import Header from './components/header'
import { useContext, useEffect } from 'react'
import NewsContext from './context/NewsContext'
import { getNews } from './services/apiFetchs'

function App() {
  const { updateNews, updateCompleted } = useContext(NewsContext);

  useEffect(() => {
    const apiResult = async () => {
      const response = await getNews();
      updateNews(response.items);
      updateCompleted(true);
    };
    apiResult();
  }, []);

  return (
    <>
      <Header />
      <Home />
    </>
  )
}

export default App
