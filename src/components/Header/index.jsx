import React, { useEffect, useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    console.log(isMenuOpen);
  }, []);

  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white w-screen h-[70px]">
      {/* Título */}
      <div className="text-xl font-semibold">
        <h1>Minha Landing Page</h1>
      </div>

      {/* Navegação */}
      {!isMenuOpen ? (
        <nav
          className={`md:flex md:items-center md:space-x-8 
          
          z-10 color-red w-full h-screen bg-red transition-all duration-300 ease-in-out transform 
          ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}
        `}
        >
          <ul className="space-y-6 md:space-y-0 md:flex md:space-x-8">
            <li>
              <a href="#home" className="text-lg hover:text-gray-400 px-4 py-2">
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-lg hover:text-gray-400 px-4 py-2"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-lg hover:text-gray-400 px-4 py-2"
              >
                Serviços
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-lg hover:text-gray-400 px-4 py-2"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      ) : (
        <></>
      )}

      {/* Botão Hambúrguer */}
      <button
        className="md:hidden text-2xl focus:outline-none"
        onClick={toggleMenu}
      >
        ☰
      </button>
    </header>
  );
};

export default Header;
