import * as React from 'react';
import './SearchInput.css';


export default function SearchInput() {
  return (
    <div className="search-container">
      <input className="search-input" placeholder="Search" />
      <div className="underline"></div>
    </div>
  );
}
