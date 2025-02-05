import React, { useEffect, useState } from 'react';
import salon_01 from "../../assets/salon/IMG_01.webp"
import salon_02 from "../../assets/salon/IMG_02.webp"
import { Button } from '../layout/Button';

export function Salon() {

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      // Defina o limite para a largura da tela (por exemplo, 768px)
      if (window.innerWidth < 768) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    // Adicionar evento de resize
    window.addEventListener("resize", handleResize);

    // Chamar a função uma vez ao carregar
    handleResize();

    // Limpar o evento de resize ao desmontar o componente
    return () => window.removeEventListener("resize", handleResize);
  }, []);

    return (
        <section className="flex flex-col lg:flex-row justify-around items-center md:items-start pb-16 px-4 bg-primary w-full h-auto gap-6">
          <div className="md:max-w-3xl text-center relative flex flex-col items-center">
            <h3 className="text-4xl md:text-6xl font-bold text-center text-[#b5676c] mb-2">Espaço Perfeito para Profissionais</h3>
            <div>
              <span className='text-lg leading-7 text-white md:font-semibold'>Alugue um ambiente exclusivo com espaços para locação, oferecemos a estrutura ideal para você atender seus clientes com conforto e estilo.<br/>
              Estamos localizado na Rua Padre Manso, 83 - Madureira.<br/>
              </span>  
              <span className='text-lg leading-7 text-white'>Para mais informações, clique no botão de saiba mais</span>
            </div>

            {isVisible ? 
              <Button bgColor="bg-[#b5676c]" textColor="text-white" >Saiba Mais</Button>
            : 
              <></>}
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

          {!isVisible ? 
            <Button bgColor="bg-[#b5676c]" textColor="text-white" >Saiba Mais</Button>
          : 
            <></>}
        </section>
  );
}