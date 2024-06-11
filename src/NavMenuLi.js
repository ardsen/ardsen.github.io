function NavMenuLi({ children, num }) {
  return <li> <a href={`#section-${num}`}> {children} </a></li>;
}

export default NavMenuLi;
