import { RiSearchEyeLine } from "react-icons/ri";
import { data } from "./data";
import { useContext, useEffect, useState } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import { IoArrowBackSharp, IoArrowForwardSharp } from "react-icons/io5";
import { app } from "../App";
import { MF } from "./specialComponents";
import "../images/ps1.png";
import { Navigate, useNavigate } from "react-router-dom";
import { hp1, hp3 } from "./bitImg";
const Home = () => {
  const waveData = useContext(data);
  const App = useContext(app);
  const Navigate = useNavigate();
  const [feedbackNavigationNum, setFeedbacknavigationNum] = useState(1);
  useEffect(() => {
    App.setCurrentPage("Home");
  });
  const populerServiceScrollRight = () => {
    const scrollContainer = document.getElementById("hmre16");
    const margin = 20;
    const scrollElements = document.getElementById("hmre17");
      scrollContainer.scrollLeft =
        scrollContainer.scrollLeft + scrollElements.offsetWidth + margin;
  };
  const populerServiceScrollLeft = () => {
    const scrollContainer = document.getElementById("hmre16");
    const margin = 20;
    const scrollElements = document.getElementById("hmre17");
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

  const feedBackScroll = () => {
    const carousel = document.getElementById("hmre34");
    const margin = 40;
    const carouselElements = document.getElementById("hmre28");

    if (
      carousel.scrollLeft > carouselElements.offsetWidth / 2 + margin &&
      carousel.scrollLeft < carouselElements.offsetWidth + margin
    ) {
      setFeedbacknavigationNum(2);
    } else if (
      carousel.scrollLeft >
        carouselElements.offsetWidth +
          margin +
          (carouselElements.offsetWidth / 2 + margin) &&
      carousel.scrollLeft < (carouselElements.offsetWidth + margin) * 2
    ) {
      setFeedbacknavigationNum(3);
    } else if (
      carousel.scrollLeft >
      carouselElements.offsetWidth * 2 + carouselElements.offsetWidth / 2
    ) {
      setFeedbacknavigationNum(4);
    } else {
      if (carousel.scrollLeft < carouselElements.offsetWidth / 2) {
        setFeedbacknavigationNum(1);
      } else if (
        carousel.scrollLeft <
        carouselElements.offsetWidth + margin + carouselElements.offsetWidth / 2
      ) {
        setFeedbacknavigationNum(2);
      } else if (
        carousel.scrollLeft <
        (carouselElements.offsetWidth + margin) * 2 +
          carouselElements.offsetWidth / 2
      ) {
        setFeedbacknavigationNum(3);
      }
    }
  };

  const feedbackNavigation = (num) => {
    const carousel = document.getElementById("hmre34");
    const margin = 20;
    const carouselElements = document.getElementById("hmre28");

    if (num == 1) {
      carousel.scrollLeft = 0;
      setFeedbacknavigationNum(1);
    } else if (num == 2) {
      carousel.scrollLeft = carouselElements.offsetWidth + margin;
      setFeedbacknavigationNum(2);
    } else if (num == 3) {
      carousel.scrollLeft = (carouselElements.offsetWidth + margin) * 2 + 15;
      setFeedbacknavigationNum(3);
    } else if (num == 4) {
      carousel.scrollLeft = (carouselElements.offsetWidth + margin) * 3 + 15;
      setFeedbacknavigationNum(4);
    }
  };

  const inspiringWorksScrollRight = () => {
    const scrollContainer = document.getElementById("hmre38");
    const margin = 20;
    const scrollElements = document.getElementById("hmre39");
    const currentScrollElementPosition =
      scrollContainer.scrollLeft % scrollElements.offsetWidth ;
scrollContainer.scrollLeft =
  scrollContainer.scrollLeft +
  scrollElements.offsetWidth -
  currentScrollElementPosition +
  margin;
  };
  const inspiringWorksScrollLeft = () => {
    const scrollContainer = document.getElementById("hmre38");
    const margin = 20;
    const scrollElements = document.getElementById("hmre39");
    const currentScrollElementPosition =
      scrollContainer.scrollLeft % (scrollElements.offsetWidth + margin);

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
        <div id="hmre1" style={{ backgroundImage: `url(${hp1})` }}>
          <p id="hmre2">
            {" "}
            <span id="hmre46">Connectin</span>g Talents worldwide: your next Gig
            await s
          </p>
        </div>

        <div id="hmre3">
          <div id="hmre4">
            <div id="hmre7">
              <label id="hmre5">
                <RiSearchEyeLine />
              </label>
              <input
                type="text"
                id="hmre6"
                placeholder="try Specialist / Order title, keyword ..."
              />
            </div>{" "}
            <button type="button" id="hmre8">
              Find
            </button>
          </div>
        </div>
        <div className="row" id="hmre11">
          <div className="col-sm-12 col-lg-6" id="hmre9">
            <h6 id="hmre12">Why Choose Workwave TODAY RIGHT NOW?</h6>
            <p id="hmre13">
              At Workwave, we understand the dynamic world of freelancing.
              Whether you're a talented freelancer seeking exciting
              opportunities or a business in search of top-notch professionals,
              our platform has you covered.
            </p>
            <div id="hmre47">
              <button type="button" id="hmre14">
                Get Started
              </button>
            </div>
          </div>

          <div className="col-sm-12 col-lg-6" id="hmre10">
            <img src={hp3} id="hmre15" />
          </div>
        </div>
        <h4 id="ge2">Popular Services</h4>
        <div id="hmre16">
          {waveData.PopularServices.map((value, index) => (
            <div
              id="hmre17"
              key={index}
              style={{ backgroundImage: value.cardImg }}
              onClick={() => {
                if (value.route !== undefined) {
                  Navigate(`${value.route}`);
                  App.instantScrollToTop();
                }
              }}
            >
              <div id="hmre20">
                {" "}
                <li id="hmre19">{value.service}</li>
                <div id="hmre18" />
              </div>
            </div>
          ))}
        </div>
        <div id="ge7">
          <button type="button" id="ge8" onClick={populerServiceScrollLeft}>
            <IoArrowBackSharp />
          </button>
          <button type="button" id="ge9" onClick={populerServiceScrollRight}>
            <IoArrowForwardSharp />
          </button>
        </div>
      </div>
      <div id="hmre24">
        <h4 id="ge2">Hear From Our Clients:</h4>
      </div>
      <div id="hmre25">
        <div id="hmre34" onScroll={feedBackScroll}>
          {" "}
          {waveData.clientsFeedback.map((value, index) => (
            <div className="row" id="hmre28" key={index}>
              <div className="col-sm-12 col-lg-6" id="hmre26">
                <img src={value.ProfileImg} id="hmre29" />
              </div>

              <div className="col-sm-12 col-lg-6" id="hmre27">
                <button id="hmre30">{value.company}</button>
                <p id="hmre31">“{value.Comment}”</p>
                <li id="hmre32">{value.name}</li>
                <li id="hmre33">
                  {value.role},{value.company}
                </li>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div id="hmre36">
        {feedbackNavigationNum == 1 && (
          <button type="button" id="hmre35"></button>
        )}
        {feedbackNavigationNum != 1 && (
          <button
            type="button"
            id="hmre37"
            onClick={() => {
              feedbackNavigation(1);
            }}
          ></button>
        )}

        {feedbackNavigationNum == 2 && (
          <button type="button" id="hmre35"></button>
        )}
        {feedbackNavigationNum != 2 && (
          <button
            type="button"
            id="hmre37"
            onClick={() => {
              feedbackNavigation(2);
            }}
          ></button>
        )}
        {feedbackNavigationNum == 3 && (
          <button type="button" id="hmre35"></button>
        )}
        {feedbackNavigationNum != 3 && (
          <button
            type="button"
            id="hmre37"
            onClick={() => {
              feedbackNavigation(3);
            }}
          ></button>
        )}
        {feedbackNavigationNum == 4 && (
          <button type="button" id="hmre35"></button>
        )}
        {feedbackNavigationNum != 4 && (
          <button
            type="button"
            id="hmre37"
            onClick={() => {
              feedbackNavigation(4);
            }}
          ></button>
        )}
      </div>
      <div id="ge3">
        <h4 id="ge2">Inspiring work made on Workwave:</h4>
        <div id="hmre38">
          {waveData.inspiringWorks.map((value, index) => (
            <div
              id="hmre39"
              key={index}
              style={{ backgroundImage: value.cardImg }}
            >
              <div id="hmre40">
                <div id="hmre41">
                  <img src={value.providersImg} id="hmre42" />
                </div>{" "}
                <div id="hmre43">
                  <li id="hmre44"> {value.service}</li>
                  <li id="hmre45">{value.Provider}</li>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div id="ge7">
          <button type="button" id="ge8" onClick={inspiringWorksScrollLeft}>
            <IoArrowBackSharp />
          </button>
          <button type="button" id="ge9" onClick={inspiringWorksScrollRight}>
            <IoArrowForwardSharp />
          </button>
        </div>
      </div>
      <MF />
    </>
  );
};

export default Home;
