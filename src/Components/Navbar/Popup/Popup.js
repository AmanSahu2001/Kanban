import "./Popup.css";

const Popup = ({ onClose, groupBy, sortOrder, setGroupBy, setSortOrder }) => {
  const handleGroupByChange = (value) => {
    setGroupBy(value);
  };

  const handleSortOrderChange = (value) => {
    setSortOrder(value);
  };

  return (
    <div className="popup" onClick={onClose}>
      <span className="close-btn" onClick={onClose}>
        &times;
      </span>
      <div className="modal_container">
        <div className="label-container">
          <label htmlFor="groupBy">Grouping</label>
          <select
            id="groupBy"
            value={groupBy}
            onChange={(e) => handleGroupByChange(e.target.value)}
          >
            <option value="status">Status</option>
            <option value="user">User</option>
            <option value="priority">Priority</option>
          </select>
        </div>
        <div className="label-container">
          <label htmlFor="sortBy">Sorting</label>
          <select
            id="sortBy"
            value={sortOrder}
            onChange={(e) => handleSortOrderChange(e.target.value)}
          >
            <option value="title">Title</option>
            <option value="priority">Priority</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Popup;
