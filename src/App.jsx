import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/pages/Home'
import NotFound from './Components/pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
