import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Feedback from "../components/communityFeedback";

export default function Community() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    try {
      const fetchFeedbacks = async () => {
        const res = await axios.get("http://localhost:5001/api/feedback/");
        const data = res.data;
        setFeedbacks(data);
      };
      fetchFeedbacks();
    } catch(err) {}
  }, []);

  return (
    <>
      <Navbar />
      <div className="div">
        <div className="div-11">Our Community</div>
        <div className="div-12">
          <div className="div-13">
            {feedbacks.map((feedback) => (
              <Feedback feedback={feedback} />
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .div {
          background-color: #fff;
          display: flex;
          flex-direction: column;
          padding: 24px 46px 80px;
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
          margin-top: 100px;
          white-space: nowrap;
          font: 500 36px/133% Roboto, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-11 {
            white-space: initial;
          }
        }
        .div-12 {
          margin-top: 20px;
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
          flex-wrap: wrap;
          justify-content: space-around;
          align-items: start;
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


