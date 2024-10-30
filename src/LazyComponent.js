import React from "react";

const LazyComponent = () => {
  return (
    <div>
      <h2>Composant Chargé Paresseusement</h2>
      <p>Ce composant a été chargé de manière asynchrone grâce à React.lazy.</p>
    </div>
  );
};

export default LazyComponent;
