import React from "react";

function Filter ({topic, onTopicChange} ) {
  return (
    <div className="filter">
      <select
        name="filter"
        value={topic}
        onChange={(e) => onTopicChange(e.target.value)}
      >
        <option value="All">Show All</option>
        <option value="Javascript">Javascript</option>
        <option value="React">React</option>
        <option value="Python">Python</option>
        <option value="Ruby">Ruby</option>
      </select>
    </div>
  );
}

export default Filter;
