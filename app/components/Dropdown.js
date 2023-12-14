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
          <div className="dropdown-item"><a href="#Video">Video</a></div>
          <div className="dropdown-item"><a href="#Email">Email</a></div>
          <div className="dropdown-item"><a href="#Projects">Projects</a></div>
          <div className="dropdown-item"><a href="#Highlights">Highlights</a></div>
          <div className="dropdown-item"><a href="#Links">Links</a></div>
          <div className="dropdown-item"><a href="#Contact">Contact</a></div>
        </div>
      )}
    </div>
  );
};
