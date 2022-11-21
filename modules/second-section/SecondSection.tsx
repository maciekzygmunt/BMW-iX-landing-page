import { motion } from 'framer-motion';
import { Aerodynamic } from './Aerodynamic';
import { Facts } from './Facts';
import { Grid } from './Grid';

export const SecondSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center mt-[60px] xl:mt-[180px]"
    >
      <Facts />
      <Aerodynamic />
      <Grid />
    </motion.div>
  );
};
