export default function Feedback({feedback}) {
  return(
    <>
      <div className="column">
        <div className="div-14">
          <img loading="lazy" srcSet="..." className="img" />
          <div className="div-15">{feedback.name}</div>
          <div className="div-16">{feedback.designation}</div>
          <div className="div-17">
            {feedback.review}
          </div>
          <div className="div-18">
            <img loading="lazy" src="..." className="img-4" />
            <img loading="lazy" src="..." className="img-4" />
            <img loading="lazy" src="..." className="img-4" />
            <img loading="lazy" src="..." className="img-4" />
            <img loading="lazy" src="..." className="img-4" />
          </div>
        </div>
      </div>
      <style jsx>{`
        .column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          max-width: 250px;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column {
            width: 100%;
          }
        }
        .div-14 {
          background-color: #f0f0f0;
          display: flex;
          flex-grow: 1;
          flex-direction: column;
          align-items: center;
          margin: 0 auto;
          padding: 10px;
        }
        @media (max-width: 991px) {
          .div-14 {
            margin-top: 40px;
            padding-left: 20px;
          }
        }
        .img {
          aspect-ratio: 1.11;
          object-fit: auto;
          object-position: center;
          width: 200px;
          max-width: 100%;
        }
        .div-15 {
          color: #000;
          align-self: center;
          margin-top: 9px;
          white-space: nowrap;
          font: 900 24px Inter, sans-serif;
        }
        @media (max-width: 991px) {
          .div-15 {
            white-space: initial;
          }
        }
        .div-16 {
          color: #000;
          align-self: center;
          margin-top: 5px;
          font: 400 14px Inter, sans-serif;
        }
        .div-17 {
          color: var(--Colour-Main-Blue-400, #6f7cb2);
          text-align: center;
          font-feature-settings: "clig" off, "liga" off;
          margin-top: 16px;
          font: 400 14px/24px Roboto, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-18 {
          display: flex;
          margin-top: 15px;
          width: 100%;
          justify-content: center;
          gap: 10px;
          white-space: nowrap;
        }
        @media (max-width: 991px) {
          .div-18 {
            white-space: initial;
          }
        }
        .img-4 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 40px;
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </>
  );
}