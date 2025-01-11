import { motion } from "framer-motion";
import Section from "../../componentes/Section";
const Sobre = () => {
  return (
  <div className={`relative h-screen bg-fixed bg-center bg-cover bg-no-repeat border-b-8 border-black`} 
    style={{ backgroundImage: "url(./Galeria/teste8.jpg)" }}>
    <div className="absolute inset-0 bg-black/50">
       <div className="pt-20 min-h-screen flex flex-col items-center justify-center text-white text-center px-4">
       </div>
    </div>
    </div>
    
  );
};

export default Sobre;