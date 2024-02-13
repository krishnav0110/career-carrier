import * as React from "react";

export default function Home() {
  return (
    <>
      <div className="div">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b623be7d1fa7531ca343c7c168b2bf5ee46d9ab498b32b3da6d35f47c808a63b?apiKey=d105f6bd6bb4472bba21449537e0b092&"
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
          <div className="div-10">Log in/Register</div>
        </div>
        <div className="div-11">
          Discover your Top Career matches and why they are right for you
        </div>
        <div className="div-12">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus <br />
          mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
          sem. Nulla consequat massa quis enim.
        </div>
        <div className="div-13">
          <div className="div-14">Start Asessment</div>
          <div className="div-15">Discover </div>
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
        .div-2 {
          position: relative;
          align-self: stretch;
          display: flex;
          margin-right: 11px;
          width: 100%;
          justify-content: space-between;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .div-2 {
            max-width: 100%;
            margin-right: 10px;
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
          white-space: nowrap;
          line-height: 171%;
        }
        @media (max-width: 991px) {
          .div-4 {
            max-width: 100%;
            flex-wrap: wrap;
            white-space: initial;
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
        }
        @media (max-width: 991px) {
          .div-9 {
            white-space: initial;
          }
        }
        .div-10 {
          font-feature-settings: "clig" off, "liga" off;
          border-radius: 2px;
          background-color: var(--Colour-Main-Blue-800, #111b47);
          justify-content: center;
          color: var(--colour-secondary-white-100-general, #fff);
          text-align: center;
          margin: auto 0;
          padding: 7px 40px;
          font: 500 12px/150% Roboto, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-10 {
            padding: 0 20px;
          }
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


