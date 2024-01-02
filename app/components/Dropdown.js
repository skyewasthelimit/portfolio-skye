import React, { useState } from 'react';

export const Dropdown = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="pt-3 pr-5 flex w-full items-start justify-end font-serif">
      <div onClick={toggleDropdown} className="navbar-menu">
        <div className="one"></div>
        <div className="two"></div>
        <div className="three"></div>
      </div>
      {isDropdownOpen && (
        <div className="dropdown-content">
          <a href="#Video"><div className="dropdown-item">Video</div></a>
          <a href="#Email"><div className="dropdown-item">Email</div></a>
          <a href="#Projects"><div className="dropdown-item">Projects</div></a>
          <a href="#Highlights"><div className="dropdown-item">Highlights</div></a>
          <a href="#Links"><div className="dropdown-item">Links</div></a>
          <a href="#Contact"><div className="dropdown-item">Contact</div></a>
        </div>
      )}
    </div>
  );
};
