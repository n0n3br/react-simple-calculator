import React from "react";
export interface iKey {
  content: string;
  handler?: Function;
  color?: string;
  text?: string;
}
const Key = (props: iKey) => {
  const { content, handler, color, text } = props;
  if (!handler) return <div></div>;
  const keyClass = `key ${color ? `key-${color}` : ""}`;
  const clickHandler = (event: React.MouseEvent) => {
    handler(content);
  };
  return (
    <div className={keyClass} onClick={clickHandler}>
      {text && <span dangerouslySetInnerHTML={{ __html: text }}></span>}
      {!text && <span>{content}</span>}
    </div>
  );
};
export default Key;
