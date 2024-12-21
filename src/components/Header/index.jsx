import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center px-4 bg-[#C38888] text-white fixed w-full inset-0 z-50 h-12 h-16 shadow-md">
      {/* <div className="container mx-auto flex justify-between items-center"> */}
        <h1 className="text-xl font-playfair">Studio de beleza Tatiane amorim</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#home" className="hover:text-gray-300">Home</a></li>
            <li><a href="#about" className="hover:text-gray-300">Sobre</a></li>
          </ul>
        </nav>
      {/* </div> */}
    </header>
  );
}

export default Header;
