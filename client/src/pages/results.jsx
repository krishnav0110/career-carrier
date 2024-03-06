import * as React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Career from "../components/resultCareer";

export default function Results(props) {
  const [careers, setCareers] = useState([]);
  const { state } = useLocation();

  useEffect(() => {
    const fetchResults  = async () => {
      const res = await axios.post("http://localhost:5001/api/predict/", {data: state});
      const data = res.data;
      setCareers(data);
    }
    fetchResults();
  }, [state]);

  return (
    <>
      <Navbar />
      <div className="div">
        <div className="div-10">
          <div className="div-11">
            <div className="column">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/78bd4d91bbcef48e7c9f8fc0cb42c3ab35266fa77a4f26374d445c8d0e98ccc2?apiKey=d105f6bd6bb4472bba21449537e0b092&"
                className="img"
              />
            </div>
            <div className="column-2">
              <div className="div-12">
                <div className="div-13">Your Results</div>
                <div className="div-14">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus <br />
                  mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                  quis, sem. Nulla consequat massa quis enim.
                </div>
                <div className="div-15">Your potential career matches..</div>
                <div className="div-16">
                  <div className="div-17">
                    {careers.map((career) => (
                      <Career career={career} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .div {
          background-color: #fff;
          display: flex;
          flex-direction: column;
          padding: 37px 32px;
        }
        @media (max-width: 991px) {
          .div {
            padding: 0 20px;
          }
        }
        .div-10 {
          margin-top: 56px;
        }
        @media (max-width: 991px) {
          .div-10 {
            max-width: 100%;
            margin-top: 40px;
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
        .img {
          aspect-ratio: 1.45;
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
        .div-12 {
          display: flex;
          flex-grow: 1;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .div-12 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-13 {
          color: var(--Colour-Main-Blue-900, #091133);
          font-feature-settings: "clig" off, "liga" off;
          font: 500 36px/133% Roboto, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-13 {
            max-width: 100%;
          }
        }
        .div-14 {
          color: var(--Colour-Main-Blue-400, #6f7cb2);
          font-feature-settings: "clig" off, "liga" off;
          margin-top: 34px;
          font: 400 16px/26px Roboto, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-14 {
            max-width: 100%;
          }
        }
        .div-15 {
          color: #091133;
          font-feature-settings: "clig" off, "liga" off;
          margin-top: 50px;
          font: 500 26px/185% Roboto, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-15 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-16 {
          margin-top: 32px;
        }
        @media (max-width: 991px) {
          .div-16 {
            max-width: 100%;
          }
        }
        .div-17 {
          gap: 20px;
          display: flex;
          flex-wrap: wrap;
        }
        @media (max-width: 991px) {
          .div-17 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
      `}</style>
    </>
  );
}


