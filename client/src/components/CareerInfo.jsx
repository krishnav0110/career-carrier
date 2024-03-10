import * as React from "react";

export default function Career({career}) {
  return (
    <>
      <div className="div-14">
        <div className="div-15">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6566866f3bae8c93ae19dc0f3b2070fad5e43a58cb054c550daf88fcbed8f513?apiKey=d105f6bd6bb4472bba21449537e0b092&"
            className="img"
          />
          <div className="div-16">{career?.name}</div>
        </div>
        <div className="div-17">
          {career?.desc}
        </div>
      </div>
      <style jsx>{`
        .div-14 {
          border-radius: 15px;
          background-color: #f0f0f0;
          display: flex;
          width: 20%;
          flex-direction: column;
          margin: 0 auto;
          padding: 10px 20px 20px;
        }
        @media (max-width: 991px) {
          .div-14 {
            width: 80%;
            margin-top: 40px;
          }
        }
        .div-15 {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          font-size: 28px;
          color: #000;
          font-weight: 900;
          white-space: nowrap;
        }
        @media (max-width: 991px) {
          .div-15 {
            white-space: initial;
          }
        }
        .img {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 44px;
        }
        .div-16 {
          font-family: Inter, sans-serif;
          align-self: start;
          margin-top: 12px;
          flex-grow: 1;
          text-wrap: wrap;
        }
        .div-17 {
          color: var(--Colour-Main-Blue-400, #6f7cb2);
          text-align: center;
          font-feature-settings: "clig" off, "liga" off;
          margin-top: 25px;
          font: 400 16px/24px Roboto, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
      `}</style>
    </>
  );
}