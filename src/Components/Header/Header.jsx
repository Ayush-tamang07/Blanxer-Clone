import "./Header.css";
function Header() {
  return (
    <header>
      <nav className="nav-bar">
        <div className="header-link">
            <ul>
                <li><img src="https://www.blanxer.com/svg/logo_white.svg" alt="logo" width={120}/></li>
                <li><a href="#">Why Blanxer?</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">FAQ's</a></li>
                <li><a href="#">Pricing</a></li>
            </ul>
        </div>
        <div className="two-button">
            <button className="btn-login">Login</button>
            <button className="btn-getstarted">Get Started</button>
        </div>
      </nav>
    </header>
  );
}
export default Header;
