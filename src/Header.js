import { useState } from "react";
import NavMenuLi from "./NavMenuLi";

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="header">
      <div className="logo">
        <a href="/"> <h2>Arda</h2></a>
      </div>
      <div className="topic">
        <h2>Portfolio</h2>
      </div>
      <div className="hamburger-menu" onClick={() => setIsOpen(!isOpen)}>
        <img src={`${(isOpen && "/close-hamburger.svg") || "/hamburger.svg"}`} alt="hamburger menu" />
        {isOpen && <ul className="hamburger-menu-open animation-top-bottom">
          <NavMenuLi num={1}>Projects</NavMenuLi>
          <NavMenuLi num={2}>Skills</NavMenuLi>
          <NavMenuLi num={3}>About</NavMenuLi>
          <NavMenuLi num={4}>Contact</NavMenuLi>
        </ul>}
      </div>
      <div className="nav-container">
        <ul>
          <NavMenuLi num={1}>Projects</NavMenuLi>
          <NavMenuLi num={2}>Skills</NavMenuLi>
          <NavMenuLi num={3}>About</NavMenuLi>
          <NavMenuLi num={4}>Contact</NavMenuLi>
        </ul>
      </div>
    </header>
  );
}

export default Header;
