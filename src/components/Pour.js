import React, { useState } from "react";

import Confirmation from "./Confirmation";

export default function Pour() {
  const [text, setText] = useState("");
  const [beverage, setBeverage] = useState("Black Coffee");
  const [loading, setLoading] = useState("");
  const doPour = e => {
    e.preventDefault();
    setText(`Pouring ${beverage}`);
    setLoading("loading");
    setTimeout(() => {
      setTimeout(() => {
        setText("");
      }, 1500);
      setText(`${beverage} poured`);
      setLoading("");
    }, 4000);
  };

  const handleChange = e => {
    setBeverage(e.target.value);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <form onSubmit={doPour}>
        <select
          value={beverage}
          onChange={handleChange}
          className="beverageSelect"
        >
          <option value="Black coffee">Black Coffee</option>
          <option value="Cappucino">Cappucino</option>
          <option value="Espresso">Espresso</option>
          <option value="Tea">Tea</option>
        </select>
        <p>
          <button className="pourButton" onClick={doPour}>
            Pour Beverage
          </button>
        </p>
      </form>
      <div style={{ display: "inline-block", textAlign: "left" }}>
        <Confirmation loading={loading} text={text} />
      </div>
    </div>
  );
}
