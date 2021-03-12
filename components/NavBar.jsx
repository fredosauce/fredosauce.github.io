import { motion } from 'framer-motion';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

const NavBar = ({ navState }) => {
  const navLinks = ['work', 'info', 'etc'];
  const router = useRouter();

  const handleNavClick = (e, dest) => {
    e.preventDefault();
    console.log('hello work');
    router.push(dest);
  };
  const myName = 'fredo chen';
  let fontSize = 'sm:text-3xl text-2xl';
  let classMods = 'mt-5';
  if (navState === 'home') {
    classMods = 'mt-5';
  } else {
    fontSize = 'sm:text-3xl text-2xl';
    classMods += ' default-height';
  }
  const navComponents = navLinks.map((item, index) => {
    let stepDelay = navState !== 'home' ? 0.25 * (1 + index) : 0;
    let motionId = item + 'Header';
    let spacer = ',';
    let navTitle = item;
    let dest = '/' + item;
    let strikeMod = navState === item ? 'line-through text-gray-300' : '';
    return (
      <NextLink
        href={dest}
        onClick={(e) => {
          handleNavClick(e, dest);
        }}
        key={index + item}
      >
        <motion.div
          layout
          class={`inline-block ml-1 mr-1 cursor-pointer ${strikeMod}`}
          layoutId={motionId}
        >
          {navTitle}
          {index < navLinks.length - 1 ? ', ' : ' '}
        </motion.div>
      </NextLink>
    );
  });

  return (
    <motion.div
      layout
      class={`mb-3 w-full ${classMods} ${fontSize}`}
      id='navBarId'
    >
      <NextLink href='/'>
        <motion.div
          layout
          class='name inline-block cursor-pointer'
          layoutId='nameId'
          transition={{ duration: 0.35 }}
          initial={{ opacity: 0, translateY: '-55px' }}
          animate={{ opacity: 1, translateY: '0px' }}
        >
          {myName}
        </motion.div>
      </NextLink>
      <motion.div
        layout
        class='inline-block float-right'
        layoutId='rightNavId'
        transition={{ duration: 0.35 }}
        initial={{ opacity: 0, translateY: '-55px' }}
        animate={{ opacity: 1, translateY: '0px' }}
      >
        {'( '}
        {navComponents}
        {' )'}
      </motion.div>
    </motion.div>
  );
};

export default NavBar;
