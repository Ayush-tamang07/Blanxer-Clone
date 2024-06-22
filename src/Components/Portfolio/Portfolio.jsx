import './Portfolio.css'

function Portfolio() {
    return (
      <>
        <div className="portfolio-heading">
          Some of the Coolest Websites <br />
          built with Blanxer
        </div>
        <div className="portfolio-message">
          Design a cool website and tag us on socials to get featured here!
        </div>
        <div className="projects">
            <div className="dj">
                <img src="https://blanxer.s3.ap-south-1.amazonaws.com/files/website/1.png" alt="dj" width={378.667}/>
            </div>
            <div className="equiper">
                <img src="https://blanxer.s3.ap-south-1.amazonaws.com/files/website/2.png" alt="equiper" width={378.667} />
            </div>
            <div className="alpha">
                <img src="https://blanxer.s3.ap-south-1.amazonaws.com/files/website/3.png" alt="alpha" width={378.667} />
            </div>
        </div>
      </>
    );
  }
  export default Portfolio;
  