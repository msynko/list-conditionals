import React from 'react';


const validation  = (props) => {
  let validationMessage = 'Text long enough! click boxes below'

  if(props.inputLength <=0){
    validationMessage = 'Text too short!'
  }
   return (
     <div>
        <p>{validationMessage}</p>
   </div>
   )
};


export default validation;
