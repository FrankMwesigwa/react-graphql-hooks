import React, { useState, useEffect } from 'react';
import cities from '../../data/countries.json';
import skillTypes from '../../data/courses.json';

const Basic = () => {
  const [cars, setCars] = useState('');
  const [industries, setIndustries] = useState(['Banking', 'Finance', 'Legal', 'Marketing']);
  const [countries, setCountries] = useState([
    { id: '1', name: 'uganda' },
    { id: '2', name: 'kenya' },
    { id: '3', name: 'rwanda' },
    { id: '3', name: 'tanzania' }
  ]);
  const [skills, setSkills] = useState([]);
  const [industry, setIndustry] = useState('');

  const handleChangeIndustry = e => setIndustry(e.target.value);

  const handleChange = e => setCars(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    console.log('Selected Value', { cars });
    setCars(cars);
  };

  const [checked, setChecked] = useState(false);
  const handleCheckBox = e => setChecked(e.target.checked);

  useEffect(() => {
    setSkills(skillTypes)
  }, []);

  const getUnique = (arr, comp) => {
    const unique = arr
      .map(e => e[comp])
      .map((e, i, final) => final.indexOf(e) === i && i)
      .filter(e => arr[e])
      .map(e => arr[e]);
    return unique;
  };

  const uniqueSkill = getUnique(skills, 'industry');

  return (
    <div className="container">
      <div className="card">
        <form onSubmit={handleSubmit}>
          <select value={cars} onChange={handleChange}>
            <option value="advisory">Advisory</option>
            <option value="business">Business</option>
            <option value="innovation">Innovation</option>
          </select>
          {cars}
          <button type="submit" className="btn- btn-warning" onClick={handleSubmit}>
            submit
          </button>
        </form>
      </div>

      <div>Looping through an array</div>
      <div className="card">
        <select>
          {industries.map(industry => (
            <option key={industry} value={industry}>
              {industry}
            </option>
          ))}
        </select>
      </div>

      <div>Looping through an array with objects</div>
      <div className="card">
        <select>
          {cities.world.map(country => (
            <option key={country.id} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <h2>Check Box Practice</h2>
        <input type="checkbox" checked={checked} onChange={handleCheckBox} color="#FF8C00" />
        <span>Check me</span>
      </div>

      <div>Filtering Data</div>
      <div className="card">
        <select value={industry} onChange={handleChangeIndustry}>
          {uniqueSkill.map(item => (
            <option key={item.id} value={item.industry}>
              {item.industry}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Basic;
