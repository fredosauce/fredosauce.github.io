import { motion } from 'framer-motion';
import NavBar from '../components/NavBar';

const Info = () => {
  return (
    <div class='flex flex-col outer-wrapper mx-auto px-6'>
      <NavBar navState='info'></NavBar>
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
          about me
        </motion.div>
      </motion.div>

      <motion.div
        class='mt-8'
        initial={{ opacity: 0, translateY: '-100px' }}
        animate={{ opacity: 1, translateY: '0px' }}
        transition={{ delay: 0.35, duration: 0.3 }}
      >
        <p class='text-lg tracking-wide'>
          I am a front-end software engineer and creative web developer with
          years of experience in the open-source community and digital
          advertising industry. I make websites, web apps and interactive
        </p>
        <p class='text-lg mt-6 tracking-wide'>
          Most recently, I've been contributing to ReacType, a visual
          prototyping tool that allows users to quickly mock up and export
          layouts as pure React components, or as code templates for a Next.js
          project.
        </p>
        <p class='text-lg mt-6 tracking-wide'>
          Prior to that, I crafted web sites, apps, and interactive digital
          experiences at RPA for a variety of well-known brands, including
          Honda, <span class='italic'>ampm</span>, Arco, and SouthWest Airlines.
        </p>
        <p class='text-lg mt-6 tracking-wide'>
          I'm resourceful, collaborative, I pay attention to detail while always
          having big picture in mind. I'm comfortable picking up new
          technologies and experimenting with libraries.
        </p>
      </motion.div>
    </div>
  );
};

export default Info;
