import React from 'react';
import exemple from "../../assets/services/galeriaImg.jpg"

export function RentSpace() {

    return (
        <section className="relative flex flex-col items-center py-16 px-4 bg-primary w-full gap-4 ">

          <div className='overflow-hidden absolute w-full -top-1 left-0' dir="ltr">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className='w-custom  h-[80px]'>
              <path className='origin-center rotate-0 fill-[#f0dedc]' d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
              c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
              c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
            </svg>
          </div>

          <div className='pt-6'>
            <h2 className="text-4xl md:text-7xl font-bold text-center text-[#f0dedc] mb-2">Domine a Arte das Mechas</h2>
            <p className="text-center text-[#f8f8f8] font-semibold mb-10">No curso prático você vai aprender técnicas que elevará sua carreira encantando e fidelizando clientes.</p>
          </div>

          <div className='flex flex-col justify-center items-center w-2/3 gap-6'>
            <div className='flex justify-around w-full gap-4'>
              <img src={exemple} alt="Imagem de exemplo" className='w-2/3 md:w-3/4 max-w-xl rounded-xl'/>

              <div className='flex flex-col'>
                <h3 className="text-2xl md:text-4xl font-bold  text-[#f0dedc] mb-2">Aprenda na prática:</h3>
                <ul className='list-disc pl-6 text-[#f8f8f8]'>
                  <li className="text-md md:text-2xl  font-semibold">Fundo de clareamento</li>
                  <li className="text-md md:text-2xl font-semibold">Esfumado sem apagar</li>
                  <li className="text-md md:text-2xl  font-semibold">Conceito de luz e sombra</li>
                  <li className="text-md md:text-2xl font-semibold">Tonalização</li>
                  <li className="text-md md:text-2xl  font-semibold">Morena iluminada S/ descolorir e descolorindo</li>
                  <li className="text-md md:text-2xl font-semibold">Sistema de numeração</li>
                </ul>
              </div>
            </div>

            {/* <div dir="ltr" className='flex justify-between w-full flex-row-reverse bg-[#f8f8f8aa] rounded-xl'>
              <img src={exemple} alt="Imagem de exemplo" className='w-2/5 md:w-80 rounded-tr-xl rounded-br-xl'/>

              <ul className='list-disc pl-12 text-[#b5676c] flex flex-col justify-center'>
                  <li className="text-lg md:text-2xl  font-semibold">Conceito de luz e sombra</li>
                  <li className="text-lg md:text-2xl font-semibold">Tonalização</li>
                </ul>
            </div> */}

            {/* <div>
            <img src={exemple} alt="Imagem de exemplo" />
              <ul>
                <li>Conceito de luz e sombra</li>
                <li>Tonalização</li>
              </ul>
            </div>
            <div>
            <img src={exemple} alt="Imagem de exemplo" />
              <ul>
                <li>Morena iluminada S/ descolorir e descolorindo</li>
                <li>Sistema de numeração</li>
              </ul>
            </div>*/}
          </div> 
        </section>
  );
}
