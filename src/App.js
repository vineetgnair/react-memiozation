import React, { useState } from 'react';
import './style.css';
import Display from './Display';
import Search from './Search';

export default function App() {
  console.log('Rendering App!');
  const brandsCollection = ['bmw', 'audi', 'mercedes', 'suzuki', 'mustang'];
  const listBrand = () => {
    return brandsCollection.map((brand, index) => {
      return (
        <span className="brand-name" key={index}>
          {brand}
        </span>
      );
    });
  };
  return (
    <div>
      <h1>Hello React!</h1>
      <h4>Memoization with React</h4>
      <p>
        The <b>Display component</b> only gets rendered, when the search button
        is clikced. But the parent component <b>Search component</b> gets
        rendered on every type of{' '}
      </p>
      {listBrand()}
      <Search brandsCollection={brandsCollection} />
    </div>
  );
}
