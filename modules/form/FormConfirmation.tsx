import React from 'react';

interface FormConfirmationTypes {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FormConfirmation = ({ setIsOpen }: FormConfirmationTypes) => {
  return (
    <div className="fixed bg-black/90 inset-0 z-50 flex flex-col items-center justify-center text-white p-8 gap-y-3">
      <h2 className="font-cairo font-bold text-2xl">DZIĘKUJEMY</h2>
      <div className="font-roboto text-[13px] text-center max-w-[269px]">
        Skontaktujemy się z Tobą w najbliższym możliwym terminie.
      </div>
      <button
        className="w-[138px] h-[46px] bg-BMW-blue font-cairo font-semibold tracking-[0.7px] mt-6"
        onClick={() => {
          setIsOpen(false);
        }}
      >
        OK
      </button>
    </div>
  );
};
