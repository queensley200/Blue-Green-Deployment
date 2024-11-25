import { Outlet, useNavigate } from "react-router-dom";
import { app } from "../App";
import { useContext, useState } from "react";
import { CgMenu, CgClose } from "react-icons/cg";
export const MainNav = () => {
  const App = useContext(app);
  const Navigate = useNavigate();

  const [navMenu, setNavMenu] = useState(false);
  const dropNavigator = (page) => {
    App.instantScrollToTop();
    Navigate(page);
    setNavMenu(false);
  };
  const mainNavigator = (page) => {
    App.instantScrollToTop();
    Navigate(page);
  };
  return (
    <>
      <div className="flce fixed-top">
        {" "}
        <div id="mnre1">
          <img id="mnre2" src={require("../images/workwave.png")} />
          <div id="mnre3">
            {App.currentPage == "Home" && (
              <button
                id="mnre5"
                type="button"
                onClick={() => {
                  App.smoothScrollToTop();
                }}
              >
                Home
              </button>
            )}
            {App.currentPage != "Home" && (
              <button
                id="mnre4"
                type="button"
                onClick={() => {
                  mainNavigator("/");
                }}
              >
                Home
              </button>
            )}
            {App.currentPage == "Categories" && (
              <button
                id="mnre5"
                type="button"
                onClick={() => {
                  App.smoothScrollToTop();
                }}
              >
                Categories
              </button>
            )}
            {App.currentPage != "Categories" && (
              <button
                id="mnre4"
                type="button"
                onClick={() => {
                  mainNavigator("/Categories/UIUXDesign");
                }}
              >
                Categories
              </button>
            )}
            {App.currentPage == "Pricing" && (
              <button
                id="mnre5"
                type="button"
                onClick={() => {
                  App.smoothScrollToTop();
                }}
              >
                Pricing
              </button>
            )}
            {App.currentPage != "Pricing" && (
              <button
                id="mnre4"
                type="button"
                onClick={() => {
                  mainNavigator("/Pricing");
                }}
              >
                Pricing
              </button>
            )}{" "}
            {App.currentPage == "Testimonials" && (
              <button
                id="mnre5"
                type="button"
                onClick={() => {
                  App.smoothScrollToTop();
                }}
              >
                Testimonials
              </button>
            )}
            {App.currentPage != "Testimonials" && (
              <button
                id="mnre4"
                type="button"
                onClick={() => {
                  mainNavigator("/Testimonials");
                }}
              >
                Testimonials
              </button>
            )}
          </div>
          <div id="mnre8">
            <button
              type="button"
              id="mnre6"
              onClick={() => {
                mainNavigator("/SignUp");
              }}
            >
              Log in
            </button>
            <button
              type="button"
              id="mnre7"
              onClick={() => {
                mainNavigator("/SignUp");
              }}
            >
              Register
            </button>
          </div>
          <button
            id="mnre9"
            onClick={() => {
              setNavMenu((prev) => !prev);
            }}
          >
            {!navMenu && <CgMenu />}
            {navMenu && <CgClose />}
          </button>

          {navMenu && (
            <div id="mnre10">
              <li id="mnre12">
                {App.currentPage == "Home" && (
                  <button
                    type="button"
                    id="mnre14"
                    onClick={() => {
                      setNavMenu(false);
                      App.smoothScrollToTop();
                    }}
                  >
                    Home
                  </button>
                )}
                {App.currentPage != "Home" && (
                  <button
                    type="button"
                    id="mnre11"
                    onClick={() => {
                      dropNavigator("/");
                    }}
                  >
                    Home
                  </button>
                )}
              </li>
              <li id="mnre12">
                {App.currentPage == "Categories" && (
                  <button
                    type="button"
                    id="mnre14"
                    onClick={() => {
                      setNavMenu(false);
                      App.smoothScrollToTop();
                    }}
                  >
                    Categories
                  </button>
                )}
                {App.currentPage != "Categories" && (
                  <button
                    type="button"
                    id="mnre11"
                    onClick={() => {
                      dropNavigator("/Categories/UIUXDesign");
                    }}
                  >
                    Categories
                  </button>
                )}
              </li>
              <li id="mnre12">
                {App.currentPage == "Pricing" && (
                  <button
                    type="button"
                    id="mnre14"
                    onClick={() => {
                      setNavMenu(false);
                      App.smoothScrollToTop();
                    }}
                  >
                    Pricing
                  </button>
                )}
                {App.currentPage != "Pricing" && (
                  <button
                    type="button"
                    id="mnre11"
                    onClick={() => {
                      dropNavigator("/Pricing");
                    }}
                  >
                    Pricing
                  </button>
                )}
              </li>
              <li id="mnre12">
                {App.currentPage == "Testimonials" && (
                  <button
                    type="button"
                    id="mnre14"
                    onClick={() => {
                      setNavMenu(false);
                      App.smoothScrollToTop();
                    }}
                  >
                    Testimonials
                  </button>
                )}
                {App.currentPage != "Testimonials" && (
                  <button
                    type="button"
                    id="mnre11"
                    onClick={() => {
                      dropNavigator("/Testimonials");
                    }}
                  >
                    Testimonials
                  </button>
                )}
              </li>
              <li id="mnre13">
                <button
                  type="button"
                  id="mnre6"
                  onClick={() => {
                    mainNavigator("/SignUp");
                  }}
                >
                  Log in
                </button>
              </li>{" "}
              <li id="mnre13">
                <button
                  type="button"
                  id="mnre7"
                  onClick={() => {
                    mainNavigator("/SignUp");
                  }}
                >
                  Register
                </button>
              </li>
            </div>
          )}
        </div>
      </div>
      {navMenu && (
        <div
          id="ge5"
          onClick={() => {
            setNavMenu(false);
          }}
        />
      )}
      <Outlet />
    </>
  );
};
