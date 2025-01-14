import { FaInstagram, FaFacebook, FaTwitter, FaSpotify } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="bg-gray-900 text-white py-6">
            <div className="max-w-6xl mx-auto flex flex-col items-center">
               
                <div className="flex space-x-6 mb-4">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300 transition duration-300">
                        <FaInstagram className="w-6 h-6" />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300 transition duration-300">
                        <FaFacebook className="w-6 h-6" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300 transition duration-300">
                        <FaTwitter className="w-6 h-6" />
                    </a>
                    <a href="https://www.spotify.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300 transition duration-300">
                        <FaSpotify className="w-6 h-6" />
                    </a>
                </div>
         
            </div>
        </div>
    );
}

export default Footer;