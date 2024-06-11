import NavMenuLi from "./NavMenuLi";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <a href="/"> <h2>Arda</h2></a>
      </div>
      <div className="topic">
        <h2>Portfolio</h2>
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
