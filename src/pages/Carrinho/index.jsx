import { useContext } from "react";
import { CartContext } from '../../context/CardContext'

const Carrinho = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  return (
    <div className="h-screen flex items-center justify-center flex-col bg-gradient-to-t from-slate-700 to-black  text-white">
      <h1 className="text-4xl text-center py-8">Carrinho</h1>
      <div className="px-8">
        {cart.length === 0 ? (
          <p className="text-center">O carrinho está vazio.</p>
        ) : (
          <div>
            <ul>
              {cart.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center py-4 border-b border-gray-600"
                >
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
            <button
              onClick={clearCart}
              className="mt-4 bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
            >
              Limpar Carrinho
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Carrinho;
