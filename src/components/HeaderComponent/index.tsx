import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const HeaderComponent: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <header className="page-header">
        <nav className="main-menu static-top navbar-dark navbar navbar-expand-lg fixed-top mb-1">
          <div className="container">
            <Link
              className="navbar-brand animated"
              data-animation="fadeInDown"
              data-animation-delay="1s"
              to="/"
              onClick={() => {}}
            >
              <img
                src="./theme-assets/images/dice.png"
                style={{ maxHeight: "35px" }}
                alt="Logo"
              />
              <span
                className="brand-text font-weight-bold"
                style={{ fontSize: "16px" }}
              >
                Agastya QuantLabs
              </span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={toggleMobileMenu}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={
                mobileMenuOpen
                  ? "collapse navbar-collapse show"
                  : "collapse navbar-collapse"
              }
              id="navbarCollapse"
            >
              <div
                id="navigation"
                className="navbar-nav ml-auto"
                style={{ paddingTop: "3px" }}
              >
                <ul className="navbar-nav mt-1">
                  <li
                    className="nav-item animated"
                    data-animation="fadeInDown"
                    data-animation-delay="1.1s"
                  >
                    <a
                      className="nav-link"
                      href="/#"
                      onClick={() => {
                        
                      }}
                    >
                      Home
                    </a>
                  </li>
                  <li
                    className="nav-item animated"
                    data-animation="fadeInDown"
                    data-animation-delay="1.2s"
                  >
                    <a
                      className="nav-link"
                      href="/#"
                      onClick={() => {
                      }}
                    >
                      Company
                    </a>
                  </li>
                <li
                    className="nav-item animated"
                    data-animation="fadeInDown"
                    data-animation-delay="1.1s"
                  >
                    <a
                      className="nav-link"
                      href="/#"
                      onClick={() => {
                        
                      }}
                    >
                      Services
                    </a>
                  </li>
                  <li
                    className="nav-item animated"
                    data-animation="fadeInDown"
                    data-animation-delay="1.2s"
                  >
                    <a
                      className="nav-link"
                      href="/#"
                      onClick={() => {
                      }}
                    >
                      Work
                    </a>
                  </li>
                  <li
                    className="nav-item animated"
                    data-animation="fadeInDown"
                    data-animation-delay="1.1s"
                  >
                    <a
                      className="nav-link"
                      href="/#"
                      onClick={() => {
                        
                      }}
                    >
                      Careers
                    </a>
                  </li>
                  <li
                    className="nav-item animated"
                    data-animation="fadeInDown"
                    data-animation-delay="1.2s"
                  >
                    <a
                      className="nav-link"
                      href="/#"
                      onClick={() => {
                      }}
                    >
                      Team
                    </a>
                  </li>
                  <li
                    className="nav-item animated"
                    data-animation="fadeInDown"
                    data-animation-delay="1.2s"
                  >
                    <a
                      className="nav-link"
                      href="/#"
                      onClick={() => {
                      }}
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default HeaderComponent;