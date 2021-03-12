// Currently no need to break out about-me and contact-section into their own components; will re-assess based on new content

const HeroSection = () => {
  return (
    <div className='hero-section'>
      <div className='about-me'>
        <p>
          Fredo Chen is a
          <br />
          frontend engineer
          <br />
          & creative developer
          <br />
          based in Los Angeles
        </p>
      </div>
      <div className='contact-section'>
        <ul className='contact-list'>
          <li>
            <a href='https://linkedin.com/in/fredochen' target='_blank'>
              linkedin
            </a>
          </li>
          <li>
            <a href='/chenfredo-resume.pdf' target='_blank'>
              resumé
            </a>
          </li>
          <li>
            <a href='https://github.com/fredosauce' target='_blank'>
              github
            </a>
          </li>
          <li>
            <a href='mailto:chenfredo@gmail.com' target='_blank'>
              email
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeroSection;
