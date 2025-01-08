import React from 'react';
import mechas from "../../assets/services/mechaImg.webp"
import progressiva from "../../assets/services/progressivaImg.webp"
import corte from "../../assets/services/corteImg.webp"
import penteado from "../../assets/services/penteadoImg.webp"
import galeria from "../../assets/services/galeriaImg.webp"

import { BsWhatsapp } from "react-icons/bs";


export function Services() {

    const services = [
        {
          title: "Mechas",
          image: `${mechas}`, // substitua pelo link correto ou use imagens locais
          colSpan: "col-span-2",
          rowSpan: "row-span-2",
          height: "w-auto"
        },
        {
          title: "Progressivas",
          image: `${progressiva}`,
          colSpan: "col-span-1",
          rowSpan: "row-span-1",
          height: "h-1/2"
        },
        {
          title: "Cortes",
          image: `${corte}`,
          colSpan: "col-span-1",
          rowSpan: "row-span-1",
          height: "h-1/2"
        },
        {
          title: "Maquiagens e Penteados",
          image: `${penteado}`,
          colSpan: "col-span-1",
          rowSpan: "row-span-1",
          height: "h-1/2"
        },
        {
          title: "Galeria de fotos",
          image: `${galeria}`,
          colSpan: "col-span-1",
          rowSpan: "row-span-1",
          height: "h-1/2"
        },
      ];

    return (
        <section className="flex flex-col justify-between items-center pt-10 px-4 bg-[#f0dedc] w-full h-auto">
            
            <div>
                <h2 className="text-4xl md:text-7xl font-bold text-center text-primary mb-2">Nossos Serviços</h2>
                <p className="text-center text-[#9e4d53] md:font-semibold mb-10">Confira abaixo os serviços que o Studio de beleza Tatiane amorim pode promover para o bem-estar dos seus clientes.</p>
            </div>

            <div className="md:w-2/3 h-auto grid grid-cols-2 grid-rows-2 md:grid-cols-4 gap-4">
                {services.map((service, index) => (
                    <div key={index} className={`${service.colSpan} ${service.rowSpan} relative bg-gray-800 rounded-lg overflow-hidden hover:scale-102 hover:cursor-pointer shadow-xl hover:brightness-125 transition duration-600`}>
                        <div className="inset-0 w-full h-auto object-cover absolute bg-overlayServices z-10 hover:none"></div>
                        <img src={service.image} alt={service.title} className="w-full object-contain opacity-70"/>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-white text-lg md:text-2xl font-bold text-center z-10"> {service.title}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="relative mt-16 hover:scale-102 animation-pulse">
              <div className="absolute -inset-0.5 bg-[#b5676c] rounded-lg blur opacity-50 hover:opacity-100 transition duration-500 "></div>
              <a href="https://api.whatsapp.com/send?phone=5521982237042&text=Ol%C3%A1,%20gostaria%20de%20agendar%20um%20hor%C3%A1rio" target="_blank" rel='norefer'>
                <button  className='relative leading-none bg-[#f8f8f8] flex justify-center items-center gap-4 px-9 py-4 md:px-16 md:py-5 rounded-lg font-semibold text-xl text-primary '>
                  <BsWhatsapp size={25}/>
                  <span>Agende seu horário</span>
                </button>
              </a>
            </div>
        </section>
  );
}
