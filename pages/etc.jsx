import { motion } from 'framer-motion';
import NavBar from '../components/NavBar';

const Etc = () => {
  return (
    <div class='flex flex-col outer-wrapper mx-auto px-6'>
      <NavBar navState='etc'></NavBar>
      <motion.div
        class='content-box border-t-2 border-b-2 border-black'
        layout
        initial={{ height: 0, marginTop: 50 }}
        animate={{ height: 100, marginTop: 0 }}
        transition={{ duration: 0.45 }}
        layoutId='subNavBar'
      >
        <motion.div
          class='text-7xl py-3'
          initial={{ opacity: 0, translateX: '-100px' }}
          animate={{ opacity: 1, translateX: '0px' }}
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          etc
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Etc;
