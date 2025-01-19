const Cards = ({ background }) => {
  const url = background;
  return (
    <>
      <div className="grid w-72 m-2 ">
        <div className="group relative items-center justify-center overflow-hidden cursor-pointer rounded-md">
          <div className="h-96 w-72">
            <img
              className="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform"
              src={url}
              alt="teste"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[59%] group-hover:translate-y-0 transition-all">
            <h1 className="text-3xl font-bold text-white">teste</h1>
            <p className="text-white text-lg italic mb-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing e
            </p>
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