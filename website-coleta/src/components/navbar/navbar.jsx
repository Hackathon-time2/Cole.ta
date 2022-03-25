import { useRouter } from "next/router";
import { Login, Nav, NavItem, NavItemWrapper } from "./navbar.style";

function Navbar() {

  return (
    <>
      <Nav>
        <NavItemWrapper>
          <NavItem>Projeto</NavItem>
          <NavItem>Impacto</NavItem>
          <NavItem>Como participar</NavItem>
          <NavItem>Parceiros</NavItem>
        </NavItemWrapper>
        <Login>LOGIN</Login>
      </Nav>
    </>
  );
}

export default Navbar;
