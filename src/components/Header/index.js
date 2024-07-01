
import './index.css'

function Header(){
  return(
    <nav className="nav-header">
    <div className="nav-content">
      <img
        className="website-logo"
        src="https://www.accaglobal.com/etc.clientlibs/acca/clientlibs/static-assets/resources/img/logo.svg"
        alt="website logo"
      />
      <ul className="nav-menu">
        <li className="nav-link">
          Become ACCA
        </li>
        <li className="nav-link">
          Why Choose Us?
        </li>
        <li className="nav-link">
            Eligibility
        </li>
      <li className="nav-link">
            Placements
        </li>
        <li className="nav-link">
            Kick Start 
        </li>
      </ul>
      <button type="button" className="logout-desktop-btn">
        Sigup/Login
      </button>
      <button type="button" className="logout-mobile-btn">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="logout icon"
          className="logout-icon"
        />
      </button>
    </div>
  </nav>
  )
}

export default Header