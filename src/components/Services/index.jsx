import React from 'react';
import image1 from "../../assets/image1.jpg"

export function Services() {

    const services = [
        {
          title: "Mechas",
          image: `${image1}`, // substitua pelo link correto ou use imagens locais
          colSpan: "col-span-2",
          rowSpan: "row-span-2",
          height: "w-auto"
        },
        {
          title: "Progressivas",
          image: `${image1}`,
          colSpan: "col-span-1",
          rowSpan: "row-span-1",
          height: "h-1/2"
        },
        {
          title: "Cortes",
          image: `${image1}`,
          colSpan: "col-span-1",
          rowSpan: "row-span-1",
          height: "h-1/2"
        },
        {
          title: "Maquiagens e Penteados",
          image: `${image1}`,
          colSpan: "col-span-1",
          rowSpan: "row-span-1",
          height: "h-1/2"
        },
        {
          title: "Galeria de fotos",
          image: `${image1}`,
          colSpan: "col-span-1",
          rowSpan: "row-span-1",
          height: "h-1/2"
        },
      ];
    


    return (
        <section className="flex flex-col justify-between items-center py-10 px-4 bg-[#f0dedc] w-full h-auto">
            
            <div>
                <h2 className="text-4xl md:text-7xl font-bold text-center text-primary mb-2">Nossos Serviços</h2>
                <p className="text-center md:font-semibold mb-10">Confira abaixo os serviços que o Studio de beleza Tatiane amorim pode promover para o bem-estar dos seus clientes.</p>
            </div>

            <div className="md:w-2/3 h-auto grid grid-cols-2 grid-rows-2 md:grid-cols-4 gap-4">
                {services.map((service, index) => (
                    <div key={index} className={`${service.colSpan} ${service.rowSpan} relative bg-gray-800 rounded-lg overflow-hidden hover:scale-102 hover:cursor-pointer hover:brightness-125 transition duration-600`}>
                        <div className="inset-0 w-full h-auto object-cover absolute bg-overlayServices z-10 hover:none"></div>
                        <img src={service.image} alt={service.title} className="w-full object-cover opacity-70"/>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-white text-lg md:text-2xl font-bold text-center z-20"> {service.title} </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
  );
}
