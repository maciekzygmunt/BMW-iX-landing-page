import { Aerodynamic } from './Aerodynamic';
import { Facts } from './Facts';
import { Grid } from './Grid';

export const SecondSection = () => {
  return (
    <div className="flex flex-col items-center mt-[60px] xl:mt-[180px]">
      <Facts />
      <Aerodynamic />
      <Grid />
    </div>
  );
};
