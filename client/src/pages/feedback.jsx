import * as React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import { Context } from "../context/Context";

export default function Feedback() {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(5);
  const [submitted, setSubmitted] = useState(false);

  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const feedback = {
      userId: user._id,
      rating,
      review,
    };
    try {
      await axios.post("http://localhost:5001/api/feedback", feedback);
      setSubmitted(true);
    } catch(err) {}
  };

  return (
    <>
      <Navbar />
      <div className="div">
        <div className="div-2">
          <div className="div-3">
            <div className="div-4">Feedback</div>
            <div className="div-5">
              <form className="div-6" onSubmit={handleSubmit}>
                <div className="div-12">How was your experience?</div>
                <div className="div-13">
                  <img onClick={() => {setRating(1)}} style={{filter: rating===1?'brightness(100%)':'brightness(60%)'}} loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b5a347c519a2151c7f11feb347d04954d164b1b7bfd9d02f6952bf2a9aba10e?apiKey=d105f6bd6bb4472bba21449537e0b092&width=100" className="img-4" />
                  <img onClick={() => {setRating(2)}} style={{filter: rating===2?'brightness(100%)':'brightness(60%)'}} loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5c644590b77da092dfa144d5e04ac2f80ac6974394dc7053bb40106ab9f94aa?apiKey=d105f6bd6bb4472bba21449537e0b092&width=100" className="img-4" />
                  <img onClick={() => {setRating(3)}} style={{filter: rating===3?'brightness(100%)':'brightness(60%)'}} loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e95eeb06a0f64bce33864b6ce83bc77c37c637c52dbe14cc203663e5acde8435?apiKey=d105f6bd6bb4472bba21449537e0b092&width=100" className="img-4" />
                  <img onClick={() => {setRating(4)}} style={{filter: rating===4?'brightness(100%)':'brightness(60%)'}} loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c06c92d92a88e9f67f3a22c7ef042a4e2663cb4f71da73c08b492f47a52803b3?apiKey=d105f6bd6bb4472bba21449537e0b092&width=100" className="img-4" />
                  <img onClick={() => {setRating(5)}} style={{filter: rating===5?'brightness(100%)':'brightness(60%)'}} loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/afb33651047b3c725d2dc8d10ac39696df765a9383fcbcaaefa435d6e6df5d7d?apiKey=d105f6bd6bb4472bba21449537e0b092&width=100" className="img-4" />
                </div>
                <div className="div-14">Choose your experience</div>
                <textarea type="text" 
                  maxLength={100} 
                  className="div-15" 
                  placeholder="Suggest anything we can improve.." 
                  onChange={(e) => setReview(e.target.value)}
                />
                {!submitted ? (
                    <button className="div-16" type="submit">Send Feedback </button>
                  ) : (
                    <div className="div-16">Feedback Submitted</div>
                  )
                }
              </form>
            </div>
          </div>
        </div>
        <Link to="/community"><div className="div-20">Discover our community</div></Link>
      </div>
      <style jsx>{`
        .rate-btn {
          border: none;
          background: none;
        }
        .div {
          background-color: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          white-space: nowrap;
          padding: 24px 46px 65px;
        }
        @media (max-width: 991px) {
          .div {
            white-space: initial;
            padding: 0 20px;
          }
        }
        .div-2 {
          border-radius: 50px;
          background: radial-gradient(
            164.42% 139.2% at 0% 3.17%,
            rgba(0, 150, 255, 0.32) 0%,
            rgba(255, 222, 106, 0.26) 100%
          );
          display: flex;
          flex-direction: column;
          margin-top: 100px;
          width: 800px;
          max-width: 100%;
          justify-content: center;
          align-items: center;
          font-size: 32px;
          color: var(--Grayscale-Dark-Gray, #555);
          font-weight: 400;
          padding: 35px;
        }
        @media (max-width: 991px) {
          .div-2 {
            margin-top: 40px;
            white-space: initial;
            padding: 0 20px;
          }
        }
        .div-3 {
          background-color: #fff;
          border-radius: 10px;
        }
        .div-4 {
          background-color: #111b47;
          display: flex;
          flex-direction: column;
          width: 100%
          font-size: 18px;
          border-radius: 10px 10px 0 0;
          color: #fff;
          font-family: Inter, sans-serif;
          font-weight: 500;
          padding: 10px 60px;
          text-align: center;
        }
        .div-5 {
          padding: 0 20px;
        }
        .div-6 {
          display: flex;
          margin-top: 25px;
          width: 100%;
          flex-direction: column;
          margin: 10px 0;
        }
        .div-12 {
          align-self: start;
          color: #000;
          margin-top: 10px;
          white-space: nowrap;
          font: 300 20px Lato, sans-serif;
        }
        .div-13 {
          justify-content: center;
          align-self: center;
          display: flex;
          gap: 20px;
          margin: 10px 0;
          padding: 5px 4px;
        }
        .img-4 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 40px;
          transition: transform 0.5s;
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        }
        .img-4:hover {
          transform: scale(1.3);
        }
        .div-14 {
          color: var(--Grayscale-Shaded-White, #bbb);
          align-self: start;
          font: italic 600 18px Lato, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-15 {
          border-radius: 15px;
          box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
          border-color: rgba(0, 0, 0, 1);
          border-style: solid;
          border-width: 1px;
          background-color: #fff;
          margin-top: 30px;
          white-space: nowrap;
          padding: 13px 15px;
          height: 100px;
          text-wrap: wrap;
          font: 400 17px Lato, sans-serif;
        }
        .div-16 {
          justify-content: center;
          align-items: center;
          border-radius: 30px;
          box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
          background-color: #111b47;
          margin-top: 15px;
          color: #fff;
          white-space: nowrap;
          padding: 10px 60px;
          font: 400 17px Lato, sans-serif;
          text-align: center;
        }
        div.div-16 {
          background-color: #111b47aa;
          color: #fff;
        }
        .div-20 {
          font-feature-settings: "clig" off, "liga" off;
          border-radius: 2px;
          border-color: rgba(9, 17, 51, 1);
          border-style: solid;
          border-width: 2px;
          margin-top: 30px;
          justify-content: center;
          color: var(--Colour-Main-Blue-900, #091133);
          text-align: center;
          padding: 11px 19px;
          transition: 0.3s;
          font: 500 16px/162.5% Roboto, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-20:hover {
          color: #fff;
          background-color: var(--Colour-Main-Blue-900, #091133);
        }
        @media (max-width: 991px) {
          .div-20 {
            white-space: initial;
            margin-top: 40px;
          }
        }
      `}</style>
    </>
  );
}


