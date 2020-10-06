import React, { useState, useEffect } from "react";
import { Heading } from "../components/Heading";
import { Nav } from '../components/Nav';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import '../styles/dashboard.css';

export const Dashboard = () => {
  const [data, setData] = useState<any[]>([])
  
  let history = useHistory();

  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL + "/doggo/").then(json => setData(json.data))
  }, [])

  const renderTable = () => {
    return data.map(dogList => {
      return (
        <tr>
          <td key={dogList.id.toString()} data-id={dogList.id}>{dogList.name}</td>
          <td>{dogList.breed}</td>
          <td><button onClick={() => dogDetails(dogList.id)}>Details</button></td>
        </tr>
      )
    })
  }

  const dogDetails = (id) => {
    history.push(`/details/${id}`);
  }

  return (
    <div className="dash-wrapper">
      <Nav/>
      <section className="table-wrapper">
        <Heading title="Test"/>
          <table className="table-display">
            <tbody>
              <tr>
                <th>Name</th>
                <th>Breed</th>
                <th></th>
              </tr>
                {renderTable()}
            </tbody>
          </table>
      </section>
    </div>
  );
};