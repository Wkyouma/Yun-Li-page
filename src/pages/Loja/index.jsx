import Cards from "../../componentes/Cards";
import Carousel from "../../componentes/carrossel";

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
        {/* Seção do Conteiner dos cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <Cards background="./Galeria/teste.jpg" />
          <Cards background="./Galeria/teste2.jpg" />
          <Cards background="./Galeria/teste3.jpg" />
          <Cards background="./Galeria/foto.jpg" />
          <Cards background="./Galeria/foto.jpg" />
          <Cards background="./Galeria/foto.jpg" />
          <Cards background="./Galeria/foto.jpg" />
          <Cards background="./Galeria/foto.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Loja;
