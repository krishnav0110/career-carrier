import * as React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import axios from "axios";
import Navbar from "./../components/Navbar";

export default function Goals() {
  const { user, dispatch, isFetching } = useContext(Context);
  const [qualification, setQualification] = useState("");
  const [stream, setStream] = useState("");
  const [salary, setSalary] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type: "UPDATE_START"});
    const userDetails = {
      qualification,
      stream,
      salary
    };
    try {
      const res = await axios.put("http://localhost:5001/api/users/"+user._id, userDetails);
      dispatch({type: "UPDATE_SUCCESS", payload: res.data});
      window.location.replace("/");
    } catch(err) {
      dispatch({type: "UPDATE_FAILURE"});
    }
  };

  return (
    <>
      <Navbar />
      <form className="div" onSubmit={handleSubmit}>
        <div className="div-10">Tell us about yourself</div>
        <div className="div-13">
          <div className="column">
            <div className="div-15">
              <div className="div-16">
                <img className="img" loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f086a4f0ae6657d4d2ce9eca32df037134590e12bb01560145c5169bf69d3307?apiKey=d105f6bd6bb4472bba21449537e0b092&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f086a4f0ae6657d4d2ce9eca32df037134590e12bb01560145c5169bf69d3307?apiKey=d105f6bd6bb4472bba21449537e0b092&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f086a4f0ae6657d4d2ce9eca32df037134590e12bb01560145c5169bf69d3307?apiKey=d105f6bd6bb4472bba21449537e0b092&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f086a4f0ae6657d4d2ce9eca32df037134590e12bb01560145c5169bf69d3307?apiKey=d105f6bd6bb4472bba21449537e0b092&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f086a4f0ae6657d4d2ce9eca32df037134590e12bb01560145c5169bf69d3307?apiKey=d105f6bd6bb4472bba21449537e0b092&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f086a4f0ae6657d4d2ce9eca32df037134590e12bb01560145c5169bf69d3307?apiKey=d105f6bd6bb4472bba21449537e0b092&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f086a4f0ae6657d4d2ce9eca32df037134590e12bb01560145c5169bf69d3307?apiKey=d105f6bd6bb4472bba21449537e0b092&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f086a4f0ae6657d4d2ce9eca32df037134590e12bb01560145c5169bf69d3307?apiKey=d105f6bd6bb4472bba21449537e0b092&" />
                <div className="div-17">Highest Qualification</div>
              </div>
            </div>
            <div className="div-20" onClick={() => setQualification("10")}>
              <input type="radio" checked={qualification==="10"} />
              <div>10th</div>
            </div>
            <div className="div-20" onClick={() => setQualification("12")}>
              <input type="radio" checked={qualification==="12"} />
              <div>12th</div>
            </div>
            <div className="div-20" onClick={() => setQualification("UG")}>
              <input type="radio" checked={qualification==="UG"} />
              <div>Under-Graduate</div>
            </div>
          </div>



          {qualification !== "10" ? (
            <div className="column">
              <div className="div-15">
                <div className="div-16">
                  <img className="img" loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f086a4f0ae6657d4d2ce9eca32df037134590e12bb01560145c5169bf69d3307?apiKey=d105f6bd6bb4472bba21449537e0b092&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f086a4f0ae6657d4d2ce9eca32df037134590e12bb01560145c5169bf69d3307?apiKey=d105f6bd6bb4472bba21449537e0b092&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f086a4f0ae6657d4d2ce9eca32df037134590e12bb01560145c5169bf69d3307?apiKey=d105f6bd6bb4472bba21449537e0b092&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f086a4f0ae6657d4d2ce9eca32df037134590e12bb01560145c5169bf69d3307?apiKey=d105f6bd6bb4472bba21449537e0b092&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f086a4f0ae6657d4d2ce9eca32df037134590e12bb01560145c5169bf69d3307?apiKey=d105f6bd6bb4472bba21449537e0b092&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f086a4f0ae6657d4d2ce9eca32df037134590e12bb01560145c5169bf69d3307?apiKey=d105f6bd6bb4472bba21449537e0b092&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f086a4f0ae6657d4d2ce9eca32df037134590e12bb01560145c5169bf69d3307?apiKey=d105f6bd6bb4472bba21449537e0b092&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f086a4f0ae6657d4d2ce9eca32df037134590e12bb01560145c5169bf69d3307?apiKey=d105f6bd6bb4472bba21449537e0b092&" />
                  <div className="div-17">12th Stream</div>
                </div>
              </div>
              <div className="div-20" onClick={() => setStream("Science")}>
                <input type="radio" checked={stream==="Science"} />
                <div>Science</div>
              </div>
              <div className="div-20" onClick={() => setStream("Commerce")}>
                <input type="radio" checked={stream==="Commerce"} />
                <div>Commerce</div>
              </div>
              <div className="div-20" onClick={() => setStream("Arts")}>
                <input type="radio" checked={stream==="Arts"} />
                <div>Arts</div>
              </div>
            </div>
          ) : (
            <></>
          )}



          <div className="column">
            <div className="div-15">
              <div className="div-16">
                <div className="div-63">
                  <div className="div-64">Expected Salary</div>
                </div>
                <div className="div-66">😍</div>
              </div>
            </div>
            <div className="div-20" onClick={() => setSalary(50000)}>
              <input type="radio" checked={salary===50000} />
              <div>0 - 1,00,000</div>
            </div>
            <div className="div-20" onClick={() => setSalary(300000)}>
              <input type="radio" checked={salary===300000} />
              <div>1,00,000 - 5,00,000</div>
            </div>
            <div className="div-20" onClick={() => setSalary(1200000)}>
              <input type="radio" checked={salary===1200000} />
              <div>5,00,000 - 20,00,000</div>
            </div>
            <div className="div-20" onClick={() => setSalary(2000000)}>
              <input type="radio" checked={salary===2000000} />
              <div>&gt;= 20,00,000</div>
            </div>
          </div>
        </div>
        <button className="submit-btn" type="submit" disabled={isFetching}>Submit</button>
        <Link className="skip" to="/"><div>Skip these Questions</div></Link>
      </form>
      <style jsx>{`
        .submit-btn {
          color: white;
          background-color: #5e5fb3;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          align-self: center;
        }
        .skip {
          margin-top: 10px;
          padding: 10px;
          align-self: center;
        }
        .skip:hover {
          color: #5e5fb3;
        }
        .div {
          background-color: #fff;
          display: flex;
          flex-direction: column;
          align-items: start;
          padding: 28px 29px 50px;
        }
        @media (max-width: 991px) {
          .div {
            padding: 0 20px;
          }
        }
        .div-10 {
          color: var(--Colour-Main-Blue-900, #091133);
          font-feature-settings: "clig" off, "liga" off;
          margin: 90px 0 0 15px;
          font: 500 36px/133% Roboto, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-10 {
            margin: 40px 0 0 10px;
          }
        }
        .div-13 {
          gap: 20px;
          display: flex;
          justify-content: space-around;
          margin: 30px 0;
          width: 100%;
        }
        @media (max-width: 991px) {
          .div-13 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 30%;
          margin-left: 0px;
          padding-bottom: 20px;
          background-color: #37447e;
          box-shadow: 0px 0px 60px 0px rgba(0, 0, 0, 0.06);
          border-radius: 20px;
        }
        @media (max-width: 991px) {
          .column {
            width: 100%;
            margin: 10px 0;
          }
        }
        .div-15 {
          border-radius: 20px 20px 0px 0px;
          background-color: var(--Iris-60, #a5a6f6);
          align-self: stretch;
          display: flex;
          flex-direction: column;
          justify-content: center;
          color: var(--White, #f4f6fa);
          white-space: nowrap;
          line-height: 150%;
          padding: 20px 40px;
        }
        @media (max-width: 991px) {
          .div-15 {
            white-space: initial;
            padding: 0 20px;
          }
        }
        .div-16 {
          display: flex;
          align-items: center;
          justify-content: space-around;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .div-16 {
            white-space: initial;
          }
        }
        .img {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 60px;
          box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.15);
        }
        .div-17 {
          display: flex;
          font: 700 24px Poppins, sans-serif;
        }
        @media (max-width: 991px) {
          .div-17 {
            white-space: initial;
          }
        }
        .div-20 {
          display: flex;
          margin: 20px 10px 0;
          max-width: 100%;
          gap: 12px;
          padding: 10px;
          background-color: #a5a6f6;
          border: none;
          border-radius: 10px;
          font: 400 24px Poppins, sans-serif;
        }
        .div-20:hover {
          background-color: #5859a9;
          color: white;
        }
        .div-63 {
          display: flex;
          flex-grow: 1;
          flex-basis: 0%;
          flex-direction: column;
          color: var(--White, #f4f6fa);
        }
        .div-64 {
          white-space: nowrap;
          font: 700 24px/150% Poppins, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-64 {
            white-space: initial;
          }
        }
        .div-66 {
          justify-content: center;
          align-items: center;
          border-radius: 20px;
          background-color: var(--Iris-60, #a5a6f6);
          align-self: start;
          aspect-ratio: 1;
          height: 60px;
          color: #37447e;
          white-space: nowrap;
          padding: 0 14px;
          font: 700 32px/150% Poppins, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-66 {
            white-space: initial;
          }
        }
      `}</style>
    </>
  );
}


