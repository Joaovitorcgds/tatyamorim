import React from 'react';
import transition from "../../assets/transitionSection.png"

export function RentSpace() {

    return (
        <section className="relative flex flex-col md:flex-row justify-around items-start py-16 px-4 bg-primary w-full h-auto gap-4 ">
          <div className='overflow-hidden absolute w-full -top-1 left-0' dir="ltr">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className='w-custom  h-[80px]'>
              <path class="elementor-shape-fill" className='origin-center rotate-0 fill-[#f0dedc]' d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
              c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
              c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
            </svg>
          </div>
        </section>
  );
}
