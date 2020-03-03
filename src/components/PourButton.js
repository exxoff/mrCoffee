import React, { useState, useContext } from "react";
import { BevContext } from "./BevContext";

export default function PourButton({ beverage }) {
  const { dispatch } = useContext(BevContext);

  const doPour = e => {
    e.preventDefault();
    dispatch({
      type: "pour",
      payload: {
        text: `Pouring ${beverage}`,
        loading: true
      }
    });

    setTimeout(() => {
      setTimeout(() => {
        dispatch({
          type: "done",
          payload: {
            text: "",
            loading: false
          }
        });
      }, 1500);
      dispatch({
        type: "pour",
        payload: {
          text: `${beverage} poured`,
          loading: false
        }
      });
    }, 4000);
  };

  return (
    <button onClick={doPour} className="pourButton">
      {beverage}
    </button>
  );
}
