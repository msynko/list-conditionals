import React from 'react';


const validation  = (props) => {
const style = {
  fontSize:'15px'
}


  let validationMessage = 'Text is long enough! click any box now'

  if(props.inputLength <= 0){
    validationMessage = 'Text is too short!'
  }
   return (
     <div>
        <p style={style}> {validationMessage} </p>
   </div>
   )
};


export default validation;
