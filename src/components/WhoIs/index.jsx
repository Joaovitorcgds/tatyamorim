import React from 'react';
import WhoAmI from "../../assets/WhoAmI.webp"

export function WhoIs() {
    return (
        <section className="flex flex-col md:flex-row start justify-around items-start py-16 px-4 bg-[#f0dedc] w-full h-auto gap-4">
            
            <div className="md:max-w-xl text-center text-wrap ">
                <p className="text-center text-[#b5676c] text-2xl font-semibold md:font-bold">Quem é</p>
                <h3 className="text-4xl md:text-7xl font-bold font-playfair text-center text-primary mb-2">Tatiane Amorim</h3>
                <span className='leading-7 text-lg text-[#85383d] '>Olá, sou Tatiane Amorim, atuo nesta área desde 2012 e sou apaixonada pelo que faço. <br/>
                Minha jornada começou em 2010, quando decidi ingressar nessa profissão após passar por uma das maiores provações da minha vida: a perda do meu filho de 7 anos. Foi nesse momento que encontrei na fé e na minha nova carreira a força para superar a dor e transformar minha vida. <br/>
                Sou maranhense e cheguei ao Rio de Janeiro em 2007, onde construí minha trajetória profissional com muita dedicação e amor. Desde minha formação em 2012, venho ajudando pessoas por meio do meu trabalho, que é mais do que uma profissão — é a minha missão de vida.Estou aqui para compartilhar essa paixão com você!</span>
            </div>

            <div className="flex justify-center min-w-xl">
                <img src={WhoAmI} alt="imagem de Tatiane Amorim" className="w-3/4 md:w-full max-w-md rounded-lg shadow-xl"/>
            </div>
        </section>
  );
}