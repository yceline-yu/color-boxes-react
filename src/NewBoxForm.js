import React, { useState } from "react";

/** NewBoxForm
 * 
 * Props:
 * -function to make new Box or update BoxList state
 * 
 * State:
 * -initialState { width: "", height: "", backgroundColor: "" }
 * -{width, height, backgroundColor}
 * 
 */
function NewBoxForm({ addBox }) {
  const initialState = { width: "", height: "", backgroundColor: "" };
  const [formData, setFormData] = useState(initialState);

  function handleChange(evt) {
    const { name, value } = evt.target
    setFormData(currData => ({ ...currData, [name]: value }));
  };

  function handleSubmit(evt) {
    evt.preventDefault();
    addBox(formData);
    setFormData(initialState);
  };

  return (
    <form className="NewBoxForm" onSubmit={handleSubmit}>

      <label htmlFor="width">Width</label>
      <input id="width"
        name="width"
        value={formData.width}
        onChange={handleChange} />

      <label htmlFor="height">Height</label>
      <input id="height"
        name="height"
        value={formData.height}
        onChange={handleChange} />

      <label htmlFor="backgroundColor">Background Color</label>
      <input id="backgroundColor"
        name="backgroundColor"
        value={formData.backgroundColor}
        onChange={handleChange} />
      <button>Create</button>
    </form>
  )
};

export default NewBoxForm;