import { motion } from "framer-motion";

const Sobre = () => {
  return (
    <div className="">

      <div
        className="h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/Galeria/teste8.jpg')",
          backgroundAttachment: "fixed"
         }}
      ></div>
      <div className="flex flex-col items-center  bg-black text-white ">
        <h1 className=" m-2 text-3xl">Sobre</h1>
        <div className="flex justify-center">
          <p className="p-4 w-2/4">
          l Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur recusandae ad beatae velit, ea aliquid debitis laboriosam maiores impedit in, a nemo, perferendis eveniet amet aliquam! Numquam totam deleniti cupiditate?
          </p>
        </div>
      </div>
      <div
        className="h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/Galeria/album2.jpg')",
          backgroundAttachment: "fixed"
         }}
      ></div>
    </div>
  );
};

export default Sobre;
