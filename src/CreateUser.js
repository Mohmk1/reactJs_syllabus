import axios from "axios";
import React, { useState } from "react";

const CreateUser = ({ onUserCreated }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const createUser = async () => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        {
          name,
          email,
        }
      );
      onUserCreated(response.data);
      setName("");
      setEmail("");
    } catch (error) {
      console.error("Erreur lors de la création de l'utilisateur :", error);
    }
  };

  return (
    <div>
      <h2>Créer un Utilisateur</h2>
      <input
        type="text"
        placeholder="Nom"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={createUser}>Créer</button>
    </div>
  );
};

export default CreateUser;
