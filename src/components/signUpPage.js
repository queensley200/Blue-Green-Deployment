import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineMail } from "react-icons/ai";
import { GrFacebookOption, GrApple } from "react-icons/gr";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { app } from "../App";
import { sp1 } from "./bitImg";
export const SignUpPage = () => {
  const Navigate = useNavigate();
  const App = useContext(app);

  const [AccountType, setAccountType] = useState("Freelancer");

  return (
    <>
      <div id="sure30">
        <div id="sure29">
          <button
            type="button"
            id="sure28"
            onClick={() => {
              App.instantScrollToTop();
              Navigate("/");
            }}
          >
            <BsArrowLeft />
          </button>
        </div>
      </div>
      <div id="sure1">
        <div id="sure2" className="row">
          <div id="sure3" className="col-sm-12 col-lg-5">
            <Sure3 setAccountType={setAccountType} AccountType={AccountType} />
          </div>

          <div id="sure4" className="col-sm-12 col-lg-7">
            <Sure4 setAccountType={setAccountType} AccountType={AccountType} />
          </div>
        </div>
      </div>
      {/************************* small screen ***********************************/}

      <div id="sure1b">
        <div id="sure2" className="row">
          <div id="sure4" className="col-sm-12 col-lg-7">
            <Sure4 setAccountType={setAccountType} AccountType={AccountType} />
          </div>{" "}
          <div id="sure3" className="col-sm-12 col-lg-5">
            <Sure3 setAccountType={setAccountType} AccountType={AccountType} />
          </div>
        </div>
      </div>
    </>
  );
};

const Sure3 = ({ AccountType, setAccountType }) => {
  return (
    <>
      <div id="sure27">
        {" "}
        <div id="sure20">
          <div id="sure13">
            <img src={require("../images/sp2.png")} id="sure14" />
            <li id="sure15">Create Account</li>
          </div>
          <div id="sure16">
            <li id="sure17">
              Already have an account? <span id="sure18">Sign In</span>
            </li>
            <button type="button" id="sure19">
              <span id="sure21">
                <FcGoogle />
              </span>
              <span id="sure22">Continue with Google</span>
            </button>
            <button type="button" id="sure19">
              <span id="sure21">
                <AiOutlineMail />
              </span>
              <span id="sure22">Continue with email</span>
            </button>
            <li id="sure23">OR</li>
            <div id="sure24">
              <button type="button" id="sure25">
                <span id="sure21" className="apCo">
                  <GrApple />
                </span>
                <span id="sure22">Apple</span>
              </button>
              <button type="button" id="sure25">
                <span id="sure21" className="fbCo">
                  <GrFacebookOption />
                </span>
                <span id="sure22">Facebook</span>
              </button>
            </div>
            <li id="sure26">
              By joining Workwave, you agree to our Terms of Service and Pivacy
              Policy
            </li>
          </div>
        </div>
      </div>
    </>
  );
};
const Sure4 = ({ AccountType, setAccountType }) => {
  return (
    <>
      <div id="sure5">
        {" "}
        <img src={sp1} id="sure6" />
      </div>
      <div id="sure7">
        <div id="sure8">
          <div id="sure9">
            {AccountType === "Freelancer" && (
              <button type="button" id="sure11">
                Freelancer
              </button>
            )}
            {AccountType !== "Freelancer" && (
              <button
                type="button"
                id="sure12"
                onClick={() => {
                  setAccountType("Freelancer");
                }}
              >
                Freelancer
              </button>
            )}
            {AccountType === "Recruiter" && (
              <button type="button" id="sure11">
                Recruiter
              </button>
            )}
            {AccountType !== "Recruiter" && (
              <button
                type="button"
                id="sure12"
                onClick={() => {
                  setAccountType("Recruiter");
                }}
              >
                Recruiter
              </button>
            )}
          </div>
        </div>
        <img src={require("../images/sp2.png")} id="sure10" />
      </div>
    </>
  );
};
