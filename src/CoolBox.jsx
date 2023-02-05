import React from "react";
import style from './CoolBox.module.css'

const CoolBox = () => {
   
   return (
      // STRING INTERPOLATION 
      <div className={`header ${style.box}`}> 
         <h2>Coolest box in the world</h2>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, suscipit!</p>
      </div>
   )
}

export default CoolBox;