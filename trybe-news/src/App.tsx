import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Header from './components/header'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
