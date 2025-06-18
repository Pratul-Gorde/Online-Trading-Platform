import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 mt-5 ">
          <img
            src="media/images/smallcaseLogo.png"
            style={{ height: "40px", width: "50%" }}
          />
          <p className="text-small text-muted mb-5 mt-3">
            Thematic investing platform
          </p>
          <img
            src="media/images/zerodhaFundhouse.png"
            style={{ height: "40px", width: "50%" }}
          />
          <p className="text-small text-muted mb-5 mt-3">Asset management</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/streakLogo.png"
            style={{ height: "40px", width: "50%" }}
          />
          <p className="text-small text-muted mb-5 mt-3">
            Algo & strategy paltform
          </p>
          <img
            src="media/images/goldenpiLogo.png"
            style={{ height: "40px", width: "50%" }}
          />
          <p className="text-small text-muted mb-5 mt-3">
            Bonds trading platform
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/sensibullLogo.svg"
            style={{ height: "40px", width: "50%" }}
          />
          <p className="text-small text-muted mb-5 mt-3">
            Options trading platform
          </p>
          <img
            src="media/images/dittoLogo.png"
            style={{ height: "40px", width: "50%" }}
          />
          <p className="text-small text-muted mb-5 mt-3">Insurance</p>
        </div>
        <button className="p-3 btn btn-primary fs-5 mb-5" style={{width:"20%",margin:"0 auto"}}>Signup Now</button>
      </div>
    </div>
  );
}

export default Universe;
