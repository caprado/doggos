import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { Nav } from '../components/Nav';
import { Heading } from "../components/Heading";

export const Details = ({ match }) => {
    const [data, setData] = useState<any>([])

    const renderTable = () => {
        return [data].map(dog => {
          return (
            <tr>
              <td key={dog.id}>{dog.name}</td>
              <td>{dog.age}</td>
              <td>{dog.breed}</td>
              <td>{dog.weight}</td>
              <td>{dog.height}</td>
              <td>{dog.color}</td>
            </tr>
          )
        })
      }

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL + `/doggo/${match.params.id}`).then(json => setData(json.data))
      }, [])

    return (
      <div className="dash-wrapper">
        <Nav/>
        <section className="table-wrapper">
          <Heading title="Test"/>
          <table className="table-display">
            <Link to={{ pathname: `/doggo/${match.params.id}/edit`}}>Edit Dog</Link>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Breed</th>
                <th>Age</th>
                <th>Weight</th>
                <th>Height</th>
                <th>Color</th>
              </tr>
            {renderTable()}
          </tbody>
          </table>
        </section>
      </div>
    )
}