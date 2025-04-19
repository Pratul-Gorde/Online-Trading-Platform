import React from "react";

function Hero() {
  return (
    <section className="container-fluid " id="supportHero">
      <div className=" p-5 " id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-3">
          <div className="col-6 p-3 ">
            <h1 className="fs-3">
              Search for an answer or browse help topics to create a ticket
            </h1>
            <input placeholder="Eg. how do I activate F&O,why my order is getting rejected"/> <br/>
            <a href="">Track account opening</a>
            <a href="">Track segement activation</a>
            <a href="">Intraday margins</a>
            <a href="">Kite user manual</a>
          </div>
          <div className="col-6 p-3">
            <h1>Features</h1>
            <ol>
                <li><a href="">Surveillance measure on scrips - March 2025</a></li>
                <li>
                <a href="">Latest Intraday leverages and Square-off timings</a></li>
            </ol>
          </div>
        </div>
    </section>
  );
}

export default Hero;
