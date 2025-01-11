import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Nav from './componentes/Nav'
import Album from './pages/Album';
import Sobre from './pages/Sobre/index'
function App() {
  return (
    <BrowserRouter>
    <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/About' element={<Sobre></Sobre>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        <Route path="/album" element={<Album />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
