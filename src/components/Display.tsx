import React from "react";
interface iDisplay {
  memo: number;
  display: number;
  operation: string;
}
const Display = (props: iDisplay) => {
  const { memo, display, operation } = props;
  return (
    <div className="display">
      <div
        className="memo"
        dangerouslySetInnerHTML={{ __html: memo.toLocaleString() + operation }}
      ></div>
      <div className="main">{display.toLocaleString()}</div>
    </div>
  );
};

export default Display;
