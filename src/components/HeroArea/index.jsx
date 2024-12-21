import videobg from "../../assets/videobg.mp4"
import imagebg from "../../assets/ha03.png"
import { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

export function HeroArea() {
  useEffect(() => {
    window.addEventListener('load', function() {
      var video = document.getElementById('meuVideo');
      video.play(); // Reproduz o vídeo
    });

    // AOS.init({
    //   duration: 1000,
    //   easing: 'ease-in-out',
    //   once: true,
    // });
  }, []);

  return (
    <>
    <div className="relative w-full h-screen">
      {/*Overlay*/}
      <div className="inset-0 w-screen h-screen object-cover absolute bg-overlay z-10"></div>

      
      {/* Hero Area */}
      <img src={imagebg} className="w-screen h-screen object-cover absolute inset-0 hidden md:block"
      />

      {/* Hero content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full text-center text-white">
        <h1 className="font-playfair text-center mb-1 text-5xl md:text-7xl">Tatiane Amorim</h1>
        <span className="font-playfair text-center text-lg md:text-xl">Especialista em Mechas e Penteados</span>
      </div>

      {/* Tailwind Responsiveness: For Mobile */}
      <video id="meuVideo" src={videobg} loop muted className="w-screen h-screen object-cover absolute inset-0 bg-cover bg-center md:hidden"></video>
    </div>
    </>
  );
}
