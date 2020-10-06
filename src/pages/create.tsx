import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { Nav } from '../components/Nav';
import { Heading } from "../components/Heading";

type DoggoProps = {
  name: string,
  age: number,
  breed: string,
  weight: number,
  height: number,
  color: string
}

export const Create = ({ name, age, breed, weight, height, color }: DoggoProps) => {
  const [dogName, setDogName] = useState("");
  const [dogAge, setDogAge] = useState("");
  const [dogBreed, setDogBreed] = useState("");
  const [dogWeight, setDogWeight] = useState("");
  const [dogHeight, setDogHeight] = useState("");
  const [dogColor, setDogColor] = useState("");

  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(process.env.REACT_APP_API_URL + "/doggo/", {
      name: dogName,
      age: dogAge,
      breed: dogBreed,
      weight: dogWeight,
      height: dogHeight,
      color: dogColor
    }).then(result => {
      if (result.status === 200 || 201) {
        history.push("/dashboard");
      }
    })
  }

  return (
    <div className="dash-wrapper">
      <Nav/>
      <section className="table-wrapper">
      <Heading title="Test"/>
        <form className="form-create-dog" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Enter name</label>
            <input 
              type="text"
              name="name"
              value={dogName}
              required 
              autoFocus 
              onChange={e => setDogName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Enter Age</label>
            <input 
              type="number"
              name="age"
              value={dogAge}
              required
              onChange={e => setDogAge(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="breed">Enter Breed</label>
            <input 
              type="text"
              name="breed"
              value={dogBreed}
              required
              onChange={e => setDogBreed(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="weight">Enter Weight</label>
            <input 
              type="number"
              name="weight"
              value={dogWeight}
              required
              onChange={e => setDogWeight(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="height">Enter Height</label>
            <input 
              type="number"
              name="height"
              value={dogHeight}
              required
              onChange={e => setDogHeight(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="color">Enter Color</label>
            <input 
              type="text"
              name="color"
              value={dogColor}
              required
              onChange={e => setDogColor(e.target.value)}
            />
          </div>
          <button type="submit">Add Dog</button>
        </form>
      </section>
    </div>
  );
};