import React from "react";

const ColorfulMessage = (props) => {
  console.log(props);
  const { color, message } = props;
  const contentStyle = {
    color: color,
    //オブジェク名とプロパティ値が同じ場合は「,」で省略できる
    //上記の場合は「color,」のみで正常に動く
    fontSize: "18px"
  };

  return <p style={contentStyle}>{message}</p>;
};

export default ColorfulMessage;
