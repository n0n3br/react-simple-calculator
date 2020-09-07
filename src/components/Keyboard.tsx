import React from "react";
import Key, { iKey } from "./Key";
interface iKeyboard {
  keys: iKey[];
}

const Keyboard = (props: iKeyboard) => {
  const { keys } = props;
  return (
    <div className="keyboard">
      {keys.map((key, i) => (
        <Key key={i} {...key} />
      ))}
    </div>
  );
};

export default Keyboard;
