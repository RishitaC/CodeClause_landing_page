import React from "react";
import "./style.css";
import img from "./sectionBG.png";

export default function SectionOne() {
  return (
    <>
      <div className="section-body">
        <img src={img} alt="backgroung" className="sectionBg" />
        <div className="text">
          <p className="textSmall">
            At RideMate, we are committed to revolutionizing the way you travel.
            With a passion for seamless experiences and customer satisfaction,
            our cab service aims to provide you with the utmost convenience and
            comfort on every journey. From short rides around town to
            long-distance trips, RideMate is here to take you wherever you need
            to go.
          </p>
          <h2>Your Ultimate Journey Awaits!</h2>
          <p className="sign-log">
            Have an account?
            <a href="/login">
              <button type="button" className="btn">
                Sign in
              </button>
            </a>
          </p>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Reliable Service</h5>
            <p className="card-text">
              RideMate takes pride in its punctuality and commitment to
              providing reliable transportation. You can count on us to arrive
              on time, every time, ensuring you never miss an important
              appointment or event.
            </p>
          </div>
          <div className="card-body">
            <h5 className="card-title">Convenience</h5>
            <p className="card-text">
              With RideMate's user-friendly mobile app, booking a ride is quick
              and hassle-free. Whether you need a cab right away or want to
              schedule a ride in advance, RideMate has got you covered.
            </p>
          </div>
          <div className="card-body">
            <h5 className="card-title">Safety First</h5>
            <p className="card-text">
              Your safety is our top priority. RideMate carefully selects and
              trains its drivers, ensuring they adhere to all traffic rules and
              regulations. Additionally, all our vehicles undergo regular
              maintenance checks to ensure they are in optimal condition.
            </p>
          </div>
          <div className="card-body">
            <h5 className="card-title">Transparent Pricing</h5>
            <p className="card-text">
              Say goodbye to surprises when it comes to fare calculations.
              RideMate provides transparent pricing, so you know the cost of
              your ride upfront, without any hidden charges.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
