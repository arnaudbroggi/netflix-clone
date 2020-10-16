import React, { useEffect, useState } from "react";
import "../styles/nav.scss";

const Nav = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
      return () => {
        window.removeEventListener();
      };
    });
  }, []);

  return (
    <div className={`nav ${show && "nav__scroll"}`}>
      <img className="nav__logo" src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png" alt="Netflix Logo" />
    </div>
  );
};

export default Nav;
