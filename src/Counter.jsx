// import React, { useEffect, useState } from "react";

// const Counter = () =>{
//     const [number,setNumber] = useState(0);
//     const [text,setText] = useState('Hello');
//     useEffect(()=>{
//         console.log('call from global console');
//         setText('BIT');
//     },[]);
//     //console.log('Call from global consol');
//     return (<div>
//         <div>{number}</div>
//         <div>NEW APP</div> 
//         <div>{text}</div>
//         <button onClick={()=> setNumber(Math.random())}>Update Number</button>
//         <button onClick={()=> setText(Math.random())}>Update text</button>
//     </div>)
// }

// export default Counter;