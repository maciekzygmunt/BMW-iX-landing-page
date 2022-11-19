import { useState, useEffect } from 'react';
import { Swiper } from '../../components';
import BMWiLogo from '../../assets/bmw_i_logo.svg';
import clsx from 'clsx';

export const FirstSection = () => {
  const [slideSelected, setSlideSelected] = useState(0);
  const indexes = [0, 1, 2];

  useEffect(() => {
    setInterval(() => {
      setSlideSelected((s) => {
        if (s < 2) {
          return s + 1;
        } else {
          return 0;
        }
      });
    }, 5000);
  }, []);

  return (
    <div className="relative">
      <div className="flex justify-center text-white">
        <div className="absolute flex flex-col justify-center gap-y-7 pl-8 pr-8 w-full h-full z-20 max-w-[1364px]">
          <div className="flex flex-col justify-center gap-y-7 w-full h-full">
            <BMWiLogo />
            <h1 className="font-cairo font-bold text-6xl">NOWE BMW iX</h1>
            <span className="font-cairo font-semibold">PIONIER NOWEJ ERY.</span>
          </div>
          <div className="absolute bottom-0 mb-16 flex items-center justify-center w-full">
            <div className="absolute left-0 flex gap-x-4 pagination">
              {indexes.map((el, i) => (
                <div
                  key={i}
                  className={clsx(
                    slideSelected === i ? 'bg-BMW-blue' : 'bg-white',
                    'h-[5px] w-[60px] cursor-pointer'
                  )}
                  onClick={() => {
                    setSlideSelected(i);
                  }}
                />
              ))}
            </div>
            <button className="bg-BMW-blue font-cairo font-semibold text-[18px] tracking-[0.9px] h-[63px] w-[372px]">
              UMÓW JAZDĘ PRÓBNĄ
            </button>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-3/4 h-full bg-gradient-to-r from-black/40 lg:from-black/70 to-black/0  z-10 select-none"></div>
      <Swiper selectedSwipe={slideSelected} />
    </div>
  );
};
