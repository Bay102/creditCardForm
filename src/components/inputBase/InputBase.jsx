import React from "react";
import './InputBase.css'

const InputBase = (props) => (
   <label>
       <input {...props} className="input-root" />
   </label>
  
);

export default InputBase;