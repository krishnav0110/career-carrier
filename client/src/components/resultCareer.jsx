import * as React from "react";
import { Link } from "react-router-dom";

export default function Career({career}) {
  return(
  <>
      <div className="div-18">
        <Link to="/matched" state={{career: career}}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e62db9d26be5f1f8cd9438420838130244d6f5a4a2c8d94e969d74d9866748e?apiKey=d105f6bd6bb4472bba21449537e0b092&"
            className="img-2"
          />
          <div className="div-19">{career}</div>
        </Link>
        <div className="div-20">
          Lorem ipsum dolor sit amet, consectetuer adipiscing
          elit. Aenean commodo ligula eget dolor.{" "}
        </div>
      </div>
    <style jsx>{`
      .div-18 {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        line-height: normal;
        width: 40%;
        margin-left: 0px;
      }
      @media (max-width: 991px) {
        .div-18 {
          margin-top: 25px;
          width: 100%;
        }
      }
      .img-2 {
        aspect-ratio: 1;
        object-fit: auto;
        object-position: center;
        width: 36px;
      }
      .div-19 {
        color: var(--Colour-Main-Blue-900, #091133);
        font-feature-settings: "clig" off, "liga" off;
        margin-top: 20px;
        white-space: nowrap;
        font: 500 16px/162.5% Roboto, -apple-system, Roboto, Helvetica,
          sans-serif;
      }
      @media (max-width: 991px) {
        .div-19 {
          white-space: initial;
        }
      }
      .div-20 {
        color: var(--Colour-Main-Grey-600, #5d6970);
        font-feature-settings: "clig" off, "liga" off;
        margin-top: 18px;
        font: 400 12px/18px Roboto, -apple-system, Roboto, Helvetica,
          sans-serif;
      }
    `}</style>  
  </>);
}