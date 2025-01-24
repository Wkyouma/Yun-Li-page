import { useContext } from "react";
import { CartContext } from '../../context/CardContext'

const Carrinho = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const total = cart.reduce((acc, item) => acc + parseFloat(item.price.replace('R$', '').trim()), 0);
  return (
    <div className="h-auto flex items-center justify-center flex-col bg-gradient-to-t from-slate-700 to-black  text-white">
      <h1 className="mt-36 text-4xl text-center py-8">Carrinho</h1>
      <div className="px-8">
        {cart.length === 0 ? (
            <div className="h-screen">
             <p className="text-center">O carrinho está vazio.</p>
          </div>
        ) : (
          <div className="bg-white text-black h-auto min-h-96 flex flex-col m-5 rounded-md">
            <ul className="m-5">
              {cart.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center py-4 border-b border-gray-600 gap-4"
                >
                  <img className="w-20 h-35 rounded-md" src={item.front}></img>
                  <span>
                    {item.title} - {item.price}
                  </span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Remover
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex justify-between px-5 py-4">
              <span className="text-xl font-bold">Total:</span>
              <span className="text-xl font-bold">R$ {total.toFixed(2)}</span>
            </div>
            <div className="flex justify-center m-2 gap-4" >
            <button
              onClick={clearCart}
              className="mt-4 bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
            >
              Limpar Carrinho
            </button>
            <button
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-red-700"
            >
             Comprar
            </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Carrinho;
