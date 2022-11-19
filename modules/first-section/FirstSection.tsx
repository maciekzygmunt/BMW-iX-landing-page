import { Swiper } from '../../components';

export const FirstSection = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r  from-black/40 lg:from-black/70 to-black/0 z-10 select-none	"></div>
      <Swiper />
    </div>
  );
};
