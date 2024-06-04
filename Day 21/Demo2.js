import React,{Component} from "react";
import godxking from './godxking'
class Demo2 extends React.Component
{
    render()
    {
        const st ={
            width :'50%'
        }
        return(
            <div>
            <img style = {st} src ={godxking} alt ="no image"></img>
            <h1> React is a library for javascript</h1>
            </div>
        )
    }
}
export default Demo2
    