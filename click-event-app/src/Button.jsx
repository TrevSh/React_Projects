
function Button(){

    let count = 0;
    const handleClick = (e) => {
        //e is a global variable
        //We can use e to target the textContent property and change it!
        e.target.textContent = "Ouch"
    }

    //e is used for event
    //using '() =>' to prevent the function from running on start. 
    return (<button onClick={(e) => handleClick(e)}>Click Me</button>)
}
export default Button