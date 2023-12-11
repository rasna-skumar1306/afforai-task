import "./header.styles.scss";

const Header = () => {
  return (
    <div className="header container-fluid">
      <nav className="navbar">
        <div className="logo">
          <img
            src="https://afforai.com/img/graphics/logo-new-violet.webp"
            alt="logo"
          />
          <span>Afforai</span>
        </div>
        <div className="navlinks">
          <span className="navlink">
            <a
              href="https://afforai.getrewardful.com/signup"
              target="_blank"
              rel="noopener noreferrer"
            >
              Affiliate
            </a>
          </span>
          <span className="navlink">
            <a
              href="https://afforai.com/pricing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pricing
            </a>
          </span>
          <span className="navlink">
            <a href="#testimonial" target="_blank" rel="noopener noreferrer">
              Testimonials
            </a>
          </span>
          <span className="navlink">
            <a
              href="https://afforai.com/#testimonial"
              target="_blank"
              rel="noopener noreferrer"
            >
              Help Center
            </a>
          </span>
        </div>
        <div className="header-btns">
          <button className="btn">Log in</button>
          <button className="btn-free">Try for free</button>
        </div>
      </nav>
      <div className="empty-container" />
    </div>
  );
};

export default Header;
