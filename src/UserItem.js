import React from "react";

const UserItem = ({ user, onDelete }) => {
  return (
    <li>
      <span>
        {user.name} ({user.email})
      </span>
      <button onClick={() => onDelete(user.id)}>Supprimer</button>
    </li>
  );
};

export default UserItem;
