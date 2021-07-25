import React, { useState } from 'react';
import Display from './Display';

export default function Search(props) {
  console.log('Rendering Search!');
  let [brandName, setBrandName] = useState('');
  let [searchResult, setSearchResult] = useState('');
  let [renderedTimes, setRenderedTimes] = useState(0);

  const listBrand = () => {
    return brandsCollection.map((brand, index) => {
      return (
        <span className="brand-name" key={index}>
          {brand}
        </span>
      );
    });
  };
  const searchBrand = () => {
    if (props.brandsCollection.includes(brandName)) {
      setSearchResult(`${brandName}, is ready for you !`);
    } else {
      setSearchResult(`We do not deal with ${brandName}!`);
    }
  };
  return (
    <div>
      <div className="row">
        <input
          type="text"
          onChange={event => {
            setBrandName(event.target.value);
          }}
          value={brandName}
        />
        <button onClick={searchBrand}>Search</button>
      </div>
      <Display userSearch={searchResult} />
    </div>
  );
}
