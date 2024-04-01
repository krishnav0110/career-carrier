export default function Feedback({feedback}) {
  return(
    <>
      <div className="column">
        <div className="div-14">
          <div className="div-15">{feedback.name}</div>
          <div className="div-18">
            <img style={{filter: feedback.rating===1?'brightness(100%)':'brightness(60%)'}} loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b5a347c519a2151c7f11feb347d04954d164b1b7bfd9d02f6952bf2a9aba10e?apiKey=d105f6bd6bb4472bba21449537e0b092&width=100" className="img-4" />
            <img style={{filter: feedback.rating===2?'brightness(100%)':'brightness(60%)'}} loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5c644590b77da092dfa144d5e04ac2f80ac6974394dc7053bb40106ab9f94aa?apiKey=d105f6bd6bb4472bba21449537e0b092&width=100" className="img-4" />
            <img style={{filter: feedback.rating===3?'brightness(100%)':'brightness(60%)'}} loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e95eeb06a0f64bce33864b6ce83bc77c37c637c52dbe14cc203663e5acde8435?apiKey=d105f6bd6bb4472bba21449537e0b092&width=100" className="img-4" />
            <img style={{filter: feedback.rating===4?'brightness(100%)':'brightness(60%)'}} loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c06c92d92a88e9f67f3a22c7ef042a4e2663cb4f71da73c08b492f47a52803b3?apiKey=d105f6bd6bb4472bba21449537e0b092&width=100" className="img-4" />
            <img style={{filter: feedback.rating===5?'brightness(100%)':'brightness(60%)'}} loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/afb33651047b3c725d2dc8d10ac39696df765a9383fcbcaaefa435d6e6df5d7d?apiKey=d105f6bd6bb4472bba21449537e0b092&width=100" className="img-4" />
          </div>
          <div className="div-17">
            {feedback.review}
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