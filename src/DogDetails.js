import React from "react";
import { Link, Redirect, useParams } from "react-router-dom";

const DogDetails = ({ dogs }) => {
    const { name } = useParams();
    const dog = dogs.find(d => d.name.toLowerCase() === name.toLowerCase());

    if (!dog) return (<Redirect to="/dogs/" />);

    return (
        <div>
            <img src={dog.src} alt={dog.name} />
            <h2>{dog.name}</h2>
            <h3>{dog.age} years old</h3>
            <ul>
                {dog.facts.map((fact, i) => (
                    <li key={i}>{fact}</li>
                ))}
            </ul>
            <Link to="/dogs">Go Back</Link>
        </div>
    )
}

export default DogDetails;