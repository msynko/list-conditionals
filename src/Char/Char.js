import React from 'react';


const char = (props) => {
 const style = {
   fontSize: '35px',
   display: 'inline-block',
   padding: '40px',
   textAlign: 'center',
   margin: '20px',
   border: '1px solid #6AD2B5',
   boxShadow: '4px 4px #D9DEDD',
   backgroundColor:'#A5D5D3'
 }
   return (
     <div style ={style} onClick={props.clicked} >
     {props.character}
     </div>

   )
};


export default char;
