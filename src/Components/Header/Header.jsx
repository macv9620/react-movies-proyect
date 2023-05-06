import "./header.css";
import logoIcon from "../../assets/drama.png";

function Header() {
  return (
    <header className="main-header">
      <div className="header-info">
        <p className="header-info-welcome">Your-Show</p>
      </div>
      <div className="header-logo">
        <img src={logoIcon} className="logo" />
      </div>
      <div className="header-search-bar">
        <input
          placeholder="Type to Search"
          className="header-search-bar-input"
          type="text"
        />
        <button className="header-search-bar-button">
          <span className="material-symbols-outlined">search</span>
        </button>
      </div>
    </header>
  );
}

export { Header };
