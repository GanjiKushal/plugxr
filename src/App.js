import { useState } from "react";
import "./App.css";
function App() {
  const [popup, setPop] = useState(false);
  const handleClickOpen = () => {
    setPop(!popup);
  };
  const closePopup = () => {
    setPop(false);
  };
  return (
    <div className="App">
      <nav className="navbar">
        <button className="nav-button" onClick={handleClickOpen}>
          Save
        </button>
      </nav>
      <div>
        {popup ? (
          <div className="main">
            <div className="popup">
              <p onClick={closePopup}>x</p>
              
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
