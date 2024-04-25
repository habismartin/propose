import "./App.css";
import React, { useState } from "react";
import Cat from "./img/picmix.cat.gif";

function Raindrop({ top, left }) {
  return (
    <div className="raindrop" style={{ top: `${top}px`, left: `${left}px` }} />
  );
}

function App() {
  const [raindrops, setRaindrops] = useState([]);
  const [noButtonPosition, setNoButtonPosition] = useState({
    top: Math.random() * window.innerHeight,
    left: Math.random() * window.innerWidth,
  });

  const [yesButtonSize, setYesButtonSize] = useState(12);

  const handleNoButtonClick = () => {
    setNoButtonPosition({
      top: Math.random() * window.innerHeight,
      left: Math.random() * window.innerWidth,
    });

    setYesButtonSize(yesButtonSize + 5);
  };

  const [showYes, setShowYes] = useState(false);

  const generateRaindrops = () => {
    const newRaindrops = [];
    for (let i = 0; i < 100; i++) {
      newRaindrops.push({
        id: i,
        top: Math.random() * window.innerHeight,
        left: Math.random() * window.innerWidth,
      });
    }
    setRaindrops(newRaindrops);
  };

  const handleShowYes = () => {
    setShowYes(true);
    generateRaindrops();

  };

  return (
    <div className="App">
      <div className="question-box">
        <img src={Cat} />
        <h1>Hannah bbg, Will you be my gf?😔</h1>

        <div className="buttons">
          <button
            onClick={handleShowYes}
            className="yes"
            style={{ fontSize: `${yesButtonSize}px` }}
          >
            YES
          </button>
          <button
            className="no"
            onClick={handleNoButtonClick}
            style={{
              top: `${noButtonPosition.top}px`,
              left: `${noButtonPosition.left}px`,
            }}
          >
            NO
          </button>
        </div>
      </div>

      {showYes && (
        <div className="yes-ans">
          <div className="inside">
            <h1>Good choice<span>(in a deep scary voice).</span></h1>
            <p>
              You made that choice all on your own Hannah, now you have the
              protection of batman.
            </p>

            <h6>Jk! Thank you! love you!😘❤️💓💕</h6>
          </div>
        </div>
      )}
      {raindrops.map((raindrop) => (
          <Raindrop key={raindrop.id} top={raindrop.top} left={raindrop.left} />
      ))}
    </div>
  );
}

export default App;
