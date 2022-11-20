import Image from 'next/image';
import Electric from '../../assets/ico_1.svg';
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
    <div className="flex flex-col gap-y-20 lg:flex-row items-center justify-center md:gap-x-8">
      <div className="flex items-end gap-x-4 lg:w-1/2">
        <div className="w-1/3 translate-y-14 md:ml-2">
          <Image src={foto1} alt="BMW iX image" className="object-contain scale-80 origin-right" />
        </div>
        <div className="w-2/3">
          <Image src={foto2} alt="BMW iX image" className="object-contain" />
        </div>
      </div>
      <div className="flex flex-col  pl-8 md:pl-0 max-w-[700px] lg:w-1/2">
        <Electric className="text-[#A9A7A8] mb-6" />
        <h2 className="font-cairo font-bold text-2xl md:text-4xl max-w-[305px]">
          <span className="lg:block">FAKTY</span> O NOWYM BMW iX.
        </h2>
        <div className="flex flex-wrap mt-10">
          {TEXTS.map((el) => (
            <div
              key={el.id}
              className="flex flex-col w-full md:w-[190px] h-[120px] md:h-[172px] mr-[30px]"
            >
              <div className="border-b-[1px] border-slate-300 flex items-end relative mb-6">
                <span className="font-cairo font-bold text-xs mb-2">{el.id}</span>
                <div className="absolute h-[1px] w-3 bg-[#6D6D6D]  -bottom-[1px]" />
              </div>
              <span className=" text-BMW-grey text-[13px] md:text-[14px] font-open-sans">
                {el.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
