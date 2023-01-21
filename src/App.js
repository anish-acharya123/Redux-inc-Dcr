import React, { useEffect, useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  incNumber,
  decNumber,
  changeBgBlack,
  changeBgWhite,
} from "./actions/index";

//to get the data from Ls
const getLocalItems = () => {
  let color = localStorage.getItem("color");

  if (color) {
    return JSON.parse(localStorage.getItem("color")); //conveting data in array form
  } else {
    return [];
  }
};

const App = () => {
  const [flag, setFlag] = useState(false);

  document.body.style.backgroundColor = getLocalItems();
  const myState = useSelector((state) => {
    return state.changeTheNumber;
  });
  const myColor = useSelector((state) => {
    return state.changeBackground;
  });

  //add data to local storage
  useEffect(() => {
    localStorage.setItem("color", JSON.stringify(myColor));
  }, [myColor]);

  useEffect(() => {
    if (flag === true) {
      dispatch(changeBgWhite());
    } else dispatch(changeBgBlack());
  });

  const dispatch = useDispatch();

  return (
    <>
      <div className="container">
        <h1>Increment/Decrement counter</h1>
        <h4>Using React and Redux</h4>

        <div className="quantity">
          <a
            className="quantity__minus"
            title="Decrement"
            onClick={() => dispatch(decNumber())}
          >
            <span>-</span>
          </a>
          <input
            type="text"
            name="quantity"
            value={myState}
            className="quantity__input"
          />
          <a
            className="quantity__plus"
            title="Increment"
            onClick={() => dispatch(incNumber())}
          >
            <span>+</span>
          </a>
        </div>
        <div className="changeColor">
          <button
            onClick={() => {
              setFlag(false);
            }}
          >
            Black
          </button>
          <button
            onClick={() => {
              setFlag(true);
            }}
          >
            White
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
