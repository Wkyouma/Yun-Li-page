const Cards = ({ background, backgroundHover, Titulo, texto }) => {
    return (
      <>
        <div className="grid w-72 m-2">
          <div className="group relative items-center justify-center overflow-hidden cursor-pointer rounded-md">
            <div className="h-96 w-72">
              <img
                className="absolute top-0 left-0 h-full w-full object-cover group-hover:opacity-0 transition-opacity"
                src={background}
                alt="imagem frente"
              />
            </div>
            <div className="h-96 w-72 absolute inset-0 group-hover:opacity-100 transition-opacity">
              <img
                className="absolute top-0 left-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                src={backgroundHover}
                alt="imagem costas"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[55%] group-hover:translate-y-0 transition-all">
              <h1 className="text-3xl font-bold text-white">{Titulo}</h1>
              <p className="text-white text-lg italic mb-3">{texto}</p>
              <button className="rounded-full bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white hover:bg-slate-600">
                veja mais
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Cards;
  