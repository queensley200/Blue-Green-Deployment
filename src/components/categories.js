import { Outlet, useNavigate } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import { app } from "../App";
import { TrustedPartners } from "./specialComponents";
import { BsStarFill } from "react-icons/bs";
import { data } from "./data";
import { IoArrowBackSharp, IoArrowForwardSharp } from "react-icons/io5";
import CryptoJS from "crypto-js";
import { MF } from "./specialComponents";
import { ca1 } from "./bitImg";
export const Categories = () => {
  const App = useContext(app);
  const Navigate = useNavigate();

  useEffect(() => {
    App.setCurrentPage("Categories");
  });
  const CatNavigate = (page) => {
    Navigate(page);
    App.instantScrollToTop();
    setTimeout(() => {
      var element = document.querySelector("#ge4").offsetTop - 100;

      if (element != undefined) {
        window.scrollTo({
          top: element,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  return (
    <>
      <div id="care1">
        <div id="care4">
          <div id="care2">
            {" "}
            {App.category === "GraphicDesign" && (
              <button type="button" id="care42">
                Graphic Design
              </button>
            )}
            {App.category !== "GraphicDesign" && (
              <button type="button" id="care3">
                Graphic Design
              </button>
            )}
            {App.category === "uiUxDesign" && (
              <button type="button" id="care42">
                UI/UX Design
              </button>
            )}
            {App.category !== "uiUxDesign" && (
              <button type="button" id="care3">
                UI/UX Design
              </button>
            )}
            {App.category === "WebDevelopment" && (
              <button type="button" id="care42">
                Web Development
              </button>
            )}
            {App.category !== "WebDevelopment" && (
              <button type="button" id="care3">
                Web Development
              </button>
            )}{" "}
            {App.category == "VideoProduction" && (
              <button type="button" id="care42">
                Video Production
              </button>
            )}
            {App.category != "VideoProduction" && (
              <button type="button" id="care3">
                Video Production
              </button>
            )}
          </div>
          <div id="care5">
            <input
              type="text"
              id="care6"
              placeholder="What are you looking for?"
            />
            <button type="button" id="care7">
              <IoMdSearch />
            </button>
          </div>
        </div>
        <div className="flce">
          <div className="row" id="care8">
            <div className="col-lg-7 col-sm-12" id="care9">
              <li id="care11">
                Hire top designers and creative experts to help you scale
              </li>
              <li id="care12">The freelance market place that works!</li>
              <button type="button" id="care13">
                Get Started
              </button>
            </div>
            <div className="col-lg-5 col-sm-12" id="care10">
              <div id="care14">
                {" "}
                <img src={ca1} id="care15" />
              </div>
            </div>{" "}
          </div>
        </div>
        <TrustedPartners />
      </div>
      <Outlet />
    </>
  );
};

export const UIUXDesign = () => {
  const waveData = useContext(data);
  const App = useContext(app);
  const Navigate = useNavigate();
  const [uiUxDesigners, setUiUxDesigners] = useState([]);
  const [uiUxDesignServices, setUiUxDesignServices] = useState([]);
  useEffect(() => {
    App.setCategory("uiUxDesign");
  });
  useEffect(() => {
    const filteredTalents = waveData.talents.filter((value, index) => {
      return value.profession == "UI/UX designer";
    });
    setUiUxDesigners(filteredTalents);

    const filteredGigs = waveData.gigs.filter((value, index) => {
      return value.profession == "UI/UX designer";
    });

    setUiUxDesignServices(filteredGigs);
  }, []);

  const prevTalent = () => {
    const scrollContainer = document.getElementById("care16");
    const margin = 40;
    const scrollElements = document.getElementById("care17");
    scrollContainer.scrollLeft =
      scrollContainer.scrollLeft + scrollElements.offsetWidth + margin;
  };
  const nextTalent = () => {
    const scrollContainer = document.getElementById("care16");
    const margin = 40;
    const scrollElements = document.getElementById("care17");
    scrollContainer.scrollLeft =
      scrollContainer.scrollLeft - scrollElements.offsetWidth - margin;
  };
  return (
    <>
      <div id="ge3">
        {" "}
        <h1 id="ge4">Hire the best UX designers</h1>
        <div id="care16">
          {uiUxDesigners.map((value, index) => (
            <div id="care17" key={index}>
              <div id="care18">
                <img src={value.profileImg} id="care19" />
              </div>
              <div id="care28">
                {" "}
                <div id="care20">
                  <li id="care21">{value.fullName}</li>
                  <li id="care22">
                    <span id="care23">
                      <BsStarFill />
                    </span>
                    <span id="care24">{value.rating}</span>
                  </li>
                </div>{" "}
                <li id="care24">{value.profession}</li>
                <div id="care25">
                  {" "}
                  <p id="care27">{value.shortInfo}</p>
                </div>
              </div>
              <button
                type="button"
                id="care26"
                onClick={() => {
                  Navigate(
                    `/Portfolio/#${CryptoJS.AES.encrypt(
                      JSON.stringify(value.id),
                      App.SK
                    ).toString()}`
                  );
                  App.instantScrollToTop();
                }}
              >
                View Portfolio
              </button>
            </div>
          ))}
        </div>
        <div id="ge7">
          <button type="button" id="ge8" onClick={nextTalent}>
            <IoArrowBackSharp />
          </button>
          <button type="button" id="ge9" onClick={prevTalent}>
            <IoArrowForwardSharp />
          </button>
        </div>
        <h4 id="ge10">UX Design Services For You :</h4>
        <div id="care29">
          {uiUxDesignServices.map((value, index) => (
            <div id="care30" key={index}>
              <div id="care31">
                <img src={value.gigImg} id="care32" />
              </div>
              <div id="care37">
                {" "}
                <div id="care33">
                  <div id="care34">
                    <img src={value.gigworkerProfileImg} id="care35" />
                  </div>
                  <li id="care36">{value.gigWorker}</li>
                </div>
                <li id="care38">{value.description}</li>
                <li id="care39">
                  <span id="care40">Price :</span>
                  <span id="care41">${value.pricePerHour}/hr</span>
                </li>
              </div>
            </div>
          ))}
        </div>
      </div>
      <MF />
    </>
  );
};
