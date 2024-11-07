import React, { useState } from "react";
import Card from "./Card";
import "../App.css";

const Form = () => {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [error, setError] = useState("");
    const [showCard, setShowCard] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (
            name.trim().length < 3 || 
            name.trim() !== name || 
            lastname.length < 6 
        ) {
            setError("Por favor chequea que la información sea correcta");
            setShowCard(false);
        } else {
            setError("");
            setShowCard(true);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nombre: </label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="lastname">Apellido: </label>
                    <input
                        id="lastname"
                        type="text"
                        value={lastname}
                        onChange={(event) => setLastname(event.target.value)}
                    />
                </div>
                <button type="submit">Enviar</button>
            </form>

            {error && <p className="text-error">{error}</p>}
            {showCard && <Card name={name} lastname={lastname} />}
        </div>
    );
};

export default Form;
