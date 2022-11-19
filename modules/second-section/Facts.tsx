import Image from 'next/image';
import { GiElectric } from 'react-icons/gi';
import foto1 from '../../assets/images_2/foto1_1.png';
import foto2 from '../../assets/images_2/foto1_2.png';

const TEXTS = [
  { id: '01', text: 'Ponad 600 km zasięgu *' },
  {
    id: '02',
    text: 'Elektryczny napęd na wszystkie koła z dwiema osiami napędzanymi elektrycznie i ponad 500 KM (370 kW) *',
  },
  { id: '03', text: 'Od 0 do 100 km / h\nw mniej niż 5 sekund *' },
  { id: '04', text: 'Ładowanie 120 km\nw 10 minut *' },
  { id: '05', text: 'Publiczne szybkie ładowanie od 10 do 80% w mniej niż \n40 minut' },
];

export const Facts = () => {
  return (
    <div className="flex justify-between">
      <div className="flex justify-end w-1/2">
        <Image
          src={foto1}
          alt="BMW iX image"
          className="w-[320px] h-[320px] translate-y-72 object-contain"
        />
        <Image src={foto2} alt="BMW iX image" className="w-[536px] h-[536px] ml-4 object-contain" />
      </div>
      <div className="flex flex-col pl-32 w-1/2">
        <GiElectric className="text-[#A9A7A8] w-6 h-6 mb-6" />
        <h2 className="font-cairo font-bold text-4xl max-w-[305px]">
          FAKTY<span className="block"> O NOWYM BMW iX.</span>
        </h2>
        <div className="flex flex-wrap mt-10">
          {TEXTS.map((el) => (
            <>
              <div className="flex flex-col w-[190px] h-[172px] mr-[30px]">
                <div className="border-b-[1px] border-slate-300 flex items-end relative mb-6">
                  <span className="font-cairo font-bold text-xs mb-2">{el.id}</span>
                  <div className="absolute h-[1px] w-3 bg-[#6D6D6D]  -bottom-[1px]" />
                </div>
                <span className=" text-BMW-grey text-[14px] font-open-sans">{el.text}</span>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
