import "./Navbar.css";
import Popup from "./Popup/Popup.js";
import { useState } from "react";

const Navbar = ({ data, groupBy, sortOrder, setGroupBy, setSortOrder }) => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className="navbar">
      <button className="display-button" onClick={openPopup}>
        <div className="container">
          <div className="material-symbols-outlined">tune</div>
          <div className="button_text">Display</div>
          <div className="material-symbols-outlined">keyboard_arrow_down</div>
        </div>
      </button>
      {isPopupOpen && (
        <Popup
          onClose={closePopup}
          data={data}
          groupBy={groupBy}
          sortOrder={sortOrder}
          setGroupBy={setGroupBy}
          setSortOrder={setSortOrder}
        />
      )}
    </div>
  );
};

export default Navbar;
