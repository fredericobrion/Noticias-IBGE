import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Header from './components/header'
import FavoritesPage from './pages/favorites'
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </>
  )
}

export default App
