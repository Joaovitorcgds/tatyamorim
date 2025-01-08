import Example from "../../../assets/services/mechaImg.webp"

import { Carousel } from "@material-tailwind/react";
 
export function CarouselCourse() {
  return (
    <Carousel autoplay loop autoplayDelay={3000} className="rounded-xl w-2/3 md:w-3/4 max-w-md self-center"
    navigation={({ setActiveIndex, activeIndex, length }) => (
      <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
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
      <img
        src={Example}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src={Example}
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src={Example}
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}