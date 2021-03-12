import React from 'react';
import { workItems } from '../../public/work';
import NextLink from 'next/link';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import Links from './Links';

const Pill = ({ text }) => {
  return (
    <div class='text-sm py-1 px-3 bg-gray-50 text-gray-700 inline-block font-semibold tech-pill mb-4 rounded-xl'>
      {text}
    </div>
  );
};

const Work = ({ selectedWork }) => {
  return (
    <motion.div
      class='border-white border-2 work-detail-background'
      layoutId={selectedWork.id + 'Border'}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.15 } }}
      transition={{ duration: 0.45, ease: 'easeInOut' }}
    >
      {/* <div class='ml-8 mt-4 sm:mt-8 absolute'>
        <NextLink href='/' class=''>
          <span class='text-3xl cursor-pointer'>{'<<'}</span>
        </NextLink>
      </div> */}
      <div class='px-8 lg:my-48 work-detail-outer mx-auto flex flex-col-reverse items-center lg:flex-row lg:space-x-8 my-16'>
        <motion.div
          class='text-box'
          initial={{ opacity: 0, x: -180 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35, delay: 0.25 }}
        >
          <motion.h1
            class='text-3xl cursor-pointer my-1'
            dangerouslySetInnerHTML={{ __html: selectedWork.title }}
            layoutId={selectedWork.title + 'Header'}
          ></motion.h1>
          <p class='text-gray-400 text-xl'>
            {selectedWork.group} &nbsp;{selectedWork.year}&nbsp;{' '}
            <Links selectedWork={selectedWork} />
          </p>
          <p class='text-xl mt-5'>{selectedWork.blurb}</p>
          <div class='mt-8 flex flex-row flex-wrap space-x-5 '>
            {selectedWork.tech.map((techName, index) => (
              <Pill text={techName} key={techName + index} />
            ))}
          </div>
        </motion.div>
        <motion.div
          transition={{ duration: 0.15, delay: 0.6 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          class='media-box border-gray-50 border-1'
        >
          <motion.img
            layoutId={selectedWork.id + 'Media'}
            src={primaryMediaPath}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export async function getStaticProps(context) {
  const { workId } = context.params;

  const projects = ['reactype', 'shifters', 'ampm', 'arco'];

  // grabs the target work object from list
  const selectedWork = workItems[projects.indexOf(workId)];

  return {
    props: { selectedWork },
  };
}

export async function getStaticPaths() {
  const projects = ['reactype', 'shifters', 'ampm', 'arco'];
  const paths = projects.map((workId) => ({
    params: { workId },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default Work;
