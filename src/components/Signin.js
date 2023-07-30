import React from "react";
import "./style.css";

export default function Signin() {
  return (
    <>
      <section className=" signin vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid"
                alt="Phone "
              />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form>
                {" "}
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="form1Example13"
                    className="form-control form-control-lg"
                    placeholder="Enter your name"
                  />
                  <label className="form-label" htmlFor="form1Example13">
                    Name
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form1Example13"
                    className="form-control form-control-lg"
                    placeholder="Enter your email id"
                  />
                  <label className="form-label" htmlFor="form1Example13">
                    Email Address
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="number"
                    id="form1Example13"
                    className="form-control form-control-lg"
                    placeholder="Enter your Contact number"
                  />
                  <label className="form-label" htmlFor="form1Example13">
                    Contact Number
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="number"
                    id="form1Example23"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="form1Example23">
                    OTP
                  </label>
                </div>
                <button type="submit" className="btn btn-info ">
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
