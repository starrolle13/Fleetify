import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);

  return (
    <div className={scrolled ? 'navBarScroll' : 'navBarBG'}>
      <div className="logo"></div>
      <div className="menu">
        <a href="#home">Home</a>
        <a href="#reviews">Reviews</a>
        <a href="#pricing">Pricing</a>
        <a href="#features">Features</a>
        <a href="#contact">Contact Us</a>
      </div>
    </div>
  );
}
