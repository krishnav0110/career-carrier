import * as React from "react";
import Navbar from "../components/Navbar";
import Career from "../components/CareerInfo";
import careerInfo from "../data/careerPaths.json";

export default function Careers() {
  const careerNames = Object.keys(careerInfo);
  // const careers = careerNames.map((careerName) => {
  //   return careerName;
  // });
  // const careers = ["Actor"];
  const careers = careerNames.map((careerName) => {
    return {
      "name": careerName,
      "desc": careerInfo[careerName].desc,
    };
  });

  return (
    <>
      <Navbar />
      <div className="div">
        <div className="div-11">Careers</div>
        <div className="div-12">
          <div className="div-13">
            {careers.map((career) => (
              <Career career={career} />
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .div {
          background-color: #fff;
          display: flex;
          flex-direction: column;
          padding: 23px 28px 50px;
        }
        @media (max-width: 991px) {
          .div {
            padding: 0 20px;
          }
        }
        .div-11 {
          color: var(--Colour-Main-Blue-900, #091133);
          font-feature-settings: "clig" off, "liga" off;
          align-self: center;
          margin-top: 59px;
          font: 500 48px/100% Roboto, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-11 {
            margin-top: 40px;
            font-size: 40px;
          }
        }
        .div-12 {
          margin: 73px 0;
        }
        @media (max-width: 991px) {
          .div-12 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-13 {
          gap: 20px;
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
        }
        @media (max-width: 991px) {
          .div-13 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
      `}</style>
    </>
  );
}