import { useParams, Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { GoArrowLeft } from 'react-icons/go';
import Albuns from '../../Json/Tracks.json';
import Teste from '/Galeria/teste.jpg';
import testes from '/Galeria/teste1.jpg';

const Album = () => {
    const { id } = useParams();
    const albumId = parseInt(id);
    const album = Albuns.find(album => album.id === albumId);

    const getAlbumColors = (albumId) => {
        const colors = {
            1: { back: Teste, text: "text-green-300", accent: "text-green-500", hover: "hover:text-green-400", butao:"bg-green-400" },
            2: { back: testes, text: "text-blue-300", accent: "text-blue-500", hover: "hover:text-blue-400", butao:"bg-blue-400" },
            3: { back: "bg-pink-400", text: "text-pink-300", accent: "text-pink-500", hover: "hover:text-pink-400", butao:"bg-pink-400" },
            4: { back: "bg-pink-400", text: "text-pink-300", accent: "text-pink-500", hover: "hover:text-pink-400" }
        };
        return colors[albumId] || colors[1];
    };

    const colors = getAlbumColors(albumId);

    return (
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`relative min-h-screen pt-20 px-4 bg-cover bg-center bg-no-repeat`} 
        style={{ backgroundImage: `url(${colors.back})` 
        
        }}>
              <div className="absolute inset-0 h-full w-full bg-black/50"></div>
              <Link 
              to={"/"}
              className={`flex w-16 md:w-20 hover:bg-opacity-80 ${colors.butao} text-white font-bold py-2 md:py-3 px-6 md:px-8 
              rounded-full transform transition hover:scale-105 hover:shadow-neon`}>
                <GoArrowLeft />
              </Link>
            <div className="relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-8">
                        <h1 className={`text-3xl sm:text-4xl md:text-6xl font-bold ${colors.text} mb-2`}>
                            {album.titulo}
                        </h1>
                        <div className="flex items-center gap-4 text-gray-400">
                            <span className="text-lg md:text-xl">{album.artista}</span>
                        </div>
                    </div>
                </div>
                <div className="space-y-4 justify-center flex">
                    <ul className="grid grid-cols-1 sm:grid-cols-2  gap-4 mb-10">
                    {album.musicas.map((musica, index) => (
                        <motion.li 
                        key={musica.id}
                        initial={{ x: 5, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.09 }}
                            className={`bg-black/80 backdrop-blur-sm text-white  p-4 
                                          w-full sm:w-80 md:w-96 rounded-lg ${colors.hover} 
                                          transition-all duration-300 hover:scale-102
                                          hover:bg-black/90 group cursor-pointer`}
                           
                            
                            role="button"
                            onClick={() => window.open(musica.link, '_blank')}
                        >
                            <span className={`${colors.accent} font-medium w-6 text-center`}>
                                {String(index + 1).padStart(2, '0 ')}</span> 
                             <span> - </span> {musica.nome}
                        </motion.li>
                    ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
};

export default Album;
