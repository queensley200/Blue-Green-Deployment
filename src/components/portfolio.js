import { SiGooglemaps } from "react-icons/si";
import { BsStarFill } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import { RiShareBoxLine } from "react-icons/ri";
import { IoArrowBackSharp, IoArrowForwardSharp } from "react-icons/io5";
import { MF } from "./specialComponents";
import { useLocation } from "react-router-dom";
import CryptoJS from "crypto-js";
import { app } from "../App";
import { data } from "./data";
export const Portfolio = () => {
  const waveData = useContext(data);
  const App = useContext(app);
  const location = useLocation();
  const [gigWorker, setGigWorker] = useState({});
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    const encryptedSID = location.hash.substring(1);
    const decryptedSID = CryptoJS.AES.decrypt(encryptedSID, App.SK).toString(
      CryptoJS.enc.Utf8
    );
    console.log(decryptedSID);
    const filteredGigWorkers = waveData.talents.filter((value, index) => {
      return value.id == decryptedSID;
    });
    setGigWorker(filteredGigWorkers[0]);
    if (
      filteredGigWorkers[0].portfolio !== undefined &&
      filteredGigWorkers[0].portfolio.length !== 0
    )
      setPortfolioItems(filteredGigWorkers[0].portfolio);
    const filteredTestimonials = waveData.clientTestimonials.filter(
      (value, index) => {
        return filteredGigWorkers[0].testimonials.includes(value.id);
      }
    );
    setTestimonials(filteredTestimonials);
  }, []);

  const clientTestimonialScrollRight = () => {
    const scrollContainer = document.getElementById("pfre21");
    const margin = 20;
    const scrollElements = document.getElementById("pfre22");
    const currentScrollElementPosition =
      scrollContainer.scrollLeft % (scrollElements.offsetWidth + margin);
    if (currentScrollElementPosition == 0) {
      scrollContainer.scrollLeft =
        scrollContainer.scrollLeft + scrollElements.offsetWidth + margin;
    } else {
      scrollContainer.scrollLeft =
        scrollContainer.scrollLeft +
        scrollElements.offsetWidth -
        currentScrollElementPosition +
        margin;
    }
  };
  const clientTestimonialScrollLeft = () => {
    const scrollContainer = document.getElementById("pfre21");
    const margin = 20;
    const scrollElements = document.getElementById("pfre22");
    const currentScrollElementPosition =
      scrollContainer.scrollLeft % (scrollElements.offsetWidth + margin);
    console.log(currentScrollElementPosition);
    if (currentScrollElementPosition == 0) {
      scrollContainer.scrollLeft =
        scrollContainer.scrollLeft - scrollElements.offsetWidth + margin;
    } else {
      scrollContainer.scrollLeft =
        scrollContainer.scrollLeft - currentScrollElementPosition - margin;
    }
  };

  return (
    <>
      <div id="ge1">
        <div id="Pfre1" className="row">
          <div className="col-sm-12 col-lg-5" id="pfre2">
            <div id="pfre4">
              <img src={gigWorker.profileImg} id="pfre5" />
            </div>
          </div>
          <div className="col-sm-12 col-lg-7" id="pfre3">
            <div id="pfre29">
            <h3 id="pfre6">{gigWorker.fullName}</h3>
            <li id="pfre7">{gigWorker.profession}</li>
            <li id="pfre7">
              <span id="pfre8">
                <SiGooglemaps />
              </span>
              Location:{gigWorker.location}
            </li>
            <li id="pfre11">
              <span id="pfre9">Ratings</span>
              <span id="pfre12">
                <span id="pfre10">
                  <BsStarFill />
                </span>
                <span>{gigWorker.rating}</span>
              </span>
            </li>
            <p id="pfre13">{gigWorker.about}</p></div>
          </div>
        </div>

        {portfolioItems.length !== 0 && (
          <>
            {" "}
            <h1 id="ge2">Portfolio</h1>{" "}
            <div id="pfre14">
              {portfolioItems.map((gwpv, index) => (
                <div
                  id="pfre15"
                  key={index}
                  style={{ backgroundImage: gwpv.img }}
                >
                  <div id="pfre16">
                    <li id="pfre17">
                      {gwpv.title}
                      <span id="pfre28">
                        {" "}
                        <RiShareBoxLine />
                      </span>
                    </li>
                  </div>
                </div>
              ))}
              {portfolioItems.map((gwpv, index) => (
                <div
                  id="pfre18"
                  key={index}
                  style={{ backgroundImage: gwpv.img }}
                >
                  <div id="pfre19">
                    <li id="pfre20">
                      {gwpv.title}
                      <span id="pfre28">
                        {" "}
                        <RiShareBoxLine />
                      </span>
                    </li>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
        <h1 id="ge2">Client Testimonials</h1>
        <div id="pfre21">
          {testimonials.map((value, index) => (
            <div id="pfre22" key={index}>
              <div id="pfre23">
                <img src={value.img} id="pfre24" />
              </div>
              <li id="pfre25">{value.name}</li>
              <li id="pfre26">
                {value.role}, {value.company}
              </li>
              <p id="pfre27">{value.Testimonial}</p>
            </div>
          ))}
        </div>
        <div id="ge7">
          <button type="button" id="ge8" onClick={clientTestimonialScrollLeft}>
            <IoArrowBackSharp />
          </button>
          <button type="button" id="ge9" onClick={clientTestimonialScrollRight}>
            <IoArrowForwardSharp />
          </button>
        </div>
      </div>
      <MF />
    </>
  );
};
