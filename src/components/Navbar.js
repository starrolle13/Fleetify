import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  // const [navbarOpen, setNavbarOpen] = useState(false);
  // const handleToggle = () => {
  //   setNavbarOpen(!navbarOpen);
  // };
  // const closeMenu = () => {
  //   setNavbarOpen(false);
  // };

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
      <div className="logo">FLEETIFY</div>
      <div className="menu">
        <a href="#home">Home</a>
        <a href="#reviews">Reviews</a>
        <a className="greyText" href="#pricing">
          Pricing
        </a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}
