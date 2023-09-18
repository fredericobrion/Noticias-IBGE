import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Header from './components/header'
import FavoritesPage from './pages/favorites'

function App() {
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
