import Cards from "../../componentes/Cards";
import Carousel from "../../componentes/carrossel";
import product  from './Loja.json'

const Loja = () => {
  return (
    <div className="bg-gradient-to-t from-slate-700 to-black h-auto">
      {/* Seção do Carrossel */}
      <div className="bg-transparent py-16">
        <div className="mx-auto px-4">
          <Carousel />
        </div>
      </div>

      {/* Seção do Conteúdo */}
      <div className="flex flex-col items-center ">
        <h1 className="text-4xl md:text-5xl text-center text-white mb-5">Loja</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {
            product.map((product, index ) => (
              <Cards key={index} Titulo={product.titulo} texto={product.preço} background={product.frente} backgroundHover={product.atras} />
            ))
          } 
        </div>
      </div>
    </div>
  );
};

export default Loja;
