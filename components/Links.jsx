import { GitHub, ExternalLink } from 'react-feather';

const Links = ({ selectedWork }) => {
  const primaryMediaPath = selectedWork.media[0];
  const RepoLink = () =>
    selectedWork.repo ? (
      <a
        class='text-blue-400 text-xs hover:underline'
        href={selectedWork.repo}
        target='_blank'
      >
        <GitHub size={18} />
      </a>
    ) : null;
  const SiteLink = () =>
    selectedWork.siteUrl ? (
      <a
        class='text-blue-400 text-xs hover:underline'
        href={selectedWork.siteUrl}
        target='_blank'
      >
        <ExternalLink size={18} />
      </a>
    ) : null;

  return (
    <>
      <div class='text-center inline-block'>
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
