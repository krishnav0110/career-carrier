import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

export default function Assessment2() {
  const [quesno, setQuesno] = useState(1);
  const [ques, setQues] = useState("");

  useEffect(() => {
    const fetchQues  = async () => {
      const res = await axios.get("http://localhost:5001/api/question/" + quesno);
      setQues(res.data);
    }
    fetchQues();
  }, [quesno]);

  const nextQuestion = () => setQuesno(quesno + 1);

  return (
    <>
      <Navbar />
      <div className="div">
        <div className="div-2">
          <div className="div-11">
            <div className="div-12">
              <div className="column">
                <div className="div-13">
                  <div className="div-14">Assesment</div>
                  <div className="div-15">
                    <div className="div-16">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6b2da68832ab11719659a7465aae46471c83f198b96cccbe767d4347746f356d?apiKey=d105f6bd6bb4472bba21449537e0b092&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b2da68832ab11719659a7465aae46471c83f198b96cccbe767d4347746f356d?apiKey=d105f6bd6bb4472bba21449537e0b092&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b2da68832ab11719659a7465aae46471c83f198b96cccbe767d4347746f356d?apiKey=d105f6bd6bb4472bba21449537e0b092&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b2da68832ab11719659a7465aae46471c83f198b96cccbe767d4347746f356d?apiKey=d105f6bd6bb4472bba21449537e0b092&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b2da68832ab11719659a7465aae46471c83f198b96cccbe767d4347746f356d?apiKey=d105f6bd6bb4472bba21449537e0b092&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b2da68832ab11719659a7465aae46471c83f198b96cccbe767d4347746f356d?apiKey=d105f6bd6bb4472bba21449537e0b092&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b2da68832ab11719659a7465aae46471c83f198b96cccbe767d4347746f356d?apiKey=d105f6bd6bb4472bba21449537e0b092&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b2da68832ab11719659a7465aae46471c83f198b96cccbe767d4347746f356d?apiKey=d105f6bd6bb4472bba21449537e0b092&"
                        className="img"
                      />
                      <div className="div-17" onClick={nextQuestion}>Next</div>
                    </div>
                    <div className="div-18">Question {quesno}</div>
                    <div>{ques}</div>
                    
                    <div className="div-19"><input type="radio" name="ques" value="1"/>Strongly Agree</div>
                    <div className="div-19"><input type="radio" name="ques" value="2"/>Agree</div>
                    <div className="div-19"><input type="radio" name="ques" value="3"/>Neutral</div>
                    <div className="div-19"><input type="radio" name="ques" value="4"/>Disagree</div>
                    <div className="div-19"><input type="radio" name="ques" value="5"/>Strongly Disagree</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c177a27d40e14219da4d24a14fc6d2037290728dc8aa8e3e8c45d3799a4e38a9?apiKey=d105f6bd6bb4472bba21449537e0b092&"
                      className="img-2"
                    />
                    <div className="div-22">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac2ae116ebea0d47585bfc4c9e8a7a36015dbeb78571af39fb5796767bd77e22?apiKey=d105f6bd6bb4472bba21449537e0b092&"
                        className="img-3"
                      />
                      <div className="div-23">29 Mb / Sec</div>
                    </div>
                    <div className="div-24" onClick={nextQuestion}>skip question</div>
                  </div>
                </div>
              </div>
              <div className="column-2">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b989cf3b54e0035ce5787086f3df8f0f3a2a7759357a4c268e8905c366845ad?apiKey=d105f6bd6bb4472bba21449537e0b092&"
                  className="img-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .div {
          justify-content: center;
          display: flex;
          flex-direction: column;
        }
        .div-2 {
          background-color: #fff;
          display: flex;
          width: 100%;
          flex-direction: column;
          padding: 9px 24px 50px;
        }
        @media (max-width: 991px) {
          .div-2 {
            max-width: 100%;
            padding: 0 20px;
          }
        }
        .div-11 {
          align-self: center;
          width: 100%;
          max-width: 1316px;
          margin: 214px 0 155px;
        }
        @media (max-width: 991px) {
          .div-11 {
            max-width: 100%;
            margin: 40px 0;
          }
        }
        .div-12 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-12 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 37%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column {
            width: 100%;
          }
        }
        .div-13 {
          display: flex;
          margin-top: 26px;
          flex-grow: 1;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .div-13 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-14 {
          color: var(--Colour-Main-Blue-900, #091133);
          font-feature-settings: "clig" off, "liga" off;
          font: 500 36px/133% Roboto, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-14 {
            max-width: 100%;
          }
        }
        .div-15 {
          justify-content: space-between;
          border-radius: 28.389px;
          background-color: #fff;
          display: flex;
          margin-top: 32px;
          flex-direction: column;
          font-size: 17px;
          font-weight: 400;
          padding: 43px;
        }
        @media (max-width: 991px) {
          .div-15 {
            max-width: 100%;
            padding: 0 20px;
          }
        }
        .div-16 {
          justify-content: space-between;
          display: flex;
          gap: 20px;
          color: #fff;
          white-space: nowrap;
        }
        @media (max-width: 991px) {
          .div-16 {
            white-space: initial;
          }
        }
        .img {
          aspect-ratio: 1.39;
          object-fit: auto;
          object-position: center;
          width: 47px;
        }
        .div-17 {
          font-family: Helvetica, sans-serif;
          border-radius: 28.389px;
          background-color: #199855;
          align-self: start;
          justify-content: center;
          padding: 6px 22px;
        }
        @media (max-width: 991px) {
          .div-17 {
            white-space: initial;
            padding: 0 20px;
          }
        }
        .div-18 {
          color: #000;
          margin-top: 21px;
          font: 500 28px Roboto, sans-serif;
        }
        .div-19 {
          background-color: #d9d9d9;
          margin-top: 22px;
          height: 30px;
        }
        .div-20 {
          background-color: #d9d9d9;
          margin-top: 22px;
          height: 30px;
        }
        .div-21 {
          background-color: #d9d9d9;
          margin-top: 21px;
          height: 30px;
        }
        .img-2 {
          aspect-ratio: 100;
          object-fit: auto;
          object-position: center;
          width: 100%;
          stroke-width: 1.419px;
          stroke: #e8e8e8;
          margin-top: 21px;
        }
        .div-22 {
          justify-content: space-between;
          display: flex;
          margin-top: 21px;
          gap: 14px;
          color: #3c3c3c;
        }
        .img-3 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 68px;
        }
        .div-23 {
          font-family: Helvetica, sans-serif;
          flex-grow: 1;
          flex-basis: auto;
          margin: auto 0;
        }
        .div-24 {
          color: #6f7cb2;
          text-align: center;
          font-feature-settings: "clig" off, "liga" off;
          margin-top: 21px;
          font: 500 16px/300% Roboto, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .column-2 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 63%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-2 {
            width: 100%;
          }
        }
        .img-4 {
          aspect-ratio: 1.43;
          object-fit: auto;
          object-position: center;
          width: 100%;
        }
        @media (max-width: 991px) {
          .img-4 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
      `}</style>
    </>
  );
}


