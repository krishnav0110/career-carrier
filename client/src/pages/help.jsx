import * as React from "react";

export default function Help() {
  return (
    <>
      <div className="div">
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
          <div className="div-10">Log in/Register</div>
        </div>
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
        .div-2 {
          display: flex;
          width: 100%;
          justify-content: space-between;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .div-2 {
            max-width: 100%;
            margin-right: 4px;
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
          margin-top: 11px;
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
          flex-grow: 1;
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
          font-feature-settings: "clig" off, "liga" off;
          border-radius: 2px;
          background-color: var(--Colour-Main-Blue-800, #111b47);
          justify-content: center;
          color: var(--colour-secondary-white-100-general, #fff);
          text-align: center;
          margin: auto 0;
          padding: 8px 40px;
          font: 500 12px/150% Roboto, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-10 {
            padding: 0 20px;
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


