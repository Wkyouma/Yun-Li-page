import { FaInstagram, FaFacebook, FaTwitter, FaSpotify, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="bg-slate-800 text-white py-6">
            <div className="max-w-6xl mx-auto flex flex-col items-center">
               
                <div className="flex space-x-6 mb-4">
                    <a href="https://www.youtube.com/@yunglixo2147" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300 transition duration-300">
                        <FaYoutube className="w-6 h-6" />
                    </a>
                    <a href="https://open.spotify.com/intl-pt/artist/6ab8tnQvr8sXXIpSZCrbQs?si=8kI3i2pWT3qEPxQrWJBwhg" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300 transition duration-300">
                        <FaSpotify className="w-6 h-6" />
                    </a>
                </div>
                <a>Desenvolvido por Igor Terplak</a>
         
            </div>
        </div>
    );
}

export default Footer;