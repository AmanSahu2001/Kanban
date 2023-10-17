import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <button className="display-button">
        <div className="container">
          <div className="material-symbols-outlined">tune</div>
          <div className="button_text">Display</div>
          <div className="material-symbols-outlined">keyboard_arrow_down</div>
        </div>
      </button>
    </div>
  );
};

export default Navbar;
