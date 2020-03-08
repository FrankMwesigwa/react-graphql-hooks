import React, { useState } from 'react';
import Suggestions from './suggestions';

const Person = () => {
  const [people, setPeople] = useState([
    { first: 'sarah', last: 'mwesigwa', age: '20' },
    { first: 'sarah', last: 'mukama', age: '20' },
    { first: 'frank', last: 'mwesigwa', age: '30' },
    { first: 'deus', last: 'abigaba', age: '40' },
    { first: 'josephine', last: 'diana', age: '20' },
    { first: 'kamukam', last: 'caleb', age: '20' }
  ]);

  const [searchText, setSearchText] = useState('');

  const searchHandler = e => {
    setSearchText(e.target.value);
  };

  function Searching(text) {
    return function(x) {
      return x.first.toLowerCase().includes(text.toLowerCase()) || !text;
    };
  }

  return (
    <div className="container">
      <div>
        <form>
          <input type="text" value={searchText} onChange={searchHandler} />
          {/* <Suggestions results={people} /> */}
        </form>
      </div>
      <div>
        {people.filter(Searching(searchText)).map(person => (
          <div>
            First Name: <h2>{person.first}</h2>
            Last Name:<h3>{person.last}</h3>
            Age:<h4>{person.age}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Person;
