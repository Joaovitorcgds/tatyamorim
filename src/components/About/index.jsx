import React from 'react';
import image1 from "../../assets/image1.jpg"
const About = () => {
  return (
    <section className="flex flex-col justify-center items-center py-10 px-4 bg-[#ECC5C0] w-full h-auto">
        
        <div>
            <h2 className="text-4xl md:text-7xl font-bold text-center text-[#B76E79] mb-2">Nossos Serviços</h2>
            <p className="text-center mb-10">Confira abaixo os serviços que o Studio de beleza Tatiane amorim pode promover para o bem-estar dos seus clientes.</p>
        </div>
        
        <div className="grid grid-center grid-cols-2 grid-cols-3 gap-8">
            <div className="flex justify-center items-center">
                <img src={image1} alt="Imagem 1" className="w-full h-full md:w-1/2 object-cover" />
            </div>
            
            <div className="relative self-end flex justify-center items-center">
                <img src={image1} alt="Imagem 2" className="w-full h-full md:w-1/2 md:h-1/2 object-cover" />
            </div>

            <div className="relative self-start flex justify-center items-center">
                <img src={image1} alt="Imagem 3" className="w-full h-full md:w-1/2 md:h-1/2 object-cover" />
            </div>

            <div className="relative self-end flex justify-center items-center">
                <img src={image1} alt="Imagem 4" className="w-full h-full md:w-1/2 md:h-1/2 object-cover" />
            </div>

            <div className="relative self-start flex justify-center items-center">
                <img src={image1} alt="Imagem 5" className="w-full h-full md:w-1/2 md:h-1/2 object-cover" />
            </div>

            <div className="relative self-end flex justify-center items-center">
                <img src={image1} alt="Imagem 6" className="w-full h-full md:w-1/2 md:h-1/2 object-cover" />
            </div>
        </div>
    </section>
  );
}

export default About;
