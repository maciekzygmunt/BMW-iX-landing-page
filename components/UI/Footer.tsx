import Facebook from '../../assets/socials/facebook.png';
import Instagram from '../../assets/socials/instagram.png';
import Yt from '../../assets/socials/yt.png';
import LinkedIn from '../../assets/socials/linkedin.png';
import Twitter from '../../assets/socials/twitter.png';
import Image from 'next/image';
import Link from 'next/link';

const LINKS = [
  {
    title: 'Strefa Klienta',
    links: [
      'Centrum Obsługi Klienta BMW',
      'Znajdź dealera BMW',
      'Pobierz cenniki / broszury',
      'Często zadawane pytania',
    ],
  },
  {
    title: 'Poznaj BMW',
    links: ['Informacje prasowe', 'BMW Polska', 'Kariera'],
  },
  {
    title: 'Informacje prawne',
    links: [
      'Mapa serwisu',
      'Nota prawna / Prywatność',
      'Polityka cookie',
      'Warunki korzystania z MyBMW',
    ],
  },
];

export const Footer = () => {
  return (
    <>
      <div className="bg-[#E6E6E6] flex flex-col items-center mt-10 z-10 py-14 px-14">
        {/* SOCIALS */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-end border-b border-[#BEBEBE] w-full gap-y-7  my-[90px] lg:mt-0 max-w-[1363px] pb-7 ">
          <span className="font-roboto font-light text-xl text-[#707070]">Dołącz do nas</span>
          <div className="flex gap-x-5">
            <Link href="https://www.facebook.com/BMW.Polska/" target="_blank">
              <Image src={Facebook} alt="facebook" className="w-8 h-8" />
            </Link>
            <Link href="https://www.instagram.com/bmwpolska/" target="_blank">
              <Image src={Instagram} alt="instagram" className="w-8 h-8" />
            </Link>
            <Link href="https://www.youtube.com/user/BMWPolska" target="_blank">
              <Image src={Yt} alt="youtube" className="w-8 h-8" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/bmw-group-polska/?originalSubdomain=pl"
              target="_blank"
            >
              <Image src={LinkedIn} alt="linkedin" className="w-8 h-8" />
            </Link>
            <Link href="https://twitter.com/bmw_polska" target="_blank">
              <Image src={Twitter} alt="twitter" className="w-8 h-8" />
            </Link>
          </div>
        </div>
        {/* LINKS */}
        <div className="flex flex-col lg:flex-row w-full max-w-[1363px]">
          {LINKS.map((section) => (
            <div key={section.title} className="flex flex-col w-full mb-[60px]">
              <span className="font-roboto text-xl font-light text-[#707070] mb-7">
                {section.title}
              </span>
              <div className="flex flex-col gap-y-4">
                {section.links.map((link) => (
                  <Link key={link} href="/">
                    <span className="font-roboto font-medium text-xs lg:text-sm text-[#707070]">
                      {link}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white h-[60px] flex items-center justify-center px-14">
        <div className="flex justify-center lg:justify-start w-full max-w-[1363px]">
          <span className="font-open-sans text-sm text-[#4E4E4E]">© BMW Polska 2020</span>
        </div>
      </div>
    </>
  );
};
