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
      <main className="flex flex-col gap-2 justify-center itens-center md:bg-hero-01 bg-cover bg-center bg-no-repeat w-full h-screen text-white">
       <h1 className="font-playfair text-center text-7xl">Tatiane Amorim</h1>
       <span className="font-playfair text-center text-xl">Especialista em Mechas, Maquiagem e Penteados</span>
      </main>
    </>
  );
}
