import { useContext, useEffect, useState } from "react";
import { app } from "../App";
import {
  BsCheckLg,
  BsCheckCircle,
} from "react-icons/bs";

import { TrustedPartners } from "./specialComponents";
import { data } from "./data";
import { MF } from "./specialComponents";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export const Pricing = () => {
  const App = useContext(app);
  const waveData = useContext(data);

  useEffect(() => {
    App.setCurrentPage("Pricing");
  }, []);
  const [QI, setQI] = useState("none");
  return (
    <>
      <div id="ge1">
        <div className="flcce">
          <li id="prre1">Pricing Plans</li>
          <li id="prre2">
            Sign Up for free or choose a paid plan that’s right for you.
          </li>
          <div id="prre3">
            <div id="prre4">
              <div id="prre6" />
              <li id="prre7">Freelancer</li>
              <li id="prre8">Quisque donec nibh diam tellus integer eros.</li>
              <li id="prre9">$35</li>
              <li id="prre10">$25</li>
              <li id="prre11">$25 USD per month, paid annually</li>
              <button type="button" id="prre12">
                Get Started
              </button>
              <div id="prre13">
                <li id="prre14">
                  <span id="prre15">
                    <BsCheckLg />
                  </span>
                  Feature Eleven
                </li>
                <li id="prre14">
                  <span id="prre15">
                    <BsCheckLg />
                  </span>
                  Feature Eleven
                </li>
                <li id="prre14">
                  <span id="prre15">
                    <BsCheckLg />
                  </span>
                  Feature Eleven
                </li>
                <li id="prre14">
                  <span id="prre15">
                    <BsCheckLg />
                  </span>
                  Feature Eleven
                </li>
                <li id="prre14">
                  <span id="prre15">
                    <BsCheckLg />
                  </span>
                  Feature Eleven
                </li>
              </div>
            </div>

            <div id="prre4">
              <div id="prre6">
                {" "}
                <div id="prre5">Most Popular</div>{" "}
              </div>
              <li id="prre7">Professional</li>
              <li id="prre8">Sed eget purus vulputate suscipit erat.</li>
              <li id="prre9">$65</li>
              <li id="prre10">$55</li>
              <li id="prre11">$55 USD per month, paid annually</li>
              <button type="button" id="prre12">
                Get Started
              </button>
              <div id="prre13">
                <li id="prre14">
                  <span id="prre15">
                    <BsCheckLg />
                  </span>
                  Feature Eleven
                </li>
                <li id="prre14">
                  <span id="prre15">
                    <BsCheckLg />
                  </span>
                  Feature Eleven
                </li>
                <li id="prre14">
                  <span id="prre15">
                    <BsCheckLg />
                  </span>
                  Feature Eleven
                </li>
                <li id="prre14">
                  <span id="prre15">
                    <BsCheckLg />
                  </span>
                  Feature Eleven
                </li>
                <li id="prre14">
                  <span id="prre15">
                    <BsCheckLg />
                  </span>
                  Feature Eleven
                </li>
                <li id="prre14">
                  <span id="prre15">
                    <BsCheckLg />
                  </span>
                  Feature Eleven
                </li>
                <li id="prre14">
                  <span id="prre15">
                    <BsCheckLg />
                  </span>
                  Feature Eleven
                </li>
                <li id="prre14">
                  <span id="prre15">
                    <BsCheckLg />
                  </span>
                  Feature Eleven
                </li>
              </div>
            </div>
            <div id="prre4">
              <div id="prre6" />
              <li id="prre7">Agency</li>
              <li id="prre8">Odio aenean purus non cursus blandit..</li>
              <li id="prre9">$125</li>
              <li id="prre10">$95</li>
              <li id="prre11">$95 USD per month, paid annually</li>
              <button type="button" id="prre12">
                Get Started
              </button>
              <div id="prre13">
                <li id="prre14">
                  <span id="prre15">
                    <BsCheckLg />
                  </span>
                  Feature Eleven
                </li>
                <li id="prre14">
                  <span id="prre15">
                    <BsCheckLg />
                  </span>
                  Feature Eleven
                </li>
                <li id="prre14">
                  <span id="prre15">
                    <BsCheckLg />
                  </span>
                  Feature Eleven
                </li>
                <li id="prre14">
                  <span id="prre15">
                    <BsCheckLg />
                  </span>
                  Feature Eleven
                </li>
                <li id="prre14">
                  <span id="prre15">
                    <BsCheckLg />
                  </span>
                  Feature Eleven
                </li>
                <li id="prre14">
                  <span id="prre15">
                    <BsCheckLg />
                  </span>
                  Feature Eleven
                </li>
                <li id="prre14">
                  <span id="prre15">
                    <BsCheckLg />
                  </span>
                  Feature Eleven
                </li>
              </div>
            </div>
          </div>
          <div id="prre16">
            <TrustedPartners />
          </div>
        </div>
        <div className="flcce">
          <li id="prre1">Compare Prices</li>
          <li id="prre2">Find one that’s right you</li>
        </div>
        <div id="prre17">
          <div id="prre18">
            <li id="prre23" />
            <li id="prre22">Encrypts Included</li>
            <li id="prre22">Multiple users per team</li>
            <li id="prre22">Multiple teams</li>
            <li id="prre22">Compliance Onboarding</li>
            <li id="prre22">Solution Engineer Support</li>{" "}
            <li id="prre22">Dedicated Account Manager</li>{" "}
            <li id="prre22">Decrypts Included</li>{" "}
            <li id="prre22">Email Support</li>{" "}
            <li id="prre22">Decrypts Included</li>
          </div>

          <div id="prre19">
            <div id="prre23">
              <li id="prre25">Basic</li>
              <button type="button" id="prre26">
                Get Started
              </button>
            </div>
            <li id="prre27">500/pmc</li>
            <li id="prre27">500/pmc</li>
            <li id="prre27"></li>
            <li id="prre27"></li> <li id="prre27"></li> <li id="prre27"></li>{" "}
            <li id="prre27"></li> <li id="prre27"></li>{" "}
            <li id="prre27">
              {" "}
              <BsCheckCircle />
            </li>{" "}
          </div>
          <div id="prre19">
            {" "}
            <div id="prre23">
              <li id="prre25">Freelancer</li>
              <button type="button" id="prre26">
                Start Trial
              </button>
            </div>
            <li id="prre27">Unlimiited</li>
            <li id="prre27">Unlimiited</li>
            <li id="prre27"></li>
            <li id="prre27"></li> <li id="prre27"></li> <li id="prre27"></li>{" "}
            <li id="prre27"></li> <li id="prre27"></li>{" "}
            <li id="prre27">
              {" "}
              <BsCheckCircle />
            </li>{" "}
          </div>
          <div id="prre19">
            {" "}
            <div id="prre23">
              <li id="prre25">Small Team</li>
              <button type="button" id="prre26">
                Start Trial
              </button>
            </div>
            <li id="prre27">Unlimiited</li>
            <li id="prre27">Unlimiited</li>
            <li id="prre27"></li>
            <li id="prre27"></li> <li id="prre27"></li> <li id="prre27"></li>{" "}
            <li id="prre27"> </li>{" "}
            <li id="prre27">
              <BsCheckCircle />
            </li>{" "}
            <li id="prre27">
              {" "}
              <BsCheckCircle />
            </li>{" "}
          </div>
          <div id="prre20">
            {" "}
            <div id="prre23">
              <li id="prre25">Startups</li>
              <button type="button" id="prre26">
                Start Trial
              </button>
            </div>
            <li id="prre27">Unlimiited</li>
            <li id="prre27">Unlimiited</li>
            <li id="prre27">
              {" "}
              <BsCheckCircle />
            </li>
            <li id="prre27">
              {" "}
              <BsCheckCircle />
            </li>{" "}
            <li id="prre27">
              {" "}
              <BsCheckCircle />
            </li>{" "}
            <li id="prre27">
              {" "}
              <BsCheckCircle />
            </li>{" "}
            <li id="prre27">
              {" "}
              <BsCheckCircle />
            </li>{" "}
            <li id="prre27">
              <BsCheckCircle />
            </li>{" "}
            <li id="prre27">
              {" "}
              <BsCheckCircle />
            </li>{" "}
          </div>
        </div>
        <div id="prre28">
          <li id="prre1">Frequently Asked Questions</li>
        </div>{" "}
        <div id="prre29">
          {waveData.frequentlyAskedQuestions.map((value, index) => (
            <div id="prre31" key={index}>
              <button type="button" id="prre30">
                <span id="prre33">
                  {" "}
                  {value.question}
                  {QI !== index && (
                    <span
                      onClick={() => {
                        if (QI !== index) {
                          setQI(index);
                        } else {
                          setQI("none");
                        }
                      }}
                    >
                      <AiOutlinePlus />
                    </span>
                  )}
                  {QI === index && (
                    <span
                      onClick={() => {
                        if (QI !== index) {
                          setQI(index);
                        } else {
                          setQI("none");
                        }
                      }}
                    >
                      <AiOutlineMinus />
                    </span>
                  )}
                </span>
                {QI == index && (
                  <div id="prre32">
                    <li id="prre33">{value.answer}</li>
                  </div>
                )}
              </button>
            </div>
          ))}{" "}
        </div>
      </div>
      <MF />
    </>
  );
};
