import React from 'react';

const Suggestions = ({ results }) => {
  const options = results.map(r => <li key={r.id}>{r.name}</li>);
  return <ul>{options}</ul>;
};

export default Suggestions;
