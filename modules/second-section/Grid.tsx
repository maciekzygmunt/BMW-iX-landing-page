import Image from 'next/image';
import Zoom from 'react-medium-image-zoom';
import foto1 from '../../assets/images_4/photo_1.png';
import foto2 from '../../assets/images_4/photo_2.png';
import foto3 from '../../assets/images_4/photo_4.png';
import foto4 from '../../assets/images_4/photo_3.png';
import foto5 from '../../assets/images_4/photo_5.png';

import 'react-medium-image-zoom/dist/styles.css';

export const Grid = () => {
  return (
    <div
      id="grid"
      className="grid gap-2 grid-cols-6 grid-rows-4 md:grid-cols-12 md:grid-rows-2 px-4 max-w-[1930px] mt-14 md:mt-40"
    >
      <div className="row-start-1 row-end-3 col-start-1 col-end-7 md:row-start-1 md:row-end-3 md:col-start-1 md:col-end-7">
        <Zoom>
          <Image src={foto1} alt="BMW-photo1" />
        </Zoom>
      </div>
      <div className="row-start-3 row-end-4 col-start-1 col-end-3 md:row-start-1 md:row-end-2 md:col-start-7 md:col-end-9">
        <Zoom>
          <Image src={foto2} alt="BMW-photo2" />
        </Zoom>
      </div>
      <div className="row-start-3 row-end-4 col-start-3 col-end-7 md:row-start-1 md:row-end-2 md:col-start-9 md:col-end-13">
        <Zoom>
          <Image src={foto3} alt="BMW-photo3" />
        </Zoom>
      </div>
      <div className="row-start-4 row-end-5 col-start-1 col-end-4 md:row-start-2 md:row-end-3 md:col-start-7 md:col-end-10">
        <Zoom>
          <Image src={foto4} alt="BMW-photo4" />
        </Zoom>
      </div>
      <div className="row-start-4 row-end-5 col-start-4 col-end-7 md:row-start-2 md:row-end-3 md:col-start-10 md:col-end-13 ">
        <Zoom>
          <Image src={foto5} alt="BMW-photo5" />
        </Zoom>
      </div>
    </div>
  );
};
