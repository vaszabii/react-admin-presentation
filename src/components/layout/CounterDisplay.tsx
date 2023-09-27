import React from "react";
import { useStore } from "react-admin";

const CounterDisplay = () => {
  const [countedNumber, setCountedNumber] = useStore("countedNumber", 0);

  return <>Counter: {countedNumber} </>;
};

export default CounterDisplay;
