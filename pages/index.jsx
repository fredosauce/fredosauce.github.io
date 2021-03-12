import HeroSection from '../components/HeroSection';
import WorkSection from '../components/WorkSection';
import { workItems } from '../public/work';

const HomePage = ({ workItems }) => {
  return (
    <div class='page-wrapper'>
      <HeroSection />
      <WorkSection workItems={workItems} />
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
