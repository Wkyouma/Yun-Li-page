import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="bg-black/95 fixed w-full z-50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link to="/" className="text-white text-2xl font-bold hover:text-green-500 transition-colors">
                        YUN LI
                    </Link>
                    
                    <div className="hidden md:flex space-x-8">
                        <Link to="/" className="text-gray-300 hover:text-green-500 transition-colors">
                            Home
                        </Link>
                        <Link to="/Loja" className="text-gray-300 hover:text-green-500 transition-colors">
                            Loja
                        </Link>
                        <Link to="/about" className="text-gray-300 hover:text-green-500 transition-colors">
                            Sobre
                        </Link>
                     
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;