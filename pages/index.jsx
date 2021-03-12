import { motion, useMotionValue } from 'framer-motion';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Links from '../components/Links';
import { workItems } from '../public/work';

const openSpring = { type: 'spring', duration: 0.6, bounce: 0.2 };
const closeSpring = {
  type: 'spring',
  duration: 0.45,
  bounce: 0.4,
};

const Pill = ({ text }) => {
  return <div class='tech-pill'>{text}</div>;
};

const Overlay = ({ isSelected }) => (
  <motion.div
    initial={false}
    animate={{ opacity: isSelected ? 1 : 0 }}
    transition={{ duration: 0.35 }}
    style={{ pointerEvents: isSelected ? 'auto' : 'none' }}
    className='overlay'
  >
    <Link to='/' />
  </motion.div>
);

const List = ({ workItems, match }) => {
  return (
    <ul class='flex flex-row flex-wrap justify-center '>
      {workItems.map((item, index) => {
        // const isSelected =
        const isSelected = match.params.id === item.id;
        const primaryMediaPath = item.media[0];
        const key = 'work-' + index;

        const y = useMotionValue(0);
        return (
          <li class='work-item' key={key}>
            <Overlay isSelected={isSelected} />
            <motion.div
              className={`overflow-hidden relative work-item-wrapper rounded-md border-1  ${
                isSelected && 'open rounded-xl'
              }`}
              transition={isSelected ? openSpring : closeSpring}
              layout
            >
              <div class='work-media-wrapper absolute z-0'>
                <motion.img
                  layoutId={item.id + 'Media'}
                  class='gray-filter relative'
                  src={primaryMediaPath}
                  layout
                />
              </div>
              <motion.div
                class={`flex flex-col flex-nowrap items-center work-item-detail-wrapper cursor-pointer ease-out space-x-4 bg-black bg-opacity-60 hover:bg-opacity-80 relative z-0 justify-center ${
                  isSelected && ''
                }`}
                layout
              >
                <Link class='close-icon font-base' to='/'>
                  +
                </Link>
                <div class='work-title-wrapper'>
                  <motion.h1
                    class='text-xl font-semibold cursor-pointer tracking-wider spectral'
                    layout
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  ></motion.h1>
                </div>
                <Link class='work-detail-link' to={'/' + item.id}></Link>
              </motion.div>
              <motion.div
                class='px-8 lg:my-24 work-detail-outer mx-auto flex flex-col-reverse lg:flex-row-reverse items-center justify-around my-16'
                layout
              >
                <motion.div class='text-box'>
                  <motion.h1
                    class='text-2xl md:text-3xl cursor-pointer spectral inline-block mr-4'
                    layout
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  ></motion.h1>
                  <Links selectedWork={item} />
                  <p class='text-gray-400 text-lg'>
                    {item.group}&nbsp;{item.year}&nbsp;{' '}
                  </p>

                  <p class='text-base leading-5 mt-4'>{item.blurb}</p>
                  <div class='mt-6 flex flex-row flex-wrap'>
                    {item.tech.map((techName, index) => (
                      <Pill text={techName} key={techName + index} />
                    ))}
                  </div>
                </motion.div>
                <motion.div layout class='media-box border-gray-50 border-1'>
                  <motion.img class='' src={primaryMediaPath} />
                </motion.div>
              </motion.div>
            </motion.div>
          </li>
        );
      })}
    </ul>
  );
};

const HomePage = ({ workItems }) => {
  // const [coins, setCoins] = useState([]);
  // console.log('data from homepage: ', data);

  return (
    <div class='flex flex-col mx-auto page-wrapper px-4 sm:px-12 md:text-xl text-lg'>
      <div class='hero-section flex flex-row justify-between py-4 sm:py-12  mx-auto'>
        <div class='hero-inner left'>
          <p class='font-medium'>
            Fredo Chen is a
            <br />
            <div class='resume-link-wrapper'>
              frontend engineer
              <br />& creative developer
              <br />
              based in Los Angeles
            </div>
          </p>
        </div>
        <div class='contact-section'>
          <ul class='contact-list'>
            <li class=''>
              <a href='https://linkedin.com/in/fredochen' target='_blank'>
                linkedin
              </a>
            </li>
            <li class=''>
              <a href='/chenfredo-resume.pdf' target='_blank'>
                resumé
              </a>
            </li>
            <li class=''>
              <a href='https://github.com/fredosauce' target='_blank'>
                github
              </a>
            </li>
            <li class=''>
              <a href='mailto:chenfredo@gmail.com' target='_blank'>
                email
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class='work-section mx-auto'>
        <div class=' tracking-wide mt-12 mb-4 text-center'>Selected work</div>
        <Router>
          <Route
            path={['/:id', '/']}
            children={({ match }) => (
              <List match={match} workItems={workItems} />
            )}
          />
        </Router>
      </div>
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

export default HomePage;
