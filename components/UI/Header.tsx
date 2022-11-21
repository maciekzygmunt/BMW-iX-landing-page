import { useState } from 'react';
import { SlMenu } from 'react-icons/sl';
import { BsX } from 'react-icons/bs';
import BMWlogo from '../../assets/BMW-logo.svg';

export const Header = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <>
      {mobileMenuIsOpen && (
        <div className="fixed flex flex-col justify-between z-50 top-0 inset-0 bg-black">
          <div className="flex flex-col items-end gap-y-4 pr-8 pt-7">
            <BMWlogo className="w-10 h-10 bg-black rounded-full" />
            <div className="w-full mr-20 right-16 h-[1px] bg-white/25 " />
            <BsX
              className="text-[#858585] w-10 h-10 cursor-pointer"
              onClick={() => {
                setMobileMenuIsOpen(false);
              }}
            />
          </div>
          <div className="flex flex-col justify-between items-center h-52 self-center">
            <span className="text-white font-cairo font-semibold">NOWE BMW iX.</span>
            <div className="w-full right-16 h-[1px] bg-white/25 " />
            <span className="text-white font-cairo font-semibold">INNOWACYJNA AERODYNAMIKA</span>
            <div className="w-[16rem] right-16 h-[1px] bg-white/25 " />
            <span className="text-white font-cairo font-semibold">GALERIA</span>
          </div>
          <button className="h-[46px] w-[269px] bg-BMW-blue mb-20 self-center font-cairo text-[14px] tracking-[0.7px] text-white font-semibold">
            UMÓW JAZDĘ PRÓBNĄ
          </button>
        </div>
      )}
      <div className="flex justify-center text-white">
        <div className="absolute flex flex-col w-full pr-8 pl-8 pt-5 z-30 max-w-[1364px]">
          <div className="flex justify-between items-center w-full py-2">
            <SlMenu
              className="text-white w-7 h-7 cursor-pointer sm:hidden"
              onClick={() => {
                setMobileMenuIsOpen(true);
              }}
            />
            <div className="sm:flex gap-x-14 hidden">
              <span className="font-cairo font-bold tracking-[0.9px] text-[18px]">Nowe BMW iX</span>
              <span className="font-cairo font-bold tracking-[0.9px] text-[18px]">
                Umów jazdę próbną
              </span>
            </div>
            <BMWlogo className="w-10 h-10 self-start bg-black rounded-full" />
          </div>
          <div className="sm:flex hidden flex-col pr-16 gap-y-2">
            <div className="w-full h-[1px] bg-white/25 " />
            <span className="font-normal self-end">
              <span className="font-cairo font-bold">Radość</span> z jazdy
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
