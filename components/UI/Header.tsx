import Image from 'next/image';
import BMWlogo from '../../assets/BMW-logo.svg';
import { SlMenu } from 'react-icons/sl';

export const Header = () => {
  return (
    <div className="absolute flex justify-between items-center w-full pr-8 pt-5 pl-8 z-20">
      <SlMenu className="text-white w-7 h-7" />
      <BMWlogo className="w-10 h-10 bg-black rounded-full" />
    </div>
  );
};
