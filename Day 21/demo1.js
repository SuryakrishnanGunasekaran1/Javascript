import React from 'react';
import godxking from './godxking'
 function demo1()
{
    const st = {
        padding:"150px 100px",
        margin :"100px",
        border:"25px  dashed skyblue",
        color:"lightgreen",
        backgroundImage:"url('godxking')",
        height: "500px",
        width: "1000px",    
        backgroundSize: "contain",
               backgroundRepeat: "no-repeat",
        }
    return(
        <div style={st}>
            <h1>Hello Chief</h1>
            <label>User id</label>
            <input type ="name"></input><br></br>
            <label>Password</label>
            <input type ="password"></input>
        </div>
    
    )
}
export default demo1;