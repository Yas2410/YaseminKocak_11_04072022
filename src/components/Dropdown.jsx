import { useState } from "react";
import "../styles/dropdown.css";
import dropdownOpen from "../assets/dropdown-open.svg";

function Dropdown({ title, content }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  let newContent;
  typeof content === "string"
    ? (newContent = [content])
    : (newContent = content);
  //console.log(content);
  return (
    <div className="dropdown-main">
      <div
        className="dropdown-info"
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
