import React from 'react'

const AddBook = ({ hoc }) => {
    const handleOnChange = (value) => hoc(`${value}KG`)
  return (
    <div>
        <h2>Book</h2>
        <label for="book">Weight (KG)</label>
        <input id="weight" type="number" name="book" onChange={(e) => handleOnChange(e.target.value)}></input>
        <h4>Description Description Description</h4>
    </div>
  )
}

export default AddBook
