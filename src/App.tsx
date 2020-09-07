import * as React from "react";
import "./styles.css";
import Display from "./components/Display";
import Keyobard from "./components/Keyboard";

export default function App() {
  const [display, setDisplay] = React.useState(0);
  const [memo, setMemo] = React.useState(0);
  const [operation, setOperation] = React.useState("");

  const numberHandler = (content: string) => {
    if (String(display).length === 9) return;
    setDisplay(10 * display + Number(content));
  };
  const operationHandler = (content: string) => {
    switch (content) {
      case "C": {
        setDisplay(0);
        setMemo(0);
        setOperation("");
        break;
      }
      case "CE": {
        if (!display) return;
        setDisplay(Math.trunc(display / 10));
        break;
      }
      case "+/-": {
        if (!display) return;
        setDisplay(display * -1);
        break;
      }
      default: {
        const result = operation
          ? Math.trunc(eval(String(memo) + operation + String(display)))
          : display
          ? display
          : memo;
        setMemo(Math.min(999999999, result));
        setOperation(content !== "=" ? content : "");
        setDisplay(0);
        break;
      }
    }
  };
  const keys = [
    { content: "C", handler: operationHandler, color: "orange" },
    { content: "CE", handler: operationHandler, color: "orange" },
    { content: "" },
    { content: "/", handler: operationHandler },
    { content: "7", handler: numberHandler },
    { content: "8", handler: numberHandler },
    { content: "9", handler: numberHandler },
    { content: "*", handler: operationHandler },
    { content: "4", handler: numberHandler },
    { content: "5", handler: numberHandler },
    { content: "6", handler: numberHandler },
    { content: "-", handler: operationHandler },
    { content: "1", handler: numberHandler },
    { content: "2", handler: numberHandler },
    { content: "3", handler: numberHandler },
    { content: "+", handler: operationHandler },
    { content: "+/-", handler: operationHandler },
    { content: "0", handler: numberHandler },
    { content: "" },
    { content: "=", handler: operationHandler, color: "orange" }
  ];

  return (
    <div className="container">
      <div className="calculator">
        <Display memo={memo} operation={operation} display={display} />
        <Keyobard keys={keys} />
      </div>
    </div>
  );
}
