import videobg from "../../assets/videobg.mp4"
// import { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

export function HeroArea() {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000,
  //     easing: 'ease-in-out',
  //     once: true,
  //   });
  // }, []);

  return (
    <>
      {/* <main className="flex flex-col gap-2 justify-center itens-center md:bg-hero-01 bg-cover bg-center bg-no-repeat w-full h-full text-white">
       <video src={videobg} autoPlay loop muted className="w-screen h-screen object-cover"></video>
       
       <h1 className="font-playfair text-center text-7xl">Tatiane Amorim</h1>
       <span className="font-playfair text-center text-xl">Especialista em Mechas, Maquiagem e Penteados</span>
      </main> */}

    <div className="relative w-full h-screen">
      {/* Hero Area */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-hero-01 bg-center bg-no-repeat"
      ></div>

      {/* Hero content */}
      <div className="relative z-10 flex justify-center items-center h-full text-center text-white">
        <div>
          <h1 className="font-playfair text-center mb-1 text-4xl md:text-7xl">Tatiane Amorim</h1>
          <span className="font-playfair text-center text-sm md:text-xl">Especialista em Mechas, Maquiagem e Penteados</span>
        </div>
      </div>

      {/* Tailwind Responsiveness: For Mobile */}
      <video src={videobg} autoPlay loop muted className="w-screen h-screen object-cover absolute inset-0 bg-cover bg-center md:hidden"></video>
    </div>
    </>
  );
}
