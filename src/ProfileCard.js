/**** Mini projet 6 ****/

import React from "react";
import styled from "styled-components";

// Composant stylisé pour la carte de profil
const Card = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  width: 200px;
  margin: 10px;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-bottom: 16px;
`;

const ProfileName = styled.h3`
  color: #333;
  margin-bottom: 8px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #0056b3;
  }
`;

const ProfileCard = ({ name, image }) => {
  return (
    <Card>
      <ProfileImage src={image} alt={`${name}'s photo`} />
      <ProfileName>{name}</ProfileName>
      <Button>Voir Profil</Button>
    </Card>
  );
};

export default ProfileCard;
