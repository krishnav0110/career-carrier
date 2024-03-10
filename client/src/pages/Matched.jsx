import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import careerPaths from "../data/careerPaths.json";

export default function Matched() {
  const location = useLocation();
  const { career } = location.state;
  const careerInfo = careerPaths[career];

  return (
    <>
      <Navbar />
      <div className="div">
        <div className="div-10">
          <div className="div-11">
            <div className="column">
              <div className="div-12">
                <div className="div-13">How to pursue?</div>
                <div className="div-14 title">{career}</div>
                <div className="div-14">
                  {careerInfo?.desc}
                </div>
                <div className="div-15">Qualifications and certification courses required</div>
                {careerInfo?.path.map((stepInfo) => {
                  return <div className="div-16">{stepInfo}</div>
                })}
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
            <Link to="/assessment2"><div className="div-24">Start Asessment again</div></Link>
            <Link to="/careers"><div className="div-25">Discover </div></Link>
          </div>
          <Link to="/feedback"><div className="div-26">Give Feedback</div></Link>
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
        .div-10 {
          background-color: rgba(216, 212, 244, 1);
          align-self: center;
          margin: 80px auto 0;
          width: 1273px;
          max-width: 100%;
          padding: 10px 30px;
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
          font-size: 30px;
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
          line-height: 110%;
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
          font: 400 16px/24px Roboto, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-14 {
            max-width: 100%;
          }
        }
        .div-14.title {
          font-size: 20px;
          font-weight: 600;
        }
        .div-15 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Roboto, sans-serif;
          line-height: 40px;
          margin-top: 27px;
        }
        @media (max-width: 991px) {
          .div-15 {
            max-width: 100%;
          }
        }
        .div-16 {
          font-size: 20px;
          color: #6f7cb2;
          background-color: #bdbbe0;
          padding: 5px;
          margin-top: 10px;
        }
        @media (max-width: 991px) {
          .div-16 {
            max-width: 100%;
          }
        }
        .column-2 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 40%;
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
          font: 400 20px/130% Roboto, -apple-system, Roboto, Helvetica,
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
          padding: 10px 14px;
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
          padding: 8px 60px;
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
          padding: 10px 41px;
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


