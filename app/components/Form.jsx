import HomePage from "../page"

function Form(){

function handleClick(){
    alert("Clicked!")
}




    return(
<div>
        <form>
        <label> Name </label>
        <input type="text"></input>
        
        <label> URL </label>
        <input type="text"></input>
        
        
        
                    </form>
        <button onClick={handleClick}>SUBMIT </button>
    </div>    
    )
}
export default Form