import User from "./User"
import UserClass from "./UserClass"
import React from "react"

class AboutUs extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent constructor")
    }

    componentDidMount(){
        console.log("Parent componentdidMount")
    }
    render(){
        console.log("Parent render")
        return(
            <>
            <h1>About Us</h1>
            <User name={"Yuvraj Pardeshi (functional)"} location={"Pune"}/>
            <UserClass name={"Yuvraj Pardeshi (Class)"} location={"Pune"}/>
            </> 
        )
    }
}


export default AboutUs;