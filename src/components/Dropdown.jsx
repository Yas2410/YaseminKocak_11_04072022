import { useState } from "react";
import dropdownOpen from "../assets/dropdown-open.svg";
import "../styles/dropdown.css";

function Dropdown({ title, content }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  let newContent;
  typeof content === "string"
    ? (newContent = [content])
    : (newContent = content);

  return (
    <div className="dropdown-main">
      <div
        className="dropdown-info"
        //Au clic, mon useState qui était faux passe vrai =
        //de fermé, on passe à ouvert
        onClick={() =>
          isDropdownOpen ? setDropdownOpen(false) : setDropdownOpen(true)
        }
      >
        <span className="dropdown-title">{title}</span>
        <img
          src={dropdownOpen}
          className={isDropdownOpen ? "dropdown dropdown-open" : "dropdown"}
          alt="Menu déroulant"
        />
      </div>
      <div
        className={
          isDropdownOpen ? "content content-open" : "content content-close"
        }
      >
        {newContent.map((item) => (
          <span className="dropdown-txt" key={item}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;
