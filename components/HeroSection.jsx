const HeroSection = () => {
  return (
    <div class='hero-section'>
      <div class='about-me'>
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
  );
};

export default HeroSection;
