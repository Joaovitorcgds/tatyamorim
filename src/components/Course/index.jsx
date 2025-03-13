import React from 'react';
import { BsWhatsapp } from "react-icons/bs";
import { CarouselCourse } from '../layout/carouselCourse';

export function Course() {

  const items = [
    { number: 1, title: "Descubra o fundo de clareamento", text: "Aprenda a identificar e trabalhar com as nuances naturais do cabelo para obter resultados impecáveis." },
    { number: 2, title: "Esfumado sem apagar", text: "Surpreenda suas clientes com transições suaves, mantendo a naturalidade dos fios." },
    { number: 3, title: "Conceito de luz e sombra", text: "Realce a beleza única de cada rosto, criando contrastes que valorizam as mechas." },
    { number: 4, title: "Tonalização profissional", text: "Domine a arte de ajustar cores para alcançar o tom perfeito, sem exageros." },
    { number: 5, title: "Morena iluminada sem descolorir", text: "Encante suas clientes com técnicas que destacam a beleza sem agredir os fios." },
    { number: 6, title: "Sistema de numeração", text: "Decifre a linguagem universal da colorimetria e garanta precisão em todos os processos." },
  ];

  return (
    <section className="relative flex flex-col items-center py-16 px-4 bg-primary w-full">

      <div className='overflow-hidden absolute w-full -top-1 left-0' dir="ltr">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className='w-custom  h-[80px]'>
          <path className='origin-center rotate-0 fill-[#f0dedc]' d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
          c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
          c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
        </svg>
      </div>

      <div className='pt-6'>
        <h2 className="text-4xl md:text-7xl font-bold text-center text-[#f0dedc] mb-2">Domine a Arte das Mechas</h2>
        <p className="text-center text-[#f8f8f8] font-semibold mb-10">No curso prático você vai aprender técnicas de Morena Iluminada: Sem descolorir e descolorindo que elevarão sua carreira encantando e fidelizando clientes.</p>
      </div>

      <div className='flex flex-col w-full md:flex-row  justify-around gap-6'>
        <CarouselCourse/>

        <div className='flex items-center justify-around md:items-start flex-col'>

          <div className="grid grid-cols-1 gap-4 md:gap-6">
            {items.map((item, index) => (
              <div key={index} className="flex md:items-center space-x-4">
                {/* Círculo com o número */}
                <div className="w-10 h-10 min-w-10 flex items-center justify-center bg-[#af6e72] rounded-full text-lg font-semibold text-[#f0dedc]">
                  {item.number}
                </div>

                {/* Título e descrição */}
                <div>
                  <h3 className="text-lg font-bold text-[#f8f8f8]">{item.title}</h3>
                  <p className="text-sm text-[#f8f8f8]">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className='pt-4 text-center'>
            <span className='text-xl md:text-3xl font-bold text-[#f8f8f8]'>Aulas particulares com vagas limitadas</span>
            <p className='text-center text-[#f8f8f8] font-semibold'>Entre em contato agora e agende a aula que vai elevar sua carreira</p>
          </div>
        </div>

      </div> 

      <div className="relative mt-16 hover:scale-102 animation-pulse">
              <div className="absolute -inset-0.5 bg-[#f0dedc] rounded-lg blur opacity-50 hover:opacity-100 transition duration-500 "></div>
              <a href="https://api.whatsapp.com/send?phone=5521982237042&text=Ol%C3%A1,%20gostaria%20de%20agendar%20um%20hor%C3%A1rio" target="_blank" rel='norefer'>
                <button  className='relative leading-none bg-[#f8f8f8] flex justify-center items-center gap-4 px-9 py-4 md:px-16 md:py-5 rounded-lg font-semibold text-xl text-[#af6e72] '>
                  <BsWhatsapp size={25}/>
                  <span>Agende sua aula</span>
                </button>
              </a>
            </div>
    </section>
  );
}
