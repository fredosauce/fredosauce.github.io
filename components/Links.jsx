// Links are constructed in a convoluted way currently, but I'm okay with it

import { GitHub, ExternalLink } from 'react-feather';

const Links = ({ selectedWork }) => {
  const primaryMediaPath = selectedWork.media[0];
  const RepoLink = () =>
    selectedWork.repo ? (
      <a
        className='text-blue-400 text-xs hover:underline'
        href={selectedWork.repo}
        target='_blank'
      >
        <GitHub size={18} />
      </a>
    ) : null;
  const SiteLink = () =>
    selectedWork.siteUrl ? (
      <a
        className='text-blue-400 text-xs hover:underline'
        href={selectedWork.siteUrl}
        target='_blank'
      >
        <ExternalLink size={18} />
      </a>
    ) : null;

  return (
    <>
      <div className='text-center inline-block'>
        {RepoLink() !== null && SiteLink() !== null ? (
          <>
            <SiteLink />
            &nbsp;&nbsp;&nbsp;
            <RepoLink />
          </>
        ) : RepoLink() !== null ? (
          <>
            <RepoLink />
          </>
        ) : SiteLink() !== null ? (
          <>
            <SiteLink />
          </>
        ) : null}
      </div>
    </>
  );
};

export default Links;
