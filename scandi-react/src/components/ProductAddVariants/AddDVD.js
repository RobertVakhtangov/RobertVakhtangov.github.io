import React from 'react'

const AddDVD = ({ hoc }) => {
    const handleOnChange = (value) => hoc({"size": value})
  return (
    <div>
        <h2>DVD</h2>
        <label for="dvd">Size (MB)</label>
        <input id="size" type="number" name="dvd" onChange={(e) => handleOnChange(e.target.value)}></input>
        <h4>Please provide DVD size in megabytes (MB)</h4>
    </div>
  )
}

export default AddDVD
