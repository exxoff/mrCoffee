import React, { useContext } from "react";
import { BevContext } from "./BevContext";

export default function Confirmation({ loading }) {
  const { state } = useContext(BevContext);

  return (
    <h3 className={`confirmationText ${state.loading ? "loading" : ""}`}>
      {state.text}
    </h3>
  );
}
