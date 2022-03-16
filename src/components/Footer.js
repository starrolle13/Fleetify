import React from 'react';

export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerLinks">
        <div className="footerPhone">
          <span className="fPhone"></span>(213)999-9999
        </div>
        <div className="footerEmail">
          <span className="fEmail"></span>123me@gmail.com
        </div>
        <div className="footerAddress">
          <span className="fAddress"></span>123 Anywhere St
        </div>
      </div>
      <div className="social">
        <div className="facebook"></div>
        <div className="twitter"></div>
        <div className="instagram"></div>
        <div className="pinterest"></div>
      </div>
      <div className="copyright">
        Copyright &#169;<span className="bold"> Fleetify.</span> All Rights
        Reserved
      </div>
    </div>
  );
}
