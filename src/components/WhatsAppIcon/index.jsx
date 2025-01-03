import whatsappLogo from "../../assets/WhatsAppLogo.png"

export function WhatsAppIcon() {
  return (
    <div className="flex justify-center items-center w-14 h-14 md:w-24 md:h-24 rounded-full fixed z-20 right-2 bottom-2 shadow-2xl bg-[#41c054]">
      <a href="https://api.whatsapp.com/send?phone=5521982237042&text=Ol%C3%A1,%20gostaria%20de%20agendar%20um%20hor%C3%A1rio" target="_blank" rel="noopener noreferrer">
        <img src={whatsappLogo} alt="icone do WhatsApp" className="w-10 md:w-20"/>
      </a>
    </div>  
  );
}
