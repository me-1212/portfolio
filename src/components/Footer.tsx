import "../css/Footer.css";

function Footer() {
  return (
    <>
      <hr className="hor-line"/>
      <div className="text">
        <p>Contact me</p>
      </div>
      <div className="icons">
          <a href="mailto:abeydemissie26@gmail.com">
            <img src="email.png" />
          </a>
          <a href="https://t.me/your-telegram">
            <img src="telegram.png" />
          </a>
          <a href="https://your-website.com">
            <img src="web.png" />
          </a>
      </div>
      <div className="copyright">
        <small>&copy; 2025 Portfolio. Stoman</small>
      </div>
    </>
  );
}

export default Footer;
