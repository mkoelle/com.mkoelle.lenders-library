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
          <a className="navbar-item" href="#">
            <img  width="28" height="28" className={styles.logo} alt='logo' src={logo}/>
            <p className="title is-3 nav-title">Lenders Library</p>
          </a>
          <div
            className="navbar-burger burger"
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
            <a className="navbar-item" href="#">Home</a>
            <a className="navbar-item" href="#">Tabs</a>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <a className="button is-small">
                    <span className="icon">
                      <i className="fa fa-user-plus"></i>
                    </span>
                    <span>Register</span>
                  </a>
                </p>
                <p className="control">
                  <a className="button is-small login">
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
    <nav className="navbar is-hidden-mobile is-hidden-tablet-only">
      <div className="container">
        <div className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item is-active" href="#">Popular</a>
            <a className="navbar-item" href="#">Recent</a>
            <a className="navbar-item" href="#">Rising</a>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <input
                className="input"
                type="search"
                placeholder="Search library..."
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  </React.Fragment>
  );
}

export default Navbar;
