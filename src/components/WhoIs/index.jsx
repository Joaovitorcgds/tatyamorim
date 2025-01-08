import React from 'react';
import WhoAmI from "../../assets/WhoAmI.webp"

export function WhoIs() {

    return (
        <section className="flex flex-col md:flex-row start justify-around items-start py-16 px-4 bg-[#f0dedc] w-full h-auto gap-4">
            
            <div className="md:max-w-3xl text-center">
                <p className="text-center text-[#b5676c] text-2xl font-semibold md:font-bold">Quem é</p>
                <h3 className="text-4xl md:text-7xl font-bold font-playfair text-center text-primary mb-2">Tatiane Amorim</h3>
                <span className='leading-7'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium ipsum dolorem, rerum tempore vero sequi nostrum illo velit excepturi sint facilis, consequatur soluta enim temporibus laboriosam explicabo, a maxime quia!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium ipsum dolorem, rerum tempore vero sequi nostrum illo velit excepturi sint facilis, consequatur soluta enim temporibus laboriosam explicabo, a maxime quia!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium ipsum dolorem, rerum tempore vero sequi nostrum illo velit excepturi sint facilis, consequatur soluta enim temporibus laboriosam explicabo, a maxime quia!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium ipsum dolorem, rerum tempore vero sequi nostrum illo velit excepturi sint facilis, consequatur soluta enim temporibus laboriosam explicabo, a maxime quia!Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
            </div>

            <div className="flex justify-center">
                <img src={WhoAmI} alt="imagem de Tatiane Amorim" className="w-2/3 md:w-3/4 max-w-xl rounded-lg shadow-xl"/>
            </div>
        </section>
  );
}
