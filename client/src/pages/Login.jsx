import * as React from "react";

export default function Login() {
  return (
    <>
      <div className="div">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/878d5a6a7b6444915e9cdc7464a5742e58ec406a5ac1ca1ab0d4184477d7b929?apiKey=d105f6bd6bb4472bba21449537e0b092&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/878d5a6a7b6444915e9cdc7464a5742e58ec406a5ac1ca1ab0d4184477d7b929?apiKey=d105f6bd6bb4472bba21449537e0b092&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/878d5a6a7b6444915e9cdc7464a5742e58ec406a5ac1ca1ab0d4184477d7b929?apiKey=d105f6bd6bb4472bba21449537e0b092&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/878d5a6a7b6444915e9cdc7464a5742e58ec406a5ac1ca1ab0d4184477d7b929?apiKey=d105f6bd6bb4472bba21449537e0b092&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/878d5a6a7b6444915e9cdc7464a5742e58ec406a5ac1ca1ab0d4184477d7b929?apiKey=d105f6bd6bb4472bba21449537e0b092&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/878d5a6a7b6444915e9cdc7464a5742e58ec406a5ac1ca1ab0d4184477d7b929?apiKey=d105f6bd6bb4472bba21449537e0b092&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/878d5a6a7b6444915e9cdc7464a5742e58ec406a5ac1ca1ab0d4184477d7b929?apiKey=d105f6bd6bb4472bba21449537e0b092&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/878d5a6a7b6444915e9cdc7464a5742e58ec406a5ac1ca1ab0d4184477d7b929?apiKey=d105f6bd6bb4472bba21449537e0b092&"
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
        <div className="div-10">WELCOME BACK!</div>
        <div className="div-11">
          <span style="font-family: Nunito, sans-serif; color: rgba(68,75,89,1);">
            Don’t have a account,
          </span>{" "}
          <span style="font-family: Nunito, sans-serif; font-weight: 700; color: rgba(134,153,218,1);">
            Sign up
          </span>
        </div>
        <div className="div-12">Username</div>
        <div className="div-13">deniel123@gmail.com</div>
        <div className="div-14">Password</div>
        <div className="div-15">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ea97a141cac90cbdfa7df9b8c132733949506f838895aef9fdf894cf7a4fe32?apiKey=d105f6bd6bb4472bba21449537e0b092&"
            className="img-2"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9dd5e2e735e2811a259637131f85864e86762c6447718aa916162656b7155a1a?apiKey=d105f6bd6bb4472bba21449537e0b092&"
            className="img-3"
          />
        </div>
        <div className="div-16">
          <div className="div-17">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c03caa0c787080d1d888598a521fafde3391ff9ae0b85ddb08f5df484071251c?apiKey=d105f6bd6bb4472bba21449537e0b092&"
              className="img-4"
            />
            <div className="div-18" />
          </div>
          <div className="div-19" />
        </div>
        <div className="div-20">Sign In</div>
        <div className="div-21">or continue with</div>
        <div className="div-22">
          <div className="div-23">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc985d64549f8c409b79b44428b23413d577cdeb872be0b4b786901c48fed007?apiKey=d105f6bd6bb4472bba21449537e0b092&"
              className="img-5"
            />
          </div>
          <div className="div-24">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0390edf078cfd566f679232592eef440b564683be2e3cf42aab73c93f5eecbd?apiKey=d105f6bd6bb4472bba21449537e0b092&"
              className="img-6"
            />
          </div>
          <div className="div-25">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/414c208105a4bd66b6c133d3a37a8fe63899ec15a69b98c03413c6d160795bb9?apiKey=d105f6bd6bb4472bba21449537e0b092&"
              className="img-7"
            />
          </div>
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
        .div-2 {
          position: relative;
          display: flex;
          width: 770px;
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
          white-space: nowrap;
          margin: 134px 0 0 82px;
          font: 800 36px Overpass, sans-serif;
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
          font: 400 24px Open Sans, sans-serif;
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
          margin: 60px 0 0 82px;
          font: 600 28px Nunito, sans-serif;
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
          width: 640px;
          max-width: 100%;
          justify-content: center;
          color: var(--blue-1-9, #c8d3f9);
          white-space: nowrap;
          letter-spacing: 2.4px;
          margin: 16px 0 0 82px;
          padding: 24px 32px;
          font: 400 24px Nunito, sans-serif;
        }
        @media (max-width: 991px) {
          .div-13 {
            white-space: initial;
            padding: 0 20px;
          }
        }
        .div-14 {
          position: relative;
          color: var(--black-2-5, #444b59);
          letter-spacing: 2.8px;
          margin: 36px 0 0 82px;
          font: 600 28px Nunito, sans-serif;
        }
        @media (max-width: 991px) {
          .div-14 {
            max-width: 100%;
          }
        }
        .div-15 {
          position: relative;
          justify-content: space-between;
          border-radius: 80px;
          border: 2px solid var(--dark-blue-1-8, #789ade);
          background-color: var(--white, #fff);
          display: flex;
          width: 640px;
          max-width: 100%;
          gap: 20px;
          margin: 16px 0 0 82px;
          padding: 24px 32px;
        }
        @media (max-width: 991px) {
          .div-15 {
            flex-wrap: wrap;
            padding: 0 20px;
          }
        }
        .img-2 {
          aspect-ratio: 4.17;
          object-fit: auto;
          object-position: center;
          width: 132px;
          max-width: 100%;
        }
        .img-3 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 32px;
        }
        .div-16 {
          position: relative;
          justify-content: space-between;
          display: flex;
          width: 640px;
          max-width: 100%;
          gap: 20px;
          margin: 36px 0 0 82px;
        }
        @media (max-width: 991px) {
          .div-16 {
            flex-wrap: wrap;
          }
        }
        .div-17 {
          display: flex;
          justify-content: space-between;
          gap: 16px;
        }
        .img-4 {
          aspect-ratio: 3.03;
          object-fit: auto;
          object-position: center;
          width: 48px;
        }
        .div-18 {
          width: 191px;
          height: 16px;
        }
        .div-19 {
          width: 190px;
          height: 16px;
        }
        .div-20 {
          position: relative;
          justify-content: space-between;
          align-items: center;
          border-radius: 80px;
          box-shadow: 4px 8px 12px 0px rgba(78, 99, 141, 0.06),
            0px 4px 12px 0px rgba(200, 211, 249, 0.6) inset;
          background-color: var(--blue-2-7, #8699da);
          width: 688px;
          max-width: 100%;
          color: var(--white, #fff);
          white-space: nowrap;
          letter-spacing: 2.8px;
          margin: 50px 0 0 82px;
          padding: 24px 60px 12px;
          font: 800 28px Nunito, sans-serif;
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
          margin: 33px 0 0 282px;
          padding: 8px 22px 8px 8px;
          font: 400 20px Nunito, sans-serif;
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
          padding: 15px 35px 8px;
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
          width: 50px;
        }
        .div-24 {
          align-items: center;
          border-radius: 8px;
          border: 2px solid var(--dark-blue-1-8, #789ade);
          background-color: #fff;
          display: flex;
          flex-grow: 1;
          flex-basis: 0%;
          justify-content: center;
          padding: 13px 36px;
        }
        @media (max-width: 991px) {
          .div-24 {
            padding: 0 20px;
          }
        }
        .img-6 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 48px;
        }
        .div-25 {
          justify-content: center;
          align-items: center;
          border-radius: 8px;
          border: 2px solid var(--dark-blue-1-8, #789ade);
          background-color: var(--white, #fff);
          display: flex;
          flex-grow: 1;
          flex-basis: 0%;
          padding: 15px 38px;
        }
        @media (max-width: 991px) {
          .div-25 {
            padding: 0 20px;
          }
        }
        .img-7 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 44px;
        }
      `}</style>
    </>
  );
}


