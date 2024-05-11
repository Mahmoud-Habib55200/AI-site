import React from "react";
import "./footer.css";
import logo from "../../assets/logo.svg";

const FooterData1 = () => (
  <>
    <li className="parent">Links</li>
    <li>Overons</li>
    <li>Social Media</li>
    <li>Counters</li>
    <li>Contact</li>
  </>
);
const FooterData2 = () => (
  <>
    <li className="parent">Company</li>
    <li>Terms & Conditions</li>
    <li>Privacy Policy </li>
    <li>Contact</li>
  </>
);
const FooterData3 = () => (
  <>
    <li className="parent">Get in touch</li>
    <li>Crechterwoord K12 182 DK Alknjkcb</li>
    <li>085-132567</li>
    <li>info@payme.net</li>
  </>
);


const Footer = () => {
  return (
    <div className="gpt3__footer section__padding" id="footer">
      <div className="gpt3__footer__heading">
        <h1 className="gradient__Text">
          Do you want to step in to the future before others
        </h1>
        <button>Request Early Access</button>
      </div>

      <div className="gpt3__footer__content">
        <div className="gpt3__footer__content__image">
          <img src={logo} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="gpt3__footer__content__links">
          <ul>
            <FooterData1 />
          </ul>
        </div>
        <div className="gpt3__footer__content__links">
          <ul>
            <FooterData2 />
          </ul>
        </div>
        <div className="gpt3__footer__content__links">
          <ul>
            <FooterData3 />
          </ul>
        </div>
      </div>

      <h2>© 2021 GPT-3. All rights reserved.</h2>
    </div>
  );
};

export default Footer;
