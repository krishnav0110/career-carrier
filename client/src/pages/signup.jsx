import * as React from "react";
import { useState } from "react";
import axios from "axios";

export default function SignUp( ) {
  const [email, setEmail] = useState("");
  const [firstName, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    setError(false);
    e.preventDefault();
    if(password !== confirmPass) {
      setError(true);
      return;
    }
    try {
      const res = await axios.post("http://localhost:5001/api/auth/register", {
        email,
        password,
        firstName,
        lastName
      });
      res.data && window.location.replace("/login");
    } catch(err) {
      setError(true);
    }
  };

  return (
    <>
      <div className="div">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3722f28f31566b3e01f9633879ac6bc8126f53bb019013db68898fc9b28121d8?apiKey=d105f6bd6bb4472bba21449537e0b092&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3722f28f31566b3e01f9633879ac6bc8126f53bb019013db68898fc9b28121d8?apiKey=d105f6bd6bb4472bba21449537e0b092&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3722f28f31566b3e01f9633879ac6bc8126f53bb019013db68898fc9b28121d8?apiKey=d105f6bd6bb4472bba21449537e0b092&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3722f28f31566b3e01f9633879ac6bc8126f53bb019013db68898fc9b28121d8?apiKey=d105f6bd6bb4472bba21449537e0b092&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3722f28f31566b3e01f9633879ac6bc8126f53bb019013db68898fc9b28121d8?apiKey=d105f6bd6bb4472bba21449537e0b092&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3722f28f31566b3e01f9633879ac6bc8126f53bb019013db68898fc9b28121d8?apiKey=d105f6bd6bb4472bba21449537e0b092&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3722f28f31566b3e01f9633879ac6bc8126f53bb019013db68898fc9b28121d8?apiKey=d105f6bd6bb4472bba21449537e0b092&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3722f28f31566b3e01f9633879ac6bc8126f53bb019013db68898fc9b28121d8?apiKey=d105f6bd6bb4472bba21449537e0b092&"
          className="img"
        />
        <div className="div-2">
          <div className="div-3">
            Career
            <br />
            Carrier
          </div>
          <div className="div-4">
            <div className="div-5">Careers</div>
            <div className="div-6">About</div>
            <div className="div-7">Contact</div>
            <div className="div-8">Help</div>
            <div className="div-9">Take Test</div>
          </div>
        </div>
        <form className="signupform" onSubmit={handleSubmit}>
          <div className="div-10">CREATE ACCOUNT</div>
          <div className="div-11">Email Id</div>
          <input className="div-12" type="text" placeholder="sassy@gmail.com"
            onChange={e => setEmail(e.target.value)}
          />
          <div className="div-11">First Name</div>
          <input className="div-12" type="text" placeholder="Sassy"
            onChange={e => setName(e.target.value)}
          />
          <div className="div-11">Last Name</div>
          <input className="div-12" type="text" placeholder="Sassy"
            onChange={e => setLastName(e.target.value)}
          />
          <div className="div-11">Create Password</div>
          <input className="div-12" type="password" placeholder="********"
            onChange={e => setPass(e.target.value)}
          />
          <div className="div-11">Confirm Password</div>
          <input className="div-12" type="password" placeholder="********"
            onChange={e => setConfirmPass(e.target.value)}
          />
          <button className="div-21">Create Account</button>
          {error && <span style={{color:"red", marginTop:"5px"}}>Something went wrong!</span>}
        </form>
      </div>
      <style jsx>{`
        .signupform {
          display: flex;
          flex-direction: column;
        }
        .div {
          disply: flex;
          flex-direction: column;
          overflow: hidden;
          position: relative;
          display: flex;
          align-items: start;
          padding: 16px 62px 34px;
        }
        @media (max-width: 991px) {
          .div {
            padding: 0 20px;
          }
        }
        .img {
          position: absolute;
          inset: 0;
          height: 80%;
          width: 100%;
          object-fit: cover;
          object-position: center;
        }
        .div-2 {
          position: relative;
          display: flex;
          width: 737px;
          max-width: 100%;
          justify-content: space-between;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .div-2 {
            flex-wrap: wrap;
          }
        }
        .div-3 {
          color: var(--Colour-Logo-Primary, #37447e);
          font-feature-settings: "clig" off, "liga" off;
          font: 900 26px/38px Roboto, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-4 {
          align-self: start;
          display: flex;
          margin-top: 12px;
          justify-content: space-between;
          gap: 20px;
          font-size: 14px;
          color: var(--Colour-Main-Blue-500, #505f98);
          font-weight: 400;
          line-height: 171%;
        }
        @media (max-width: 991px) {
          .div-4 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-5 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Roboto, sans-serif;
        }
        .div-6 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Roboto, sans-serif;
        }
        .div-7 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Roboto, sans-serif;
        }
        .div-8 {
          color: #505f98;
          font-feature-settings: "clig" off, "liga" off;
          font-family: Roboto, sans-serif;
        }
        .div-9 {
          color: #505f98;
          font-feature-settings: "clig" off, "liga" off;
          font-family: Roboto, sans-serif;
          flex-grow: 1;
          flex-basis: auto;
        }
        .div-10 {
          position: relative;
          color: var(--black-2-5, #444b59);
          letter-spacing: 3.6px;
          margin: 30px 0 0 49px;
          font: 800 18px Overpass, sans-serif;
        }
        @media (max-width: 991px) {
          .div-10 {
            margin: 40px 0 0 10px;
          }
        }
        .div-11 {
          position: relative;
          color: #444b59;
          letter-spacing: 2.8px;
          margin: 10px 0 0 49px;
          font: 600 18px Nunito, sans-serif;
        }
        @media (max-width: 991px) {
          .div-11 {
            max-width: 100%;
          }
        }
        .div-12 {
          position: relative;
          align-items: start;
          border-radius: 80px;
          border: 2px solid var(--dark-blue-1-8, #789ade);
          background-color: var(--white, #fff);
          width: 480px;
          max-width: 100%;
          justify-content: center;
          white-space: nowrap;
          letter-spacing: 2.4px;
          margin: 5px 0 0 49px;
          padding: 8px 20px;
          font: 400 18px Nunito, sans-serif;
        }
        @media (max-width: 991px) {
          .div-12 {
            white-space: initial;
            padding: 0 20px;
          }
        }
        .div-21 {
          position: relative;
          justify-content: space-between;
          align-items: center;
          border-radius: 80px;
          box-shadow: 4px 8px 12px 0px rgba(78, 99, 141, 0.06),
            0px 4px 12px 0px rgba(200, 211, 249, 0.6) inset;
          background-color: var(--blue-2-7, #8699da);
          width: 480px;
          max-width: 100%;
          color: var(--white, #fff);
          white-space: nowrap;
          letter-spacing: 2.8px;
          margin: 43px 0 0 49px;
          padding: 10px 20px;
          font: 800 18px Nunito, sans-serif;
        }
        @media (max-width: 991px) {
          .div-21 {
            white-space: initial;
            margin-top: 40px;
            padding: 0 20px;
          }
        }
      `}</style>
    </>
  );
}


