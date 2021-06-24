import React from "react";
import NumberInput from "./NumberInput";
import NumberTyper from "../NumberTyper";
import Number from "../Number";

interface Props { }

export const NumberPicker: React.FunctionComponent<Props> = () => {
  const [index, setIndex] = React.useState<number>(0);

  return (
    <div>
      <div className="standard-margin">
        <NumberInput onChange={setIndex} />
      </div>
      <div className="standard-margin">
        Your input:
        <NumberTyper number={index}>
          {(number) => <Number index={number} ></Number>}
        </NumberTyper>
      </div>
    </div>
  );
};
