import Section from '../../componentes/Section/index'
import Carousel from '../../componentes/carrossel';
const Home = () => {
    
    return (
        <div className="relative">
            <Section
                title="Validation"
                subtitle="teste | teste"
                bgImage="/Galeria/teste.jpg"
                borderColor="border-green-500"
                buttonColor="bg-green-600"
                textColor="text-green-300"
            />
            
            <Section
                title="Bittersweet Memories"
                subtitle="teste | teste"
                bgImage="/Galeria/teste1.jpg"
                borderColor="border-blue-500"
                buttonColor="bg-blue-600"
                textColor="text-blue-300"
            />
            
            <Section
                title="13 Lentes de um final feliz"
                subtitle="teste | teste"
                bgImage="/Galeria/teste2.jpg"
                borderColor="border-pink-500"
                buttonColor="bg-pink-600"
                textColor="text-pink-300"
            />

             {/* Seção do Carrossel */}
             <div className="bg-black py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-white text-center mb-12">
                        Destaques
                    </h2>
                    <Carousel />
                </div>
            </div>
        </div>
    );
}

export default Home;
