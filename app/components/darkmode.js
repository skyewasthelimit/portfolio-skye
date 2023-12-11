'use client';
import React, { useEffect } from 'react';

export const Darkmode = () => {
  useEffect(() => {
    const html = document.querySelector('html');
    const check = document.querySelector('#checkbox');

    const handleChange = () => {
      html.classList.toggle('dark');
    };

    check.addEventListener('change', handleChange);

    return () => {
      check.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <div>
      <div className="dark-mode" id="dark-mode">
        <input type="checkbox" className="checkbox" id="checkbox"></input>
        <label htmlFor='checkbox' className="label" id="label">
          <div className="ball" id="ball"></div>
        </label>
      </div>
    </div>
  );
};
