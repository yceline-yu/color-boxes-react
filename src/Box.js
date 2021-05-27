import React, { useState } from "react";
/** Box
 * 
 * Props:
 * -backgroundColor
 * -width
 * height
 * 
 * BoxList -> Box
 */

function Box({ backgroundColor, width, height, remove }) {
  console.log("backgroundColor", backgroundColor);
  let style = {
    backgroundColor, width: `${width}px`, height: `${height}px`
  }
  return (<div className="Box" style={style}>
    <button onClick={remove}>X</button>
  </div>)

}

export default Box;