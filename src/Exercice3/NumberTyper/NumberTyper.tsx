import React from "react";
import { useEffect } from "react";
import { useState } from "react";

interface Props {
  number: number;
  children: (number: number | string) => React.ReactElement;
}

export const NumberTyper: React.FunctionComponent<Props> = ({ number, children }) => {
  const [display, setDisplay] = useState(false)

  useEffect



  return <div>
    <button onClick={() => setDisplay(!isString)}></button>
    {children(thing)}
  </div>;
};
