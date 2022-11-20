import Image from 'next/image';
import Car from '../../assets/ico_2.svg';
import foto1 from '../../assets/images_3/foto2_1.png';
import foto2 from '../../assets/images_3/foto2_2.png';

export const Aerodynamic = () => {
  return (
    <div className="flex flex-col gap-y-20 lg:flex-row-reverse items-center justify-center md:gap-x-8 mt-36">
      <div className="flex items-start gap-x-4 lg:w-1/2 max-w-[826px]">
        <div className="w-2/3">
          <Image src={foto1} alt="BMW iX image" className="object-contain" />
        </div>
        <div className="w-1/3 -translate-y-10">
          <Image src={foto2} alt="BMW iX image" className="object-contain scale-80 origin-left" />
        </div>
      </div>
      <div className="flex flex-col pl-8 pr-8 md:pl-0 max-w-[700px] lg:w-1/2 ml-2">
        <Car className="text-[#A9A7A8] h-8 mb-6" />
        <h2 className="font-cairo font-bold text-2xl md:text-4xl max-w-[305px]">
          INNOWACYJNA AERODYNAMIKA BMW iX.
        </h2>
        <h3 className="font-open-sans font-light md:text-xl text-[#707070] mt-14  leading-6">
          BMW iX w każdym milimetrze swojej dynamicznej stylistyki wdraża zasadę „forma podąża za
          funkcją”.
        </h3>
        <div className="font-roboto text-[13px] md:text-[14px] text-[#4E4E4E] leading-6 mt-4">
          Widać to przede wszystkim po gładkiej karoserii ze zwężoną nadbudową kabiny i
          zredukowanymi fugami oraz po płaskim podwoziu. W połączeniu z zamkniętym przodem oraz
          dyfuzorem z tyłu i niezwykłymi detalami, takimi jak wpuszczane klamki czy zintegrowane z
          listwami szybowymi lusterka zewnętrzne, BMW iX osiąga doskonały współczynnik Cx wynoszący
          zaledwie 0,25. Dzięki temu łączy w sobie zasięg i wydajność z innowacyjną konstrukcją
          SAV-a.
        </div>
      </div>
    </div>
  );
};
