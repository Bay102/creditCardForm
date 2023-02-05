import React from "react"
import style from  "./SuperCoolBox.module.css"

const SuperCoolBox = () => {
   

   return (
      <div className={style.box}>
         <h2 className={style.header}>Coolest box in the galaxy!</h2>
         <p className={style.para}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, suscipit!</p>
      </div>
   )
}

export default SuperCoolBox;