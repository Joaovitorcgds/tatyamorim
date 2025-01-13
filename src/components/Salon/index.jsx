import React from 'react';
import salon_01 from "../../assets/salon/IMG_01.webp"
import salon_02 from "../../assets/salon/IMG_02.webp"

export function Salon() {

    return (
        <section className="flex flex-col lg:flex-row start justify-around items-start pb-16 px-4 bg-primary w-full h-auto gap-6">
          <div className="md:max-w-3xl text-center">
            <h3 className="text-4xl md:text-6xl font-bold text-center text-[#b5676c] mb-2">Espaço Perfeito para Profissionais</h3>
            <span className='text-lg leading-7 text-[#f8f8f8] md:font-semibold'>Alugue um ambiente exclusivo com espaços para locação, oferecemos a estrutura ideal para você atender seus clientes com conforto e estilo.</span>
          </div>

          <div className="grid grid-cols-2 gap-4 max-w-xl">
            <img
              src={salon_01}
              alt="Foto do salão 01"
              className="rounded-lg object-cover w-full h-auto md:w-auto shadow-xl"
            />
            <img
              src={salon_02}
              alt="Foto do salão 02"
              className="rounded-lg object-cover w-full h-auto mt-10 md:w-auto shadow-xl"
            />
          </div>
        </section>
  );
}
