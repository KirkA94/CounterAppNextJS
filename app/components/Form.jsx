import HomePage from "../page"
import {useState} from "react"
// state - (like a variable ) a way for us to set and refrence data that changes in our component

function Form(props){

const [Name, setName] = useState("")
const [URL, setURL] = useState("")

function handleClick(){
    console.log(Name,URL)
    props.sumbitFavLink(Name, URL)
}

function handleNameInputChange(event){
    console.log(event.target.value)
    setName(event.target.value)
}

function handleURLInputChange(event){
    console.log(event.target.value)
    setURL(event.target.value)
}



    return(
<div>
        <form>
        <label> Name </label>
        <input type="text" onChange={handleNameInputChange}></input>
        
        <label> URL </label >
        <input type="text" onChange={handleURLInputChange}></input>
        
        
        
                    </form>
        <button onClick={handleClick}>SUBMIT </button>
    </div>    
    )
}
export default Form