import mecha_01 from "../../../assets/courses/IMG_01.webp"
import mecha_02 from "../../../assets/courses/IMG_02.webp"
import mecha_03 from "../../../assets/courses/IMG_03.webp"
import mecha_04 from "../../../assets/courses/IMG_04.webp"
import mecha_05 from "../../../assets/courses/IMG_05.webp"
import mecha_06 from "../../../assets/courses/IMG_06.webp"


import { Carousel } from "@material-tailwind/react";

const courseIMG = [
  {
    image: `${mecha_01}`,
    alt: "Exemplo imagem do curso de mechas"
  },
  {
    image: `${mecha_02}`,
    alt: "Exemplo imagem do curso de mechas"
  },
  {
    image: `${mecha_03}`,
    alt: "Exemplo imagem do curso de mechas"
  },
  {
    image: `${mecha_04}`,
    alt: "Exemplo imagem do curso de mechas"
  },
  {
    image: `${mecha_05}`,
    alt: "Exemplo imagem do curso de mechas"
  },
  {
    image: `${mecha_06}`,
    alt: "Exemplo imagem do curso de mechas"
  },
];
 
export function CarouselCourse() {
  return (
    <Carousel autoplay loop autoplayDelay={3000} className="rounded-xl w-2/3 md:w-3/4 max-w-md self-center"
    navigation={({ setActiveIndex, activeIndex, length }) => (
      <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2 shadow-xl">
        {new Array(length).fill("").map((_, i) => (
          <span
            key={i}
            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
              activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
            }`}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>
    )}>
      {courseIMG.map((course, index) => (
        <img src={course.image} alt={course.alt} className="h-full w-full object-cover"/>
      ))}
    </Carousel>
  );
}