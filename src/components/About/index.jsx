import React from 'react';

const About = () => {
  return (
    <section className="flex flex-col justify-between items-center py-10 px-4 bg-[#F8F8F8] w-full h-screen">
        
        <div>
            <h2 className="text-4xl md:text-7xl font-bold text-center text-primary mb-2">Nossos Serviços</h2>
            <p className="text-center">Confira abaixo os serviços que o Studio de beleza Tatiane amorim pode promover para o bem-estar dos seus clientes.</p>
        </div>

        <div className="grid grid-cols-2 gap-8">
            {/* Primeira Foto da Primeira Coluna */}
            <div className="relative">
            <img src="image1.jpg" alt="Imagem 1" className="w-full h-full object-cover" />
            </div>
            
            {/* Primeira Foto da Segunda Coluna - Começando na metade da primeira imagem */}
            <div className="relative self-end">
            <img src="image2.jpg" alt="Imagem 2" className="w-full h-full object-cover" />
            </div>

            {/* Segunda Foto da Primeira Coluna */}
            <div className="relative self-start">
            <img src="image3.jpg" alt="Imagem 3" className="w-full h-full object-cover" />
            </div>

            {/* Segunda Foto da Segunda Coluna - Começando na metade da segunda imagem */}
            <div className="relative self-end">
            <img src="image4.jpg" alt="Imagem 4" className="w-full h-full object-cover" />
            </div>

            {/* Terceira Foto da Primeira Coluna */}
            <div className="relative self-start">
            <img src="image5.jpg" alt="Imagem 5" className="w-full h-full object-cover" />
            </div>

            {/* Terceira Foto da Segunda Coluna - Começando na metade da terceira imagem */}
            <div className="relative self-end">
            <img src="image6.jpg" alt="Imagem 6" className="w-full h-full object-cover" />
            </div>
        </div>
    

        {/* <div className="flex justify-center space-x-8">

            <div className="bg-white shadow-lg p-6 rounded-lg w-64">
                <img src="penteado1.jpg" alt="Penteado para Casamento" className="w-full h-40 object-cover rounded-t-lg" />
                <h3 className="text-xl font-semibold mt-4">Mechas</h3>
                <p className="text-gray-600">Transforme seu look para o grande dia com nossos penteados exclusivos.</p>
                <button className="mt-4 text-blue-600 hover:underline">Agende seu horário</button>
            </div>

            <div className="bg-white shadow-lg p-6 rounded-lg w-64">
                <img src="corte1.jpg" alt="Corte de Cabelo" className="w-full h-40 object-cover rounded-t-lg" />
                <h3 className="text-xl font-semibold mt-4">Cortes de Cabelo</h3>
                <p className="text-gray-600">Dê um novo estilo ao seu visual com nossos cortes modernos.</p>
                <button className="mt-4 text-blue-600 hover:underline">Veja os estilos</button>
            </div>
            
        </div> */}
    </section>
  );
}

export default About;
