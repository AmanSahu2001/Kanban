import React, { useState } from "react";
import "./Popup.css"; // Create a CSS file for styling

const Popup = ({
  onClose,
  data,
  groupBy,
  sortOrder,
  setGroupBy,
  setSortOrder,
}) => {
  const handleGroupByChange = (value) => {
    setGroupBy(value);
  };

  const handleSortOrderChange = (value) => {
    setSortOrder(value);
  };

  return (
    <div className="popup">
      <span className="close-btn" onClick={onClose}>
        &times;
      </span>
      <label htmlFor="groupBy">Group by</label>
      <select
        id="groupBy"
        value={groupBy}
        onChange={(e) => handleGroupByChange(e.target.value)}
      >
        <option value="status">Status</option>
        <option value="user">User</option>
        <option value="priority">Priority</option>
      </select>

      <label htmlFor="sortBy">Sort by</label>
      <select
        id="sortBy"
        value={sortOrder}
        onChange={(e) => handleSortOrderChange(e.target.value)}
      >
        <option value="title">Title</option>
        <option value="priority">Priority</option>
      </select>
    </div>
  );
};

export default Popup;
