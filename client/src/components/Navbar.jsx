import * as React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context/Context";
import logo from "../images/logo.jpg";

export default function Navbar() {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({type: "LOGOUT"});
  }

  return (
    <>
      <div className="navbar-con">
        <Link to="/"><img src={logo} className="navbar-logo" />
        </Link>
        <div className="navbar-links">
          <Link to="/Careers"><div className="navbar-link">Careers</div></Link>
          <Link to="/About"><div className="navbar-link">About</div></Link>
          <Link to="/ContactUs"><div className="navbar-link">Contact</div></Link>
          <Link to="/Help"><div className="navbar-link">Help</div></Link>
          <Link to="/Assessment2"><div className="navbar-link">Take Test</div></Link>
        </div>
        {user ? (
          <button className="navbar-login" onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/Login"><div className="navbar-login">Log in/Register</div></Link>
        )}
        
      </div>
      <style jsx>{`
        a {
          text-decoration: none;
        }
        .navbar-con {
          background-color: #ffffff;
          position: fixed;
          align-self: stretch;
          display: flex;
          margin-right: 11px;
          width: 100%;
          justify-content: space-between;
          gap: 20px;
          z-index: 1000;
          box-shadow: rgba(0, 0, 0, 0.05) 0px 5px 10px;
        }
        @media (max-width: 991px) {
          .navbar-con {
            max-width: 100%;
            margin-right: 10px;
            flex-wrap: wrap;
          }
        }
        .navbar-logo {
          margin: 15px;
          width: 100px;
          color: var(--Colour-Logo-Primary, #37447e);
          font-feature-settings: "clig" off, "liga" off;
          font: 900 26px/38px Roboto, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .navbar-links {
          align-self: start;
          display: flex;
          margin-top: 25px;
          justify-content: space-between;
          gap: 20px;
          font-size: 14px;
          color: var(--Colour-Main-Blue-500, #505f98);
          font-weight: 400;
          white-space: nowrap;
          line-height: 171%;
        }
        @media (max-width: 991px) {
          .navbar-links {
            max-width: 100%;
            flex-wrap: wrap;
            white-space: initial;
          }
        }
        .navbar-link {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Roboto, sans-serif;
          flex-grow: 1;
          color: var(--Colour-Logo-Primary, #37447e);
        }
        .navbar-login {
          font-feature-settings: "clig" off, "liga" off;
          border-radius: 2px;
          background-color: var(--Colour-Main-Blue-800, #111b47);
          justify-content: center;
          color: var(--colour-secondary-white-100-general, #fff);
          text-align: center;
          margin: 20px 10px;
          padding: 7px 40px;
          font: 500 12px/150% Roboto, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .navbar-login {
            padding: 0 20px;
          }
        }
      `}</style>
    </>
  );
}


