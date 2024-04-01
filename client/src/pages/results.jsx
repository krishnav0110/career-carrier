import * as React from "react";
import { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Career from "../components/resultCareer";
import careerPaths from "../data/careerPaths.json";
import { Context } from "../context/Context";

export default function Results(props) {
  const { user } = useContext(Context);
  const [careers, setCareers] = useState([]);
  const { state } = useLocation();
  const [filter, setFilter] = useState("");
  const [filterClicked, setFilterClicked] = useState(false);

  useEffect(() => {
    const fetchResults  = async () => {
      const res = await axios.post("http://localhost:5001/api/predict/", {data: state});
      const data = res.data;
      data.map((career) => {
        career['salary'] = careerPaths[career.name].salary;
        career['desc'] = careerPaths[career.name].desc;
        return career;
      });
      setCareers(data);
      setFilter("");
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
                  Congratulations on completing your career aptitude test! Your results reveal valuable insights into your strengths, preferences, and potential career paths. Armed with this knowledge, you're better equipped to make informed decisions about your future.
                </div>
                <div className="div-15">Your potential career matches..</div>
                <div className="choose-filter" onMouseLeave={() => setFilterClicked(false)}>
                  <div className="filter-title" onMouseDown={() => setFilterClicked(true)}>Choose Sort</div>
                  <div className="filter-list" style={{maxHeight: filterClicked ? "150px" : "0"}}>
                    <div className="filter-list-item" onClick={() => {setFilterClicked(false); setFilter("Recommended")}}>Recommended- Highest to Lowest</div>
                    <div className="filter-list-item" onClick={() => {setFilterClicked(false); setFilter("Salary")}}>Salary- Highest to Lowest</div>
                    <div className="filter-list-item" onClick={() => {setFilterClicked(false); setFilter("Qualification")}}>Qualification</div>
                  </div>
                </div>
                <div className="div-16">
                  <div className="div-17">
                    {filter === "Recommended" ? (
                      careers.sort((a, b) => {return b.rate - a.rate}).map((career) => (
                        <Career career={career} />
                      ))
                    ) : (filter === "Salary" ? (
                      careers.sort((a, b) => {return b.salary - a.salary}).map((career) => (
                        <Career career={career} />
                      ))
                    ) : (filter === "Qualification" ? (
                      careers.filter(career => {
                        if(user.qualification === "12" || user.qualification === "UG") {
                          const requiredStream = careerPaths[career.name].path[1].split(" ")[3];
                          if(requiredStream === "any") {
                            return true;
                          } else if(user.stream === requiredStream) {
                            return true;
                          } else {
                            return false;
                          }
                        } else {
                          return true;
                        }
                      }).map(career => (
                        <Career career={career} />
                      ))
                    ) : (
                      careers.map((career) => (
                        <Career career={career} />
                      ))
                    )))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .choose-filter {
          margin: 10px 30px 0;
          position: relative;
          cursor: pointer;
        }
        .filter-title {
          padding: 5px 20px;
          border: 1px solid black;
        }
        .filter-list {
          position: absolute;
          background-color: white;
          border-radius: 0 0 5px 5px;
          padding: 0 5px;
          transition: max-height 1s;
          overflow: hidden;
          box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px;
        }
        .filter-list-item {
          padding: 8px 10px;
          border-top: 2px solid #cccccc;
        }
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


