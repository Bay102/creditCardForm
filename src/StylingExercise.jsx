import React from "react";

class StylingExercise extends React.Component {
   state = { 

   }

   render() {
      return(
         <div style={{ border:'1px solid black', borderRadius: '10px', padding: '20px' }}>
            <h1 style={{ color: 'red',}}>Captian Kickflip</h1>
            <p>Full-Stack <strike>Developer</strike> of Pancakes</p>
            <div>{'⭐️'.repeat(4)}</div>
         </div>
      )
   }
}

export default StylingExercise