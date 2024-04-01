import * as React from "react";
import Navbar from "../components/Navbar";

export default function Help() {
  return (
    <>
      <Navbar />
      <div className="div">
        <div className="div-11">Need Help?</div>
        <div className="info">
          <div className="faq">
            <div className="title">Help Center: Career Predictor and Awareness Portal</div>
            <div className="desc">Welcome to the Help Center of Career Predictor and Awareness Portal! We understand that navigating through career decisions can sometimes be overwhelming. That's why we're here to provide you with the assistance you need to make the most out of our platform. Below, you'll find answers to common questions and helpful resources to guide you along your journey.</div>
            <div className="title">Frequently Asked Questions (FAQs)</div>
            <div className="ques">How do I get started with Career Predictor and Awareness Portal?</div>
            <div className="ans">To get started, simply create an account on our platform. Once logged in, you can explore our various features such as career assessment tools, industry insights, expert advice, and educational resources.</div>
            <div className="ques">What kind of career assessment tools do you offer?</div>
            <div className="ans">We offer a range of career assessment tools designed to analyze your strengths, interests, and preferences. These tools provide personalized recommendations for suitable career paths based on your unique attributes.</div>
            <div className="ques">How can I access expert advice?</div>
            <div className="ans">You can access expert advice through our platform by scheduling consultations with our seasoned professionals and career counselors. Simply navigate to the "Expert Advice" section and follow the instructions to book a session.</div>
            <div className="ques">Where can I find educational resources?</div>
            <div className="ans">Our educational resources, including articles, guides, webinars, and courses, can be found in the respective section on our platform. Browse through the available resources to enhance your skills and knowledge in your chosen field.</div>
            <div className="ques">Is there a community forum available?</div>
            <div className="ans">Yes, we have a vibrant community forum where you can connect with other users, share experiences, and seek advice. You can access the community forum by clicking on the "Community" tab on our platform.</div>          
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3daa6f2f8bb1f84bf4921f108ef3a007fbbc78d19b17ae68413ced2139c26267?apiKey=d105f6bd6bb4472bba21449537e0b092&"
            className="img"
          />
        </div>
      </div>
      <style jsx>{`
        .info {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 50px;
          flex-direction: column;
        }
        .title {
          margin: 40px 0 10px;
          font-size: 30px;
          font-weight: 600;
        }
        .desc {
          margin: 0 30px;
          font-size: 18px;
          color: #696969;
        }
        .ques {
          margin: 30px 30px 10px;
          font-size: 20px;
          font-weight: 600;
        }
        .ans {
          margin: 0 0 0 60px;
          font-size: 16px;
          color: #696969;
        }
        .div {
          background-color: #fff;
          display: flex;
          flex-direction: column;
          padding: 23px 0 50px 28px;
        }
        @media (max-width: 991px) {
          .div {
            padding-left: 20px;
          }
        }
        .div-11 {
          color: var(--Colour-Main-Blue-900, #091133);
          font-feature-settings: "clig" off, "liga" off;
          align-self: center;
          margin-top: 54px;
          white-space: nowrap;
          font: 500 48px/100% Roboto, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-11 {
            margin-top: 40px;
            font-size: 40px;
            white-space: initial;
          }
        }
        .img {
          aspect-ratio: 1.52;
          object-fit: auto;
          object-position: center;
          width: 480px;
          align-self: start;
          margin-top: 133px;
          max-width: 100%;
        }
        @media (max-width: 991px) {
          .img {
            margin-top: 40px;
          }
        }
      `}</style>
    </>
  );
}


