import { useContext, useEffect } from "react";
import { TrustedPartners } from "./specialComponents";
import { app } from "../App";
import { data } from "./data";
import { MF } from "./specialComponents";
import { te1 } from "./bitImg";
export const Testimonials = () => {
  const App = useContext(app);
  const waveData = useContext(data);
  useEffect(() => {
    App.setCurrentPage("Testimonials");
  },[]);
  return (
    <>
      <div id="ge1">
        <div id="tere11">
          {" "}
          <div className="row" id="tere1">
            <div className="col-sm-12 col-lg-6" id="tere2">
              <div id="tere9">
                {" "}
                <div id="tere4">Customers Success Stories</div>
                <li id="tere5">
                  Top brands turns their dreams to achievements with{" "}
                  <span id="tere10">Workwave</span>
                </li>
                <div id="tere6">Read stories here</div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-6" id="tere3">
              <div id="tere7">
                <img src={te1} id="tere8" />
              </div>
            </div>
          </div>{" "}
        </div>
        <TrustedPartners />
        <h4 id="ge4">Testimonials</h4>{" "}
        <div id="tpre6" className="row">
          {waveData.Testimonials.map((value, index) => (
            <div id="tpre7" className="col-lg-4" key={index}>
              <div id="tpre8">
                <img src={value.attestantImg} id="tpre9" />
              </div>
              <div id="tpre10">
                <li id="tpre11">{value.attestant}</li>
                <li id="tpre12">
                  {value.role}, {value.company}
                </li>
                <li id="tpre13">{value.testimony}</li>
                <button id="tpre14">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <MF />
    </>
  );
};
