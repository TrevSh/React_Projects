import React, {useState} from "react"

function MyObjectArrayComponent(){

    const [cars, setCars] = useState([]);
    const [carsYear, setCarYear] = useState(new Date().getFullYear());
    const [carsMake, setCarsMake] = useState("");
    const [carsModel, setCarsModel] = useState("");

    function handleAddCar(){
        const newCar = {year: carsYear,
                        make: carsMake,
                        model: carsModel};
        
        setCars(c => [...c, newCar]);

        setCarYear(new Date().getFullYear());
        setCarsMake("");
        setCarsModel("");
    }

    function handleRemoveCar(index){
        //creates array without index selected
        setCars(c => c.filter((_,i) => i !== index));
    }

    function handleYearChange(e){
        setCarYear(e.target.value);
    }

    function handleMakeChange(e){
        setCarsMake(e.target.value);
    }

    function handleModelChange(e){
        setCarsModel(e.target.value);
    }

    return(<div>
                <h2>List of Car Objects</h2>
                <ul>
                    {cars.map((car,index) => 
                    <li key={index} onClick={() => handleRemoveCar(index)}>
                        {car.year} {car.make} {car.model}
                        </li>)}
                </ul>

                <input type="number" value={carsYear} onChange={handleYearChange}/><br/>
                <input type="text" value={carsMake} onChange={handleMakeChange} placeholder="Enter Car Make"/><br/>
                <input type="text" value={carsModel} onChange={handleModelChange} placeholder="Enter Car Model"/><br/>
                <button onClick={handleAddCar}>Add Car</button>
           </div>);
}
export default MyObjectArrayComponent;