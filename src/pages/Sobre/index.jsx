

const Sobre = () => {
  return (
    <div className="">

      <div
        className="h-screen w-full bg-cover bg-center display flex flex-col justify-center items-center"
        style={{ backgroundImage: "url('/Galeria/teste8.jpg')",
          backgroundAttachment: "fixed"
         }}
      ><h1 className="text-white text-6xl z-20 hover:scale-105 transition-all ">YUN LI</h1>
      <div className="flex gap-2">
         <h1 className="text-white text-2xl z-20 hover:scale-105 transition-all">Yung Lixo</h1>
         <span className="text-white  text-2xl z-20">|</span>
         <h1 className="text-white text-2xl z-20 hover:scale-105 transition-all">MC VV</h1>
      </div>
      <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="flex flex-col items-center  bg-black text-white ">
        <h1 className=" m-2 text-3xl">Sobre</h1>
        <div className="flex justify-center">
          <p className="p-4 w-2/4">
          Começou sua carreira musical em 2009, mas só atuou com o vulgo YUNG LIXO a partir de 2017, com o lançamento de “OTACO”, presente no EP GAROTÃO. Em abril de 2018, lançou o álbum SEGURA ESSE MOLEQUE. Em janeiro de 2019, lançou a Mixtape Pra Te Impressionar, que posteriormente excluiu alegando que não representava a sonoridade que ele queria. No início de 2020, lançou o EP Sono Tapes contendo cinco músicas inéditas. Durante a pandemia da COVID-19, lançou o álbum Quarentapes, contando com dez músicas e a colaboração com Bife, Elkay, Tibba e yumaru. Ainda em 2020, o cantor lançou uma continuação do EP Sono Tapes e, em outubro, mais um álbum, TrashTalk, além de vários singles. Em 2021, o artista lançou seu álbum, Break Up Album contendo quatro músicas melancólicas.
          </p>
        </div>
      </div>
      <div
        className="h-96 w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/Galeria/bannersobre4.jpg')",
          backgroundAttachment: "fixed"
         }}
      ></div>
      <div className="flex flex-col  items-center  bg-black text-white ">
        <div className="flex flex-col m-5 items-center justify-center">
          <p className="p-4 w-2/4">
          "Victor define o estilo do Yung Lixo como rap em geral, tendo músicas do gênero trap, mas também músicas mais voltadas para lo-fi e outros estilos de rap. Polaroid foi a primeira música mais voltada para lo-fi e “sad” que o músico lançou, antes disso a grande maioria eram traps com foco em comédia. A letra de Polaroid, seu maior sucesso até o momento é mais séria e voltada a um lado sentimental."
          </p>
          <iframe className='rounded-md border-4 border-slate-700' width="560" height="315" src="https://www.youtube.com/embed/byyo9dzh2sY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        </div>
      </div>
      <div
        className="h-96 w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/Galeria/bannersobre.jpg')",
          backgroundAttachment: "fixed"
         }}
      ></div>
      <div className="flex flex-col items-center  bg-black text-white ">
        <div className="flex justify-center">
          <p className="p-4 w-2/4">
          "Creio que eu comecei tudo como um passatempo, tudo que eu já fiz não passou de um teste de por pra frente coisas que eu gostava muito e me interessava em aprender. Não gosto de me rotular muito porque começo a me sentir meio prepotente, mas acredito que atualmente eu diria que estou melhorando em fazer vídeos e músicas, infelizmente a carreira de desenhista ficou pra trás um pouco, hoje em dia só desenho as miniaturas dos vídeos do meu canal."
          </p>
        </div>
      </div>
    </div>

  );
};

export default Sobre;
