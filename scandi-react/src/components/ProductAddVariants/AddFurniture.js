import React, {useState} from 'react'

const AddFurniture = ({ hoc }) => {
    const [dimensions, setDimensions] = useState([0, 0, 0]);

    const handleOnChange = (name, value) =>{
        let measurementToNum = 0
        switch(name){
            case "fruniture_h":
                measurementToNum = 0;
                break;
            case "furniture_w":
                measurementToNum = 1;
                break;
            case "furniture_l":
                measurementToNum = 2;
                break;
        }
        setDimensions((prev) =>{
            prev[measurementToNum] = value;
            return prev;
        })

        hoc({"h": dimensions[0], "w": dimensions[1], "l": dimensions[2]})
    }

    return (
        <div>
            <h2>Furniture</h2>
            <div>
                <label for="furniture_h">Height (CM)</label>
                <input id="height" type="number" name="furniture_h" onChange={(e) => handleOnChange(e.target.name, e.target.value)}></input>
            </div>
            <div>
                <label for="furniture_w">Width (CM)</label>
                <input id="width" type="number" name="furniture_w" onChange={(e) => handleOnChange(e.target.name, e.target.value)}></input>
            </div>
            <div>    
                <label for="furniture_l">Length (CM)</label>
                <input id="length" type="number" name="furniture_l" onChange={(e) => handleOnChange(e.target.name, e.target.value)}></input>
            </div>
            <h4>Please provide dimensions in HxWxL format</h4>
        </div>
    )
}

export default AddFurniture
