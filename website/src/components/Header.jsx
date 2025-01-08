import React from "react";
import ScrollAnimation from "./ScrollAnimation";
function Header() {
  return (
    <>
      <ScrollAnimation>
        <header>
          <h1>
            Hello<span className="dot">.</span>
          </h1>
        </header>
      </ScrollAnimation>
    </>
  );
}

export default Header;
