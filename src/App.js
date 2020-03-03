import React, { useReducer, useContext } from "react";
import "./styles.css";
import { Header } from "./components/Header";
//import Pour from "./components/Pour";
import { BevContext } from "./components/BevContext";
import PourButton from "./components/PourButton";
import Confirmation from "./components/Confirmation";
import { BevReducer } from "./components/BevReducer";

const beverages = [
  {
    id: 1,
    name: "Black Coffee"
  },
  {
    id: 2,
    name: "Cappucino"
  },
  {
    id: 3,
    name: "Espresso"
  },
  {
    id: 4,
    name: "Tea"
  },
  {
    id: 5,
    name: "Cocoa"
  },
  {
    id: 6,
    name: "Wiener Melange"
  }
];

export default function App() {
  const [state, dispatch] = useReducer(BevReducer, BevContext);

  return (
    <BevContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <Header />

        {beverages.map(({ id, name }) => (
          <PourButton key={id} beverage={name} />
        ))}

        {/* <Pour /> */}
        <div>
          <Confirmation />
        </div>
      </div>
    </BevContext.Provider>
  );
}
