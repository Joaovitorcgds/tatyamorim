import React from 'react';
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export function Footer() {
    
    return (
    <div>
        <div className="px-6 py-10 gap-5 flex flex-col lg:flex-row justify-around items-center bg-[#b5676c] text-white">
        <div className="lg:max-w-[400px]">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair text-[#f0f2f5] text-center">Studio de beleza Tatiane amorim</h2>
        </div>
        <div className="fastLinks flex justify-center items-center flex-col">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-[#f0f2f5]">Rede Sociais</h2>
            <div className="flex gap-8">
            <a href="https://api.whatsapp.com/send?phone=5521982237042&text=Ol%C3%A1,%20gostaria%20de%20agendar%20um%20hor%C3%A1rio" target="_blank" rel="noopener noreferrer"
            className="w-12 h-12 text-[#f0f2f5] transition duration-500 ease-in-out px-2 py-2 rounded-[50%] border border-[#f0f2f5] flex justify-center items-center hover:bg-[#f0f2f5] hover:text-[#b5676c]" aria-label="WhatsApp de Studio de beleza Tatiane amorim">
                <FaWhatsapp size={25}/>
            </a>
            <a href="https://www.instagram.com/tatyamorim_hair/" target="_blank" rel="noopener noreferrer"
            className="w-12 h-12 text-[#f0f2f5] transition duration-500 ease-in-out px-2 py-2 rounded-[50%] border border-[#f0f2f5] flex justify-center items-center hover:bg-[#f0f2f5] hover:text-[#b5676c]" aria-label="Instagram de Studio de beleza Tatiane amorim">
                <FaInstagram size={25}/>
            </a>
            </div>
        </div>
        </div>
        <div className="px-5 flex flex-col items-center justify-center h-[70px] text-white border-t-white border-t-2 bg-[#b5676c] text-center">
        <span>&copy; 2024 Studio de beleza Tatiane amorim. Todos os direitos reservados.</span>
        </div>
    </div>
    )
}