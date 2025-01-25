import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Section = ({ title, subtitle, bgImage, borderColor, buttonColor, textColor, albumId }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768); // Ajuste este valor conforme necessário
        };

        // Verifica o tamanho inicial da tela
        checkMobile();

        // Adiciona event listener para atualizar quando a tela for redimensionada
        window.addEventListener('resize', checkMobile);

        // Limpa o event listener quando o componente for desmontado
        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    return (
        <div className="relative h-screen overflow-hidden">
            <div 
                className={`
                    ${isMobile 
                        ? 'bg-cover bg-center' 
                        : 'bg-fixed bg-center bg-cover'
                    } 
                    h-screen border-b-8 ${borderColor}`
                } 
                style={{ 
                    backgroundImage: `url(${bgImage})`,
                    backgroundAttachment: isMobile ? 'scroll' : 'fixed',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0 bg-black/50">
                    <div className="pt-20 min-h-screen flex flex-col items-center justify-center text-white text-center px-4">
                        <h1 className={`text-5xl sm:text-6xl md:text-8xl font-whisper font-bold mb-4 ${textColor}`}>
                            {title}
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl mb-8">
                            {subtitle}
                        </p>
                        <Link 
                            to={`/album/${albumId}`}
                            className={`${buttonColor} hover:bg-opacity-80 text-white font-bold py-3 px-8 rounded-full 
                                    transform transition hover:scale-105 hover:shadow-neon`}
                        >
                            Ouvir Agora
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section;