/**** Mini projet 6 ****/

import React from "react";
import ProfileCard from "./ProfileCard";
import styles from "./index.css";

// Données fictives pour les cartes de profil
const profiles = [
  { id: 1, name: "Alice", image: "https://via.placeholder.com/100" },
  { id: 2, name: "Bob", image: "https://via.placeholder.com/100" },
  { id: 3, name: "Charlie", image: "https://via.placeholder.com/100" },
];

const Container = () => {
  return (
    <div className={styles.container}>
      {profiles.map((profile) => (
        <ProfileCard
          key={profile.id}
          name={profile.name}
          image={profile.image}
        />
      ))}
    </div>
  );
};

export default Container;
