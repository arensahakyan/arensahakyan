import React from "react";
import Style from "./Section.module.css";
import photo from "../../img/image 1.png";
const Section = () => {
  return (
    <section>
      <div className={Style.box}>
        <div className={Style.left_box}>
          <p className={Style.headline}>Make bright ideas happen</p>
          <p className={Style.text}>Brief description of the platform</p>
          <button className={Style.btn_1}>Browse Experts</button>
          <button className={Style.btn_2}>Register as Experts</button>
        </div>
        <div className={Style.right_box}>
          <div className={Style.photo_frame}>
            <div className={Style.circ}>
              <p className={Style.text_1}>Al expert</p>
              <div className={Style.circles}>
                <div className={Style.circle_one}>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                  >
                    <circle
                      cx="8.16201"
                      cy="8.78835"
                      r="8.01296"
                      fill="#00F0FF"
                    />
                  </svg>
                </div>
                <div className="circle_two">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                  >
                    <circle
                      cx="8.21383"
                      cy="8.78835"
                      r="8.01296"
                      fill="#7041EA"
                    />
                  </svg>
                </div>
                <div className="circle_three">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                  >
                    <path
                      d="M16.1339 8.78835C16.1339 13.2138 12.5464 16.8013 8.12096 16.8013C3.69553 16.8013 0.108002 13.2138 0.108002 8.78835C0.108002 4.36292 3.69553 0.775391 8.12096 0.775391C12.5464 0.775391 16.1339 4.36292 16.1339 8.78835Z"
                      fill="#FF2DF7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className={Style.photo}>
            <img src={photo} alt="" />
            <p className={Style.text_2}>Jane Doe</p>
            <p>Javascript developer</p>
          </div>
        </div>
      </div>
      <p className={Style.text_4}>How it Works</p>
    </section>
  );
};

export default Section;
