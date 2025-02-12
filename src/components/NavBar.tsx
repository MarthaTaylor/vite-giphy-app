import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  background: linear-gradient(135deg, rgb(2, 68, 19), rgb(5, 121, 32));
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s ease, transform 0.2s ease, color 0.3s ease, box-shadow 0.3s ease; // Added color and box-shadow transitions

  &:hover {
    color: #FF9933; // Irish flag orange
    background-color: rgba(255, 255, 255, 0.2); // More pronounced background on hover
    transform: translateY(-3px); // Increased lift on hover
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2); // More pronounced shadow on hover
  }

  &.active {
    background-color: rgba(255, 255, 255, 0.3); // Even more opaque background for active
    color: #FF9933; // Active link is also orange
    font-weight: 600;
    transform: translateY(0); // Remove lift on active
    box-shadow: 0 2px 4px rgba(0,0,0, 0.1);

  }
`;

const NavBar = () => (
  <Nav aria-label="Main navigation" role="navigation">
    <StyledNavLink to="/" aria-label="Trending GIFs">Trending GIFs</StyledNavLink>
    <StyledNavLink to="/saved" aria-label="Saved GIFs">Saved GIFs</StyledNavLink>
  </Nav>
);

export default NavBar;
