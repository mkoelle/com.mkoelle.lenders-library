import React, {useState} from 'react';
import logo from '../../assets/logo.png'
import styles from'./Navbar.module.css'

function Navbar() {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <React.Fragment>
    <nav className="navbar topNav">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="/#">
            <img  width="28" height="28" className={styles.logo} alt='logo' src={logo}/>
            <p className="title is-3 nav-title">Lenders Library</p>
          </a>
          <div
           className={`navbar-burger burger ${navOpen && "is-active"}`}
            onClick={() => setNavOpen(!navOpen)}
            data-target="topNav"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="topNav" className={`navbar-menu ${navOpen && "is-active"}`} > 
          <div className="navbar-start">
            <a className="navbar-item" href="/#">Home</a>
            <a className="navbar-item" href="/#">Tabs</a>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <a className="button is-small" href="/#">
                    <span className="icon">
                      <i className="fa fa-user-plus"></i>
                    </span>
                    <span>Register</span> 
                  </a>
                </p>
                <p className="control">
                  <a className="button is-small login" href="/#">
                    <span className="icon">
                      <i className="fa fa-user"></i>
                    </span>
                    <span>Login</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </React.Fragment>
  );
}

export default Navbar;
