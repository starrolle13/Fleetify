import React from 'react';

export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerLinks">
        <div className="footerPhone">
          <span className="fPhone">phoneicon</span>(213)999-9999
        </div>
        <div className="footerEmail">
          <span className="fEmail">phoneicon</span>123me@gmail.com
        </div>
        <div className="footerAddress">
          <span className="fAddress">phoneicon</span>123 Anywhere St
        </div>
      </div>
      <div className="social">
        <div className="facebook">facebook</div>
        <div className="twitter">twitter</div>
        <div className="instagram">instagram</div>
        <div className="pinterest">pinterest</div>
      </div>
      <div className="copyright">
        Copyright &#169;<span className="bold"> Fleetify.</span> All Rights
        Reserved
      </div>
    </div>
  );
}
