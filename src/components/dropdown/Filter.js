import React, { useState, useEffect } from 'react';
import skillTypes from '../../data/courses.json';
import CheckBox from './checkBox';

const Filter = () => {
  const [skills, setSkills] = useState([]);
  const [industry, setIndustry] = useState('');
  const [checked, setChecked] = useState(false);
  const handleClick = () => setChecked(!checked);

  const handleChangeIndustry = e => setIndustry(e.target.value);

  useEffect(() => {
    setSkills(skillTypes);
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

  const filterDropdown = skills.filter(result => {
    return result.industry === industry;
  });

  const handleCheckChieldElement = event => {
    filterDropdown.forEach(skill => {
      if (skill.value === event.target.value) skill.isChecked = event.target.checked;
    });
    setSkills(skills);
    console.log('These are the selected skills', skills);
  };

  handleChange = e => {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
  };

  return (
    <div>
      <div>Filtering Data</div>
      <div className="card">
        <select value={industry} onChange={handleChangeIndustry}>
          <option>Select an industry Type and skills</option>
          {uniqueSkill.map(item => (
            <option key={item.id} value={item.industry}>
              {item.industry}
            </option>
          ))}
        </select>
      </div>
      <div>
        <div>Select aleast 3 skills related to the industry</div>
        {filterDropdown.map(skill => (
          <div key={skill.id} style={{ margin: '10px' }}>
            {/* {skill.skill} */}
            <CheckBox
              handleCheckChieldElement={handleCheckChieldElement}
              value={skill.skill}
              isChecked={skill.checked}
            />
          </div>
        ))}
      </div>
      <div>
        <h4>Multiple checkBox</h4>
        {checkboxes.map(item => (
          <label key={item.key}>
            {item.name}
            <CheckBox
              name={item.name}
              checked={checkedItems.get(item.name)}
              onChange={handleChange}
            />
          </label>
        ))}
      </div>
    </div>
  );
};

export default Filter;
