import Section from '../../componentes/Section/index'

const Home = () => {
    return (
        <div className="relative">
            <Section
                title="Validation"
                subtitle="teste | teste"
                bgImage="/Galeria/teste1.jpg"
                borderColor="border-green-500"
                buttonColor="bg-green-600"
                textColor="text-green-300"
            />
            
            <Section
                title="Bittersweet Memories"
                subtitle="teste | teste"
                bgImage="/Galeria/teste2.jpg"
                borderColor="border-blue-500"
                buttonColor="bg-blue-600"
                textColor="text-blue-300"
            />
            
            <Section
                title="13 Lentes de um final feliz"
                subtitle="teste | teste"
                bgImage="/Galeria/teste.jpg"
                borderColor="border-pink-500"
                buttonColor="bg-pink-600"
                textColor="text-pink-300"
            />
        </div>
    );
}

export default Home;
