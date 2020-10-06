import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { Nav } from '../components/Nav';
import { Heading } from "../components/Heading";

export const Edit = ({ match }) => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL + `/doggo/${match.params.id}`).then(json => setData(json.data))
  }, [])

  let history = useHistory();

  const handleSubmit = (e, dog) => {
    e.preventDefault();
    axios.post(process.env.REACT_APP_API_URL + `/doggo/${match.params.id}`, {
      name: dog.name,
      age: dog.age,
      breed: dog.breed,
      weight: dog.weight,
      height: dog.height,
      color: dog.color
    }).then(result => {
      if (result.status === 200 || 201) {
        history.push("/dashboard");
      }
    })
  }

  return (
    <div className="dash-wrapper">
      <Nav /> 
      <section className="table-wrapper">
        <Heading title="Test User" />
        <form className="form-edit-dog" onSubmit={(e) => handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Enter name</label>
            <input
              type="text"
              name="name"
              value={name}
              required
              autoFocus
              onChange={e =>setData([{ name: e.target.value }])}
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Enter Age</label>
            <input
              type="number"
              name="age"
              value=""
              required
              onChange={e => setData([{ age: e.target.value }])}
            />
          </div>
          <div className="form-group">
            <label htmlFor="breed">Enter Breed</label>
            <input
              type="text"
              name="breed"
              value=""
              required
              onChange={e => setData([{ breed: e.target.value }])}
            />
          </div>
          <div className="form-group">
            <label htmlFor="weight">Enter Weight</label>
            <input
              type="number"
              name="weight"
              value=""
              required
              onChange={e => setData([{ weight: e.target.value }])}
            />
          </div>
          <div className="form-group">
            <label htmlFor="height">Enter Height</label>
            <input
              type="number"
              name="height"
              value=""
              required
              onChange={e => setData([{ height: e.target.value }])}
            />
          </div>
          <div className="form-group">
            <label htmlFor="color">Enter Color</label>
            <input
              type="text"
              name="color"
              value=""
              required
              onChange={e => setData([{ color: e.target.value }])}
            />
          </div>
          <button type="submit">Submit Changes</button>
        </form>
      </section>
    </div>
  );
};

export {}