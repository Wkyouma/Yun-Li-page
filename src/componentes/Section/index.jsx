
import {Link} from 'react-router-dom';

const Section = ({ title, subtitle, bgImage, borderColor, buttonColor, textColor, albumId }) => {
   
    return (
        <div className="relative h-screen overflow-hidden">
            <div 
               
        
                className={`bg-fixed bg-center bg-cover h-screen border-b-8  md:bg-scroll ${borderColor}`} 
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <div className="absolute inset-0 bg-black/50">
                    <div className="pt-20 min-h-screen flex flex-col items-center justify-center text-white text-center px-4">
                        <h1 className={`text-6xl md:text-8xl font-whisper font-bold mb-4 ${textColor}`}>
                            {title}
                        </h1>
                        <p className="text-xl md:text-2xl mb-8">
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
