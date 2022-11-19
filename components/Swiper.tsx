import Image from 'next/image';
import { Swiper as SwiperComp, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import slider1 from '../assets/images/slider1.png';
import slider2 from '../assets/images/slider2.png';
import slider3 from '../assets/images/slider3.png';

export const Swiper = () => {
  return (
    <SwiperComp
      // cssMode={true}
      slidesPerView={1}
      className="fixed top-0 left-0 right-0 w-full lg:max-h-[720px] 2xl:max-h-[720px] 3xl:max-h-[825px]"
    >
      <SwiperSlide key={1}>
        <Image
          src={slider1}
          alt="bmw-1photo"
          className="block w-full h-full object-cover object-[70%] min-h-[720px]"
        />
      </SwiperSlide>
      <SwiperSlide key={2}>
        <Image
          src={slider2}
          alt="bmw-2photo"
          className="block w-full h-full object-cover object-[75%] min-h-[720px]"
        />
      </SwiperSlide>
      <SwiperSlide key={3}>
        <Image
          src={slider3}
          alt="bmw-3photo"
          className="block w-full h-full object-cover object-[20%] min-h-[720px]"
        />
      </SwiperSlide>
    </SwiperComp>
  );
};
