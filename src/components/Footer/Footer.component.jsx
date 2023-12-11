import "./Footer.styles.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="logo-container">
          <div className="logo">
            <img
              src="https://afforai.com/img/graphics/logo-new-violet.webp"
              alt="logo"
            />
            <span>Afforai</span>
          </div>
          <div className="sub-text">
            Afforai is your research tool in to damn near anything. Helping you
            summarise, translate, and withdraw data from documents.
          </div>
          <div className="copy">
            Copyright © 2023 Afforai Inc. All rights reserved.
          </div>
          <a
            href="https://www.producthunt.com/posts/afforai?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-afforai"
            target="_blank"
            className="ph-logo"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=403202&theme=light&period=daily"
              alt="Afforai - Summarize, interact, translate your documents with AI | Product Hunt"
              width="195"
              height="42"
            />
          </a>
          <div className="sputnik-container">
            <div>Backed by</div>
            <img
              src="https://afforai.com/img/logos/sputnikatx.png"
              height="46"
              width="137"
              alt="Sputnik ATX VC"
            />
          </div>
        </div>
        <div className="col">
          <div className="col-header">Company</div>
          <a href="/our_story">
            <div>Our Story</div>
          </a>
          <a href="https://afforai.getrewardful.com/signup" target="_blank">
            <div>Affiliate</div>
          </a>
          <a href="/security">
            <div>Security</div>
          </a>
          <a
            href="https://trello.com/b/98yNMfwA/afforai-roadmap"
            target="_blank"
          >
            <div>Roadmap</div>
          </a>
          <a href="/contact">
            <div>Contact Us</div>
          </a>
        </div>
        <div className="col">
          <div className="col-header">Resources</div>
          <a href="https://help.afforai.com/" target="_blank">
            <div>Help Center</div>
          </a>
          <a href="/documentation">
            <div>API Docs</div>
          </a>
          <a href="/terms_of_use">
            <div>Terms of Use</div>
          </a>
          <a href="/privacy_policy">
            <div>Privacy Policy</div>
          </a>
        </div>
        <div className="col">
          <div className="col-header">Follow Us</div>
          <a href="https://www.facebook.com/groups/afforai" target="_blank">
            <div>Facebook Group</div>
          </a>
          <a href="https://linkedin.com/company/afforai/" target="_blank">
            <div>LinkedIn</div>
          </a>
          <a href="https://twitter.com/afforai/" target="_blank">
            <div>Twitter</div>
          </a>
          <a href="https://medium.com/@alec-afforai" target="_blank">
            <div>Medium Blog</div>
          </a>
        </div>
        <div className="col">
          <div className="col-header">Language</div>
          <div>English</div>
          <div>Vietnamese</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
