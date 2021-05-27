import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Box from "./Box"
import NewBoxForm from "./NewBoxForm";

/** BoxList
 * 
 * Props:
 * -?
 * 
 * States:
 * -state of boxes = [{height, width, background, id}...]
 * 
 *  App -> BoxList -> Box
 */
function BoxList() {
  const [boxes, setBoxes] = useState([]);
  console.log("boxes", boxes);

  function addBox({ height, width, backgroundColor }) {
    let newBox = { height, width, backgroundColor, id: uuid() };
    setBoxes(boxes => [...boxes, newBox]);
  }

  function removeBox(id) {
    setBoxes(boxes => boxes.filter(box => box.id !== id)); // pass a callback
  }

  return (<div className="BoxList">
    <NewBoxForm addBox={addBox} />
    <ul>
      {boxes.map(box => <li key={box.id}>
        <Box
          height={box.height}
          width={box.width}
          backgroundColor={box.backgroundColor}
          remove={() => removeBox(box.id)} />
      </li>)}

    </ul>
  </div>)


}

export default BoxList;