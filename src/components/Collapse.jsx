import React, { useState } from "react";


function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse collapse-about">
      <button className="collapse-button collapse-about-btn" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <span className={`material-icons arrow ${isOpen ? "rotate-up" : "rotate-down"}`}>
          expand_less
        </span>
      </button>
      <div className={`collapse-content ${isOpen ? "open" : "closed"}`}>
        <div className="collapse-text">{children}</div>
      </div>
    </div>
  );
}

export default Collapse;
