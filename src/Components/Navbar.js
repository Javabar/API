import { Wrapper, NavbarItems } from "../css/Navbar.styled";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Wrapper>
      <Link to="/">
        <NavbarItems>Home</NavbarItems>
      </Link>
      <Link to="/about">
        <NavbarItems>About</NavbarItems>
      </Link>
      <Link to="/contact">
        <NavbarItems>Contact</NavbarItems>
      </Link>
    </Wrapper>
  );
};

export default Navbar;