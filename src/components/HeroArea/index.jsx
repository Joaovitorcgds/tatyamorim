import { useState } from 'react';
import videobg from "../../assets/videobcg.mp4"
import imagebg from "../../assets/imgbcg.webp"
import imagebgMobile from "../../assets/imgBgMobile.webp"


export function HeroArea() {

  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  return (
    <>
    <div className="relative w-full h-screen overflow-hidden z-20">
      {/*Overlay*/}
      <div className="inset-0 w-full h-screen object-cover absolute bg-overlay z-10"></div>

      {/* Placeholder (Imagem estática) */}
      {!isVideoLoaded && (
        <div className='absolute inset-0 w-full h-full'>
          <div className="inset-0 w-full h-screen object-cover absolute bg-overlay z-10"></div>
          <img
            src={imagebgMobile}
            alt="Primeira imagem de fundo da sessão principal"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      )}
      <video preload="auto" playsInline autoPlay loop muted onLoadedData={() => setIsVideoLoaded(true)}
      className="w-screen h-screen object-cover absolute inset-0 bg-cover bg-center md:hidden">
        <source src={videobg} type="video/mp4"/>
      </video>

      {/* Hero Area */}
      <img src={imagebg} alt="Segunda imagem de fundo da sessão principal" className="w-screen h-screen object-cover absolute inset-0 hidden md:block"
      />

      {/* Hero content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full text-center text-white">
        <h1 className="font-playfair text-center mb-1 text-5xl md:text-7xl">Tatiane Amorim</h1>
        <span className="font-playfair text-center text-lg md:text-xl">Especialista em Mechas em Madureira</span>
      </div>
    </div>
    </>
  );
}
