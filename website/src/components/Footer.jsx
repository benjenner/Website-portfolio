import React from 'react'; 
import ScrollAnimation from './ScrollAnimation';

function Footer() {
    return (
      <>
      <ScrollAnimation>
        <footer>
          <p>© Benjamin Jennersjö</p>
  
          <div class="linksymbol">
            <a class="footerlink" href="https://github.com/benjenner">
              <img src="pictures/github-logo-24.png" />
            </a>
            <a
              class="footerlink"
              href="https://www.linkedin.com/in/benjamin-jennersj%C3%B6-68bb52331/"
            >
              <img src="pictures/linkedin-square-logo-24.png" />
            </a>
          </div>
          </footer>
        </ScrollAnimation>
      </>
    );
  }
  
  export default Footer;
  