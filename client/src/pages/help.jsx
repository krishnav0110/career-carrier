import * as React from "react";
import Navbar from "../components/Navbar";

export default function Help() {
  return (
    <>
      <Navbar />
      <div className="div">
        <div className="div-11">Need Help?</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3daa6f2f8bb1f84bf4921f108ef3a007fbbc78d19b17ae68413ced2139c26267?apiKey=d105f6bd6bb4472bba21449537e0b092&"
          className="img"
        />
      </div>
      <style jsx>{`
        .div {
          background-color: #fff;
          display: flex;
          flex-direction: column;
          padding: 23px 0 50px 28px;
        }
        @media (max-width: 991px) {
          .div {
            padding-left: 20px;
          }
        }
        .div-11 {
          color: var(--Colour-Main-Blue-900, #091133);
          font-feature-settings: "clig" off, "liga" off;
          align-self: center;
          margin-top: 54px;
          white-space: nowrap;
          font: 500 48px/100% Roboto, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-11 {
            margin-top: 40px;
            font-size: 40px;
            white-space: initial;
          }
        }
        .img {
          aspect-ratio: 1.52;
          object-fit: auto;
          object-position: center;
          width: 480px;
          align-self: end;
          margin-top: 133px;
          max-width: 100%;
        }
        @media (max-width: 991px) {
          .img {
            margin-top: 40px;
          }
        }
      `}</style>
    </>
  );
}


