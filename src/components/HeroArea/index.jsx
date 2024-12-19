import ImgHero from '../../assets/googleHero.png';
import Logo from '../../assets/logo.png';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export function HeroArea() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <>
      <main className="flex flex-col items-center gap-5 px-6 py-24 lg:pt-40 lg:pb-24 min-h-screen bg-[rgb(112,141,136)] lg:flex-row md:justify-around text-center lg:text-left">
        <div
          className="flex flex-col justify-around items-center lg:items-start lg:h-[45%] h-full gap-4 animate-wiggle"
          data-aos="fade-right"
          data-aos-delay={100}
        >
          <div className="flex flex-col justify-center items-center gap-3">
            <img
              src={Logo}
              alt="Logo da Agencia de Marketinhg Salustriano"
              className="lg:hidden w-[150px] md:w-2/5 self-center"
            />
            <h1 className="font-bold text-4xl text-white md:text-5xl font-playfair">
              Transforme Seu Perfil no <br></br> Google Meu Negócio
            </h1>
          </div>
          <p className="max-w-lg leading-relaxed text-white font-medium">
            Maximize a Visibilidade do Seu Negócio no Google. Otimize seu perfil
            no Google Meu Negócio e aumente a conversão de leads qualificados
            com nossos serviços especializados. Descubra como podemos ajudar sua
            empresa a se destacar.
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=5521979305529&text&type=phone_number&app_absent=0"
            className="py-2 px-4 bg-white font-semibold text-[rgb(112,141,136)]  flex justify-center max-w-52 rounded-md self-center lg:self-start"
            target="_blank"
            rel="nofollow"
          >
            Solicitar Orçamento
          </a>
        </div>
        <img
          src={ImgHero}
          alt="Imagem ilustrativa do Google Meu Negócio"
          className="hidden md:min-w-[500px] lg:block md:w-2/5"
          data-aos="fade-left"
          data-aos-delay={100}
        />
      </main>
    </>
  );
}
