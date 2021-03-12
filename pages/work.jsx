import { motion } from 'framer-motion';
import NavBar from '../components/NavBar';
import { workItems } from '../public/work';

const Work = ({ workItems }) => {
  console.log(workItems);
  const workList = workItems.map((item) => {
    return (
      <li class=''>
        <p
          class='inline-block text-2xl font-regular mb-3 cursor-pointer hover:text-blue-500 duration-300'
          dangerouslySetInnerHTML={{ __html: item.title }}
        ></p>
      </li>
    );
  });
  return (
    <div class='flex flex-col outer-wrapper mx-auto px-6'>
      <NavBar navState='work'></NavBar>
      <motion.div
        class='content-box border-t-2 border-b-2 border-black'
        initial={{ height: 0, marginTop: 50 }}
        animate={{ height: 100, marginTop: 0 }}
        transition={{ duration: 0.45 }}
        layoutId='subNavBar'
      >
        <motion.div
          class='text-6xl py-3'
          initial={{ opacity: 0, translateX: '-100px' }}
          animate={{ opacity: 1, translateX: '0px' }}
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          work
        </motion.div>
      </motion.div>

      <ul class='mt-8'>{workList}</ul>
    </div>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      workItems,
    },
  };
};

export default Work;
