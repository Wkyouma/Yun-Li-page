import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Nav from './componentes/Nav'
import Album from './pages/Album/index';
import Sobre from './pages/Sobre/index'
import Footer from './componentes/footer'
import Loja from './pages/Loja/index'
import { CartProvider } from './context/CardContext';
import Carrinho from './pages/Carrinho';
function App() {
  return (
    <BrowserRouter>
    <CartProvider>
    <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/About' element={<Sobre></Sobre>}></Route>
        <Route path='/Loja' element={<Loja></Loja>}></Route>
        <Route path='/Carrinho' element={<Carrinho></Carrinho>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        <Route path="/album/:id" element={<Album />} />
      </Routes>
      <Footer></Footer>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
