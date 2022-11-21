import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence } from 'framer-motion';
import { useForm, FieldValues } from 'react-hook-form';
import Triangle1 from '../../assets/images_5/Path-17.png';
import BMWfront from '../../assets/images_5/bmw-ix-front.png';
import BMWside from '../../assets/images_5/bmw-ix-side.webp';
import { FormConfirmation } from './FormConfirmation';

const INPUTS = [
  { type: 'text', placeholder: 'Imię*', id: 'name' },
  { type: 'text', placeholder: 'Nazwisko*', id: 'surname' },
  { type: 'email', placeholder: 'Email*', id: 'email' },
  { type: 'tel', placeholder: 'Numer telefonu*', id: 'phone' },
];

export const Form = () => {
  const [confirmationIsOpen, setConfirmationIsOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    reset();
    setConfirmationIsOpen(true);
  };

  return (
    <>
      <AnimatePresence>
        {confirmationIsOpen && <FormConfirmation setIsOpen={setConfirmationIsOpen} />}
      </AnimatePresence>
      <div className="flex flex-col items-center mt-24">
        {/* FIRST CAR */}
        <div className="overflow-hidden w-full lg:hidden">
          <Image src={BMWfront} alt="bmw_front" className="absolute -left-40 z-10" />
          <Image
            src={Triangle1}
            alt="triangle1"
            className="relative translate-y-20 -translate-x-36 "
          />
        </div>
        {/* TITLE FORM */}
        <div className="flex items-center">
          <div className="relative overflow-hidden hidden lg:flex justify-end translate-y-32">
            <Image src={BMWside} alt="bmw_front" className="absolute -right-32 scale-150 z-10" />
            <Image src={Triangle1} alt="triangle2" className="relative right-0 -translate-y-32" />
          </div>
          <div className="flex flex-col -translate-y-8 px-8 lg:shadow-form lg:bg-white lg:items-start lg:p-16 z-10">
            <div className="flex flex-col gap-y-2">
              <div className="flex items-start lg:mb-4">
                <span className="font-cairo font-bold text-2xl lg:text-4xl">UMÓW JAZDĘ PRÓBNĄ</span>
                <span className="font-cairo font-bold text-sm lg:text-lg ml-1 mt-[1px]">
                  BMW iX
                </span>
              </div>
              <span className="text-[#707070] lg:text-[20px] font-open-sans font-light">
                Zachęcamy do ograniczenia poruszania się i pozostania w domu.
              </span>
              <span className="text-[#707070] lg:text-[20px] font-open-sans font-light">
                Jeśli jednak jazda testowa okaże się niezbędna prosimy o wypełnienie poniższego
                formularza.
              </span>
            </div>
            {/* FORM */}
            <div className="flex flex-col items-center md:items-start mt-12">
              <span className="font-cairo font-bold text-[20px]">
                Wypełnij formularz swoimi danymi.
              </span>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col w-full md:w-[506px] gap-y-[20px]"
              >
                <div className="flex gap-x-4 mt-6 mb-2">
                  {['Pan', 'Pani'].map((el) => (
                    <label
                      key={el}
                      className="font-roboto text-[13px] lg:text-[20px] text-[#4E4E4E] flex items-center gap-x-1 "
                    >
                      <input
                        type="radio"
                        className=" indeterminate:bg-gray-300 w-4 h-4"
                        {...register('sex', {
                          required: true,
                        })}
                        value={el}
                      />
                      {el}
                    </label>
                  ))}
                </div>
                {INPUTS.map((input) => (
                  <input
                    key={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    {...register(input.id, {
                      required: true,
                    })}
                    className="h-[40px] lg:h-[52px] outline-none border border-[#DCDCDC] placeholder:text-[#4E4E4E] placeholder:font-open-sans placeholder:text-[13px] lg:placeholder:text-[14px] pl-[15px] py-[11px] focus:ring-BMW-blue focus:ring-2 transition-all"
                  />
                ))}
                <button className="bg-BMW-blue transition-colors h-[46px] lg:h-[63px] hover:bg-blue-700 w-[165px] lg:w-[243px] font-semibold text-[14px] lg:text-[18px] tracking-[0.7px] text-white mt-4">
                  WYŚLIJ
                </button>
              </form>
            </div>
          </div>
          <div className="relative overflow-hidden hidden lg:block">
            <Image src={BMWfront} alt="bmw_front" className="absolute -left-24 scale-150 z-10" />
            <Image
              src={Triangle1}
              alt="triangle1"
              className="relative translate-y-20 -translate-x-32 rotate-45"
            />
          </div>
        </div>
        {/* SECOND CAR - mobile */}
        <div className="relative flex justify-end overflow-hidden w-full lg:hidden pb-14">
          <Image src={BMWside} alt="bmw_front" className="absolute -right-52 z-10" />
          <Image src={Triangle1} alt="triangle2" className="relative right-32 -translate-y-5" />
        </div>
      </div>
    </>
  );
};
