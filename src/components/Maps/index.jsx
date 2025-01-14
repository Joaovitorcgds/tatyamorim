import React from 'react';

export function MyMap() {
    return (
        
        <div className='relative'>
            {/*Overlay*/}
            <div className="inset-0 w-full h-full object-cover absolute bg-overlayServices z-10" style={{
          pointerEvents:"none"}}></div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.890825503711!2d-43.340136525742544!3d-22.880491036929715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99630aa10c613f%3A0xb6ce9e97c248c44b!2sStudio%20de%20Beleza%20Amorim%20Makeup%20Hair%20-%20Maquiadora%20e%20Cabeleireira%20Madureira%20%7C%20Especialista%20em%20Mechas!5e0!3m2!1spt-BR!2sbr!4v1736792019580!5m2!1spt-BR!2sbr" style={{border:0}} allowFullScreen=""  referrerPolicy="no-referrer-when-downgrade" className='w-full h-72 md:h-80'></iframe>
        </div>
    )
};

// PRORIEDADE IFRAME: permite que o navegador carregue o iframe somente quando ele está visível na tela
// loading="lazy"