import * as React from "react";

export default function Matched() {
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
            <div className="div-5">Career</div>
            <div className="div-6">About</div>
            <div className="div-7">Contact</div>
            <div className="div-8">Help</div>
            <div className="div-9">Take Test</div>
          </div>
        </div>
        <div className="div-10">
          <div className="div-11">
            <div className="column">
              <div className="div-12">
                <div className="div-13">How to pursue?</div>
                <div className="div-14">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus <br />
                  mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                  quis, sem. Nulla consequat massa quis enim.
                </div>
                <div className="div-15">
                  Qualifications and certification courses required
                </div>
                <div className="div-16" />
                <div className="div-17" />
                <div className="div-18" />
                <div className="div-19" />
                <div className="div-20" />
              </div>
            </div>
            <div className="column-2">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3eb18850d1947ee12e7c5be9b0110ce9f154f2cb756f0d82a6fc7d8670515494?apiKey=d105f6bd6bb4472bba21449537e0b092&"
                className="img"
              />
            </div>
          </div>
        </div>
        <div className="div-21">
          If you are not satisfied with the results, you can explore and take
          test again.
        </div>
        <div className="div-22">
          <div className="div-23">
            <div className="div-24">Start Asessment again</div>
            <div className="div-25">Discover </div>
          </div>
          <div className="div-26">Give Feedback</div>
        </div>
      </div>
      <style jsx>{`
        .div {
          background-color: #fff;
          display: flex;
          flex-direction: column;
          padding: 23px 64px 49px 32px;
        }
        @media (max-width: 991px) {
          .div {
            padding: 0 20px;
          }
        }
        .div-2 {
          display: flex;
          width: 579px;
          max-width: 100%;
          justify-content: space-between;
          gap: 20px;
          white-space: nowrap;
        }
        @media (max-width: 991px) {
          .div-2 {
            flex-wrap: wrap;
            white-space: initial;
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
          background-color: rgba(216, 212, 244, 1);
          align-self: center;
          margin-top: 19px;
          width: 1273px;
          max-width: 100%;
          padding: 34px 80px 34px 16px;
        }
        @media (max-width: 991px) {
          .div-10 {
            padding-right: 20px;
          }
        }
        .div-11 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-11 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 50%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column {
            width: 100%;
          }
        }
        .div-12 {
          display: flex;
          flex-grow: 1;
          flex-direction: column;
          font-size: 36px;
          color: #091133;
          font-weight: 500;
        }
        @media (max-width: 991px) {
          .div-12 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-13 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Roboto, sans-serif;
          line-height: 133%;
        }
        @media (max-width: 991px) {
          .div-13 {
            max-width: 100%;
          }
        }
        .div-14 {
          color: var(--Colour-Main-Blue-400, #6f7cb2);
          font-feature-settings: "clig" off, "liga" off;
          margin-top: 13px;
          font: 400 16px/26px Roboto, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-14 {
            max-width: 100%;
          }
        }
        .div-15 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Roboto, sans-serif;
          line-height: 48px;
          margin-top: 27px;
        }
        @media (max-width: 991px) {
          .div-15 {
            max-width: 100%;
          }
        }
        .div-16 {
          background-color: #bdbbe0;
          margin-top: 12px;
          height: 73px;
        }
        @media (max-width: 991px) {
          .div-16 {
            max-width: 100%;
          }
        }
        .div-17 {
          background-color: #bdbbe0;
          margin-top: 28px;
          height: 73px;
        }
        @media (max-width: 991px) {
          .div-17 {
            max-width: 100%;
          }
        }
        .div-18 {
          background-color: #bdbbe0;
          margin-top: 39px;
          height: 73px;
        }
        @media (max-width: 991px) {
          .div-18 {
            max-width: 100%;
          }
        }
        .div-19 {
          background-color: #bdbbe0;
          margin-top: 39px;
          height: 73px;
        }
        @media (max-width: 991px) {
          .div-19 {
            max-width: 100%;
          }
        }
        .div-20 {
          background-color: #bdbbe0;
          margin-top: 28px;
          height: 73px;
        }
        @media (max-width: 991px) {
          .div-20 {
            max-width: 100%;
          }
        }
        .column-2 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 50%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-2 {
            width: 100%;
          }
        }
        .img {
          aspect-ratio: 1.03;
          object-fit: auto;
          object-position: center;
          width: 100%;
          align-self: stretch;
          margin: auto 0;
        }
        @media (max-width: 991px) {
          .img {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-21 {
          color: var(--Colour-Main-Grey-600, #5d6970);
          font-feature-settings: "clig" off, "liga" off;
          align-self: start;
          margin: 16px 0 0 61px;
          font: 400 22px/145% Roboto, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-21 {
            max-width: 100%;
          }
        }
        .div-22 {
          align-self: center;
          display: flex;
          margin-top: 25px;
          width: 100%;
          max-width: 1283px;
          justify-content: space-between;
          gap: 20px;
          font-weight: 500;
          text-align: center;
        }
        @media (max-width: 991px) {
          .div-22 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-23 {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          font-size: 16px;
          line-height: 162.5%;
        }
        .div-24 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Roboto, sans-serif;
          border-radius: 2px;
          background-color: var(--Colour-Main-Blue-800, #111b47);
          flex-grow: 1;
          justify-content: center;
          color: var(--colour-secondary-white-100-general, #fff);
          white-space: nowrap;
          padding: 11px 14px;
        }
        @media (max-width: 991px) {
          .div-24 {
            white-space: initial;
          }
        }
        .div-25 {
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
          .div-25 {
            padding: 0 20px;
          }
        }
        .div-26 {
          font-feature-settings: "clig" off, "liga" off;
          border-radius: 2px;
          background-color: var(--Colour-Main-Blue-800, #111b47);
          justify-content: center;
          color: var(--colour-secondary-white-100-general, #fff);
          margin: auto 0;
          padding: 9px 41px;
          font: 12px/150% Roboto, sans-serif;
        }
        @media (max-width: 991px) {
          .div-26 {
            padding: 0 20px;
          }
        }
      `}</style>
    </>
  );
}


