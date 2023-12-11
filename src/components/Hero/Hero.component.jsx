import "./hero.styles.scss";
import TickLogo from "../../assets/tick.svg";

const Hero = () => {
  return (
    <div className="hero container-fluid">
      <div className="hero-container">
        <div className="promo">{/* appsumo promo */}</div>
        <div className="main-text">
          Your second brain for maximizing productivity
        </div>
        <div className="sub-text">
          Afforai is an AI chatbot that searches, summarizes, and translates
          info from multiple sources to produce trustworthy research. Feed
          lengthy research documents to stacks of dry compliance requirements
          and extract the key findings you need.
        </div>
        <div className="key-features">
          <span>
            <img src={TickLogo} alt="tick" />
            Summarize Key Findings
          </span>
          <span>
            <img src={TickLogo} alt="tick" />
            Compare Between Documents
          </span>
          <span>
            <img src={TickLogo} alt="tick" />
            Search For Answers
          </span>
          <span>
            <img src={TickLogo} alt="tick" />
            Ask in Any Language
          </span>
        </div>

        <div className="hero-btns">
          <button className="btn-free">Try for free</button>
          <button className="btn">View pricing</button>
        </div>

        <div className="dashboard">
          <div className="img-1">
            <img
              src="https://afforai.com/img/graphics/laptop-landing-1.png"
              width="100%"
            />
          </div>
          <div className="img-2">
            <img
              src="https://afforai.com/img/graphics/laptop-landing-3.png"
              width="100%"
            />
          </div>
        </div>

        <div className="customers">
          <div>
            Loved by <span>20,000+</span> users around the world
          </div>
          <img
            src="https://afforai.com/img/graphics/laptop-landing-2.png"
            alt="users"
            width="336"
            height="48"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
