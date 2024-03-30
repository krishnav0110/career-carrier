import * as React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useRef, useContext } from "react";
import { Context } from "../context/Context";
import Navbar from "../components/Navbar";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type: "LOGIN_START"});
    try {
      const res = await axios.post("http://localhost:5001/api/auth/login", {
        email: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({type: "LOGIN_SUCCESS", payload: res.data});
      if(res.data.qualification) {
        window.location.replace("/");
      } else {
        window.location.replace("/goals");
      }
    } catch {
      dispatch({type: "LOGIN_FAILURE"});
    }
  };

  return (
    <>
      <Navbar />
      <div className="div">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/878d5a6a7b6444915e9cdc7464a5742e58ec406a5ac1ca1ab0d4184477d7b929?apiKey=d105f6bd6bb4472bba21449537e0b092&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/878d5a6a7b6444915e9cdc7464a5742e58ec406a5ac1ca1ab0d4184477d7b929?apiKey=d105f6bd6bb4472bba21449537e0b092&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/878d5a6a7b6444915e9cdc7464a5742e58ec406a5ac1ca1ab0d4184477d7b929?apiKey=d105f6bd6bb4472bba21449537e0b092&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/878d5a6a7b6444915e9cdc7464a5742e58ec406a5ac1ca1ab0d4184477d7b929?apiKey=d105f6bd6bb4472bba21449537e0b092&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/878d5a6a7b6444915e9cdc7464a5742e58ec406a5ac1ca1ab0d4184477d7b929?apiKey=d105f6bd6bb4472bba21449537e0b092&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/878d5a6a7b6444915e9cdc7464a5742e58ec406a5ac1ca1ab0d4184477d7b929?apiKey=d105f6bd6bb4472bba21449537e0b092&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/878d5a6a7b6444915e9cdc7464a5742e58ec406a5ac1ca1ab0d4184477d7b929?apiKey=d105f6bd6bb4472bba21449537e0b092&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/878d5a6a7b6444915e9cdc7464a5742e58ec406a5ac1ca1ab0d4184477d7b929?apiKey=d105f6bd6bb4472bba21449537e0b092&"
          className="img"
        />
        <div className="div-10">WELCOME BACK!</div>
        <div className="div-11">
          <span style={{fontFamily: "Nunito, sans-serif", color: "rgba(68,75,89,1)"}}>
            Don’t have a account,
          </span>{" "}
          <Link to="/signup"><span style={{fontFamily: "Nunito, sans-serif", fontWeight: 700, color: "rgba(134,153,218,1)"}}>
            Sign up
          </span></Link>
        </div>
        <form className="loginForm" onSubmit={handleSubmit}>
          <div className="div-12">Username</div>
          <input className="div-13" type="text" placeholder="sassy@gmail.com"
            ref={userRef}
          />
          <div className="div-12">Password</div>
          <input className="div-13" type="password" placeholder="********"
            ref={passwordRef}
          />
          <button className="div-20" type="submit" disabled={isFetching}>Sign In</button>
        </form>
      
        <div className="div-21">or continue with</div>
        <div className="div-22">
          <div className="div-23">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc985d64549f8c409b79b44428b23413d577cdeb872be0b4b786901c48fed007?apiKey=d105f6bd6bb4472bba21449537e0b092&"
              className="img-5"
            />
          </div>
          <div className="div-23">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0390edf078cfd566f679232592eef440b564683be2e3cf42aab73c93f5eecbd?apiKey=d105f6bd6bb4472bba21449537e0b092&"
              className="img-5"
            />
          </div>
          <div className="div-23">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/414c208105a4bd66b6c133d3a37a8fe63899ec15a69b98c03413c6d160795bb9?apiKey=d105f6bd6bb4472bba21449537e0b092&"
              className="img-5"
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        .loginForm {
          display: flex;
          flex-direction: column;
        }
        .div {
          disply: flex;
          flex-direction: column;
          overflow: hidden;
          position: relative;
          display: flex;
          // min-height: 1110px;
          align-items: start;
          padding: 9px 80px 50px 24px;
        }
        @media (max-width: 991px) {
          .div {
            padding: 0 20px;
          }
        }
        .img {
          position: absolute;
          inset: 0;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
        }
        .div-10 {
          position: relative;
          color: var(--black-2-5, #444b59);
          letter-spacing: 3.6px;
          white-space: nowrap;
          margin: 100px 0 0 82px;
          font: 800 24px Overpass, sans-serif;
        }
        @media (max-width: 991px) {
          .div-10 {
            white-space: initial;
            margin: 40px 0 0 10px;
          }
        }
        .div-11 {
          position: relative;
          color: var(--blue-1-7, #8699da);
          letter-spacing: 2.4px;
          margin: 36px 0 0 82px;
          font: 400 18px Open Sans, sans-serif;
        }
        @media (max-width: 991px) {
          .div-11 {
            margin-left: 10px;
          }
        }
        .div-12 {
          position: relative;
          color: #444b59;
          letter-spacing: 2.8px;
          margin: 20px 0 0 82px;
          font: 600 18px Nunito, sans-serif;
        }
        @media (max-width: 991px) {
          .div-12 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-13 {
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
          margin: 10px 0 0 82px;
          padding: 8px 20px;
          font: 400 18px Nunito, sans-serif;
        }
        @media (max-width: 991px) {
          .div-13 {
            white-space: initial;
            padding: 0 20px;
          }
        }
        .div-20 {
          position: relative;
          justify-content: space-between;
          align-items: center;
          border-radius: 80px;
          box-shadow: 4px 8px 12px 0px rgba(78, 99, 141, 0.06),
            0px 4px 12px 0px rgba(200, 211, 249, 0.6) inset;
          background-color: var(--blue-2-7, #8699da);
          width: 150px;
          max-width: 100%;
          color: var(--white, #fff);
          white-space: nowrap;
          letter-spacing: 2.8px;
          margin: 30px 0 0 82px;
          padding: 10px 20px;
          font: 800 18px Nunito, sans-serif;
        }
        @media (max-width: 991px) {
          .div-20 {
            white-space: initial;
            margin-top: 40px;
            padding: 0 20px;
          }
        }
        .div-21 {
          position: relative;
          background-color: var(--white, #fff);
          justify-content: center;
          color: var(--black-2-5, #444b59);
          white-space: nowrap;
          letter-spacing: 2px;
          margin: 10px 0 0 282px;
          padding: 8px 22px 8px 8px;
          font: 400 18px Nunito, sans-serif;
        }
        @media (max-width: 991px) {
          .div-21 {
            white-space: initial;
            margin-left: 10px;
            padding-right: 20px;
          }
        }
        .div-22 {
          position: relative;
          justify-content: space-between;
          display: flex;
          width: 516px;
          max-width: 100%;
          gap: 20px;
          margin: 11px 0 0 127px;
        }
        @media (max-width: 991px) {
          .div-22 {
            flex-wrap: wrap;
          }
        }
        .div-23 {
          justify-content: space-between;
          align-items: center;
          border-radius: 8px;
          border: 2px solid var(--dark-blue-1-8, #789ade);
          background-color: var(--white, #fff);
          display: flex;
          flex-grow: 1;
          flex-basis: 0%;
          flex-direction: column;
          padding: 10px;
        }
        @media (max-width: 991px) {
          .div-23 {
            padding: 0 20px;
          }
        }
        .img-5 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 30px;
        }
      `}</style>
    </>
  );
}


