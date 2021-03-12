import Links from './Links';
import { motion, useMotionValue } from 'framer-motion';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

const openSpring = { type: 'spring', duration: 0.6, bounce: 0.2 };
const closeSpring = {
  type: 'spring',
  duration: 0.45,
  bounce: 0.4,
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

const WorkList = ({ workItems, match }) => {
  return (
    <ul>
      {workItems.map((item, index) => {
        const isSelected = match.params.id === item.id;
        const primaryMediaPath = item.media[0];
        const key = 'work-' + index;

        const y = useMotionValue(0);
        return (
          <li className='work-item' key={key}>
            <Overlay isSelected={isSelected} />
            <motion.div
              className={`work-item-wrapper  ${
                isSelected && 'open rounded-xl'
              }`}
              transition={isSelected ? openSpring : closeSpring}
              layout
            >
              <div className='work-media-wrapper '>
                <motion.img
                  layoutId={item.id + 'Media'}
                  src={primaryMediaPath}
                  layout
                />
              </div>
              <motion.div
                className={`work-item-detail-wrapper ${isSelected && ''}`}
                layout
              >
                <Link className='close-icon' to='/'>
                  +
                </Link>
                <div className='work-title-wrapper'>
                  <motion.h1
                    layout
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  ></motion.h1>
                </div>
                <Link className='work-detail-link' to={'/' + item.id}></Link>
              </motion.div>
              <motion.div className='work-detail-outer' layout>
                <motion.div className='text-box'>
                  <motion.h1
                    layout
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  ></motion.h1>
                  <Links selectedWork={item} />
                  <h2>
                    {item.group}&nbsp;{item.year}&nbsp;{' '}
                  </h2>

                  <p>{item.blurb}</p>
                  <div className='pill-wrap'>
                    {item.tech.map((techName, index) => (
                      <div class='tech-pill'>{text}</div>
                    ))}
                  </div>
                </motion.div>
                <motion.div layout className='media-box'>
                  <motion.img src={primaryMediaPath} />
                </motion.div>
              </motion.div>
            </motion.div>
          </li>
        );
      })}
    </ul>
  );
};

const WorkSection = ({ workItems }) => {
  return (
    <div class='work-section'>
      <p>Selected work</p>
      <Router>
        <Route
          path={['/:id', '/']}
          children={({ match }) => (
            <WorkList match={match} workItems={workItems} />
          )}
        />
      </Router>
    </div>
  );
};

export default WorkSection;
