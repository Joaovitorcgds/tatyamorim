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
       <h1>ferae</h1>
      </main>
    </>
  );
}
