import { BsWhatsapp } from "react-icons/bs";

export function Button({bgColor, textColor, children}) {
    return(
        <div className="relative mt-10 hover:scale-102 animation-pulse">
            <div className="absolute -inset-0.5 bg-[#f0dedc] rounded-lg blur opacity-50 hover:opacity-100 transition duration-500"></div>
            <a href="https://api.whatsapp.com/send?phone=5521982237042&text=Ol%C3%A1,%20gostaria%20de%20agendar%20um%20hor%C3%A1rio" target="_blank" rel='norefer'>
              <button  className={`relative leading-none ${bgColor} flex justify-center items-center gap-4 px-9 py-4 md:px-16 md:py-5 rounded-lg font-semibold text-xl ${textColor} `}>
                <BsWhatsapp size={25}/>
                <span>{children}</span>
              </button>
            </a>
          </div>
    )
}