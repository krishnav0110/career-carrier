import * as React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="div">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b623be7d1fa7531ca343c7c168b2bf5ee46d9ab498b32b3da6d35f47c808a63b?apiKey=d105f6bd6bb4472bba21449537e0b092&"
          className="img"
        />
        
        <div className="div-11">
          Navigate Your Future: Your Path to Success Starts Here
        </div>
        <div className="div-12">
          From exploration to achievement, we provide the compass you need to navigate through 
          the ever-evolving landscape of professional opportunities. Let's ignite your potential 
          and set sail towards your dream career.
        </div>
        <div className="div-13">
          <Link to="/assessment2"><div className="div-14">Start Asessment</div></Link>
          <Link to="/careers"><div className="div-15">Discover </div></Link>
        </div>
      </div>
      <style jsx>{`
        .div {
          disply: flex;
          flex-direction: column;
          overflow: hidden;
          position: relative;
          display: flex;
          min-height: 1110px;
          align-items: start;
          padding: 25px 80px 50px 24px;
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
        .div-11 {
          position: relative;
          color: var(--Colour-Main-Blue-900, #091133);
          font-feature-settings: "clig" off, "liga" off;
          letter-spacing: 1px;
          width: 539px;
          margin: 213px 0 0 128px;
          font: 500 40px/66px Roboto, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-11 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-12 {
          position: relative;
          color: var(--Colour-Main-Blue-500, #505f98);
          font-feature-settings: "clig" off, "liga" off;
          width: 539px;
          margin: 19px 0 0 128px;
          font: 400 18px/30px Roboto, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-12 {
            max-width: 100%;
          }
        }
        .div-13 {
          position: relative;
          display: flex;
          width: 408px;
          max-width: 100%;
          justify-content: space-between;
          gap: 20px;
          font-size: 16px;
          font-weight: 500;
          text-align: center;
          line-height: 162.5%;
          margin: 74px 0 0 128px;
        }
        @media (max-width: 991px) {
          .div-13 {
            margin: 40px 0 0 10px;
          }
        }
        .div-14 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Roboto, sans-serif;
          border-radius: 2px;
          background-color: var(--Colour-Main-Blue-800, #111b47);
          flex-grow: 1;
          justify-content: center;
          color: var(--colour-secondary-white-100-general, #fff);
          padding: 12px 35px;
        }
        @media (max-width: 991px) {
          .div-14 {
            padding: 0 20px;
          }
        }
        .div-15 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Roboto, sans-serif;
          border-radius: 2px;
          border: 2px solid var(--Colour-Main-Blue-900, #091133);
          flex-grow: 1;
          justify-content: center;
          align-items: center;
          color: var(--Colour-Main-Blue-900, #091133);
          padding: 12px 60px;
        }
        @media (max-width: 991px) {
          .div-15 {
            padding: 0 20px;
          }
        }
      `}</style>
    </>
  );
}


