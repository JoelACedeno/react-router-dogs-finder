import React from "react";
import { Link } from "react-router-dom";

const DogList = ({ dogs }) => {
    return (
        <div>
            <div>
                <h1>Dogs</h1>
                {dogs.map(d => (
                    <div>
                        <img src={d.src} alt={d.name} />
                        <h3>
                            <Link to={`/dogs/${d.name.toLowerCase()}`}>{d.name}</Link>
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DogList;