import React from "react";
import { NavLink } from "react-router-dom";
import { SiOpenai } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";

function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <div className="header">
        <div className="header-logo">
          <SiOpenai
            className="header-logo-image"
            onClick={() => navigate("/")}
          />
          <h1 className="header-logo-title">OpenAI</h1>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink
                style={({ isActive }) =>
                  isActive ? { color: "white" } : { color: "#1c2833" }
                }
                className="link"
                to={`/generate-image`}
              >
                Generate Image
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) =>
                  isActive ? { color: "white" } : { color: "#1c2833" }
                }
                className="link"
                to={`/edit-image`}
              >
                Edit Image
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) =>
                  isActive ? { color: "white" } : { color: "#1c2833" }
                }
                className="link"
                to={`/variation-image`}
              >
                Variation Image
              </NavLink>
            </li>
          </ul>
        </nav>
        <HamburgerMenu />
      </div>
    </header>
  );
}

export default Header;
