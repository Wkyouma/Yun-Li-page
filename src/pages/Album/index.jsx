import { useParams } from 'react-router-dom';
import Albuns from '../../Json/Tracks.json';
import Teste from '/Galeria/teste.jpg';
import testes from '/Galeria/teste1.jpg'

const Album = () => {
    const { id } = useParams();
    const albumId = parseInt(id);
    const album = Albuns.find(album => album.id === albumId);

   

    const getAlbumColors = (albumId) => {
        const colors = {
            1: { back: Teste, text: "text-green-300", accent: "text-green-500", hover: "hover:text-green-400" },
            2: { back: testes, text: "text-blue-300", accent: "text-blue-500", hover: "hover:text-blue-400" },
            3: { back: "bg-pink-400", text: "text-pink-300", accent: "text-pink-500", hover: "hover:text-pink-400" }
        };
        return colors[albumId] || colors[1];
    };

    const colors = getAlbumColors(albumId);

    return (
        <div className={`min-h-screen pt-20 px-4 bg-cover bg-center bg-no-repeat`} style={{ backgroundImage: `url(${colors.back})` }}>
              <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-8">
                        <h1 className={`text-4xl md:text-6xl font-bold ${colors.text} mb-2`}>
                            {album.titulo}
                        </h1>
                        <div className="flex items-center gap-4 text-gray-400">
                            <span className="text-xl">{album.artista}</span>
                        </div>
                    </div>
                </div>
                <div className="space-y-4 justify-center flex">
                    <ul className="relative z-10">
                        {album.musicas.map((musica) => (
                            <li
                                className={`bg-black/80 backdrop-blur-sm text-white m-1 p-2 ${colors.hover} w-72
                                          transition-all duration-300 hover:scale-105`}
                                key={musica.id}
                                tabIndex={0}
                                role="button"
                            >
                                {musica.nome} - {musica.duracao}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Album;