import React, {useState} from "react";

function MyArrayComponent(){

    const [foods, setFoods] = useState(["Apple","Orange","Banana"]);

    function handleAddFood(){

        //saves value and clears the text input container
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        //the spread operator means, "Add this element on top of the whole array"
        setFoods(f => [...f, newFood])
    }
    function handleRemoveFood(index){

        setFoods(foods.filter((_,i) => i !== index));
    }

    return(<div>
                <h2>List of Food</h2>
                <p>Click list item to remove</p>
                <ul>
                    {foods.map((food,index) => 
                    <li onClick={() => handleRemoveFood(index)} key = {index}>
                        {food}
                    </li>)}
                </ul>
                <input type="text" id="foodInput" placeholder="Enter Food Name"/>
                <button onClick={handleAddFood}>Add Food</button>
           </div>)
}
export default MyArrayComponent