import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
function Nav({ navOpen, setNavOpen }) {
  function setTrue() {
    if (navOpen === true) {
      setNavOpen(false);
      //   console.log(navOpen);
    } else {
      setNavOpen(true);
      //   console.log(navOpen);
    }
  }
  return (
    <nav>
      <h1>Waves</h1>
      <button onClick={setTrue}>
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
}

export default Nav;
