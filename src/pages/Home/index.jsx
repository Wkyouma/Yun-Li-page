import Section from '../../componentes/Section/index'
import Carousel from '../../componentes/carrossel';
const Home = () => {
    
    return (
        <div className="relative bg-gradient-to-r from-slate-800  to-black">
            <Section
                title="Validation"
                subtitle="biffe | hakuro"
                bgImage="/Galeria/teste.jpg"
                borderColor="border-green-500"
                buttonColor="bg-green-600"
                textColor="text-green-300"
                albumId={1}
            />
            
            <Section
                title="Bittersweet Memories"
                subtitle="biffe  | hakuro"
                bgImage="/Galeria/teste1.jpg"
                borderColor="border-blue-500"
                buttonColor="bg-blue-600"
                textColor="text-blue-300"
                albumId={2}
            />
            
            <Section
                title="13 Lentes de um final feliz"
                subtitle="biffe | hakuro"
                bgImage="/Galeria/teste2.jpg"
                borderColor="border-pink-500"
                buttonColor="bg-pink-600"
                textColor="text-pink-300"
                albumId={3}
            />
           
             
        </div>
    );
}

export default Home;
