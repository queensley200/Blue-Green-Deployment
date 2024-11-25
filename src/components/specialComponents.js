import { FaLinkedin, FaTwitter, FaFacebookF, FaApple } from "react-icons/fa6";
import { BsAndroid2 } from "react-icons/bs";
import { FaRegCopyright } from "react-icons/fa";

export const TrustedPartners = () => {
  return (
    <>
      <div className="flce">
        <div id="tpre1">
          <li id="tpre2">
            Our Talents are trusted by 100+ Companies around the World
          </li>
          <div id="tpre5">
            <img
              src={require("../images/Microsoft(logo — Black).png")}
              id="tpre4"
            />
            <img
              src={require("../images/PayPal (logo — Black).png")}
              id="tpre4"
            />{" "}
            <img
              src={require("../images/amazon(logo — Black).png")}
              id="tpre4"
            />{" "}
            <img
              src={require("../images/Google (logo — Black).png")}
              id="tpre4"
            />
            <img
              src={require("../images/Discord (logo — Black).png")}
              id="tpre4"
            />
          </div>
          <div id="tpre3">
            <img
              src={require("../images/Microsoft(logo — Black).png")}
              id="tpre4"
            />
            <img
              src={require("../images/PayPal (logo — Black).png")}
              id="tpre4"
            />{" "}
            <img
              src={require("../images/amazon(logo — Black).png")}
              id="tpre4"
            />{" "}
            <img
              src={require("../images/Google (logo — Black).png")}
              id="tpre4"
            />
            <img
              src={require("../images/Discord (logo — Black).png")}
              id="tpre4"
            />
            <img
              src={require("../images/Microsoft(logo — Black).png")}
              id="tpre4"
            />
            <img
              src={require("../images/PayPal (logo — Black).png")}
              id="tpre4"
            />{" "}
            <img
              src={require("../images/amazon(logo — Black).png")}
              id="tpre4"
            />{" "}
            <img
              src={require("../images/Google (logo — Black).png")}
              id="tpre4"
            />
            <img
              src={require("../images/Discord (logo — Black).png")}
              id="tpre4"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export const MailSubscription = () => {
  return (
    <>
      <div id="msre1">
        <div id="msre2">
          <h4 id="msre3">Ready to unlock your potential?</h4>
          <div id="msre4">
            <input
              type="email"
              id="msre5"
              placeholder="Enter your email here"
            />
            <button type="button" id="msre6">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export const Footer = () => {
  return (
    <>
      <div id="ftre1">
        <div id="ftre2" className="row">
          <div className="col-lg-4 " id="ftre3">
            <div id="ftre4">
              <li id="ftre5">Categories</li>
              <li id="ftre6">Graphic Design</li>
              <li id="ftre6">Web and Mobile Development</li>
              <li id="ftre6">Photograpy</li>
              <li id="ftre6">3D Illustration</li>
              <li id="ftre6">Virtual Assistance</li>
              <li id="ftre6">Engineering</li>
              <li id="ftre6">Data Science</li>
              <li id="ftre6">Music and Video Production</li>
              <li id="ftre6">Programming and Tech</li>
            </div>
          </div>
          <div className=" col-lg-3 " id="ftre3">
            <div id="ftre4">
              <li id="ftre5">About</li>
              <li id="ftre6"> Our Company</li>
              <li id="ftre6">Careers</li>
              <li id="ftre6"> Privacy Policy</li>
              <li id="ftre6"> Terms of Service</li>
              <li id="ftre6"> Contact Us</li>
              <li id="ftre6"> Investor Relations</li>
              <li id="ftre6">Intellectual Property claim</li>
            </div>
          </div>{" "}
          <div className="col-lg-3" id="ftre3">
            {" "}
            <div id="ftre4">
              <li id="ftre5">Resources</li>
              <li id="ftre6"> Client’s Testimonials</li>
              <li id="ftre6">Help and Support</li>
              <li id="ftre6">Reviews </li>
              <li id="ftre6">Blog</li>
            </div>
          </div>{" "}
          <div className="col-lg-2 " id="ftre3">
            {" "}
            <div id="ftre4">
              <li id="ftre5">Community</li>
              <li id="ftre6">Become a Seller</li>
              <li id="ftre6"> Community Hub</li>
              <li id="ftre6">Forums</li>
              <li id="ftre6">Events</li>
              <li id="ftre6">Refer a Friend</li>
            </div>
          </div>
        </div>
        <div id="ftre7">
          <li id="ftre8"></li>
          <li id="ftre9"></li>
        </div>

        <div id="ftre10">
          <div id="ftre11">
            <li id="ftre13">Follow Us :</li>
            <button id="ftre14">
              {" "}
              <FaFacebookF />
            </button>
            <button id="ftre14">
              {" "}
              <FaTwitter />
            </button>{" "}
            <button id="ftre14">
              {" "}
              <FaLinkedin />
            </button>
          </div>
          <div id="ftre11">
            <li id="ftre13">Mobile App :</li>
            <button id="ftre14">
              {" "}
              <FaApple />
            </button>
            <button id="ftre14">
              {" "}
              <BsAndroid2 />
            </button>{" "}
          </div>
        </div>
        <blockquote id="ftre15">
          <span>
            <FaRegCopyright />
          </span>{" "}
          Workwave International Limited 2023
        </blockquote>
      </div>
    </>
  );
};

export const MF = () => {
  return (
    <>
      <MailSubscription />
      <Footer />
    </>
  );
};
