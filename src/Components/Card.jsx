import React from "react";

const Card = ({name, lastname}) => {

    return(
        <div className="card">
            <h2>Información ingresada:</h2>
            <p>Nombre: {name}</p>
            <p>Apellido: {lastname}</p>
        </div>
    ); 

};

export default Card;
