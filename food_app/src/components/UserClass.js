import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0,
            count2 : 2
        }
        console.log("Child Constructor")
    }
    componentDidMount(){
        console.log("Child componentdidMount")
    }
    render(){
        console.log("Child  Render")
        const {name,location} = this.props;
        const {count,count2} = this.state;
        return(
            <div className="user-card">
            <h1>Count: {count}</h1>
            <button onClick={()=>{
                this.setState({
                    count : count + 1
                })
            }}> Click me
            </button>
            <h2>Class Component</h2>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: @yuvi456</h4>
            </div>
        )
    }
}
export default UserClass;