/**** Avant Optimisation avec React.memo ****/

// import React, { useState } from "react";

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   return <button onClick={increment}>Incrémenter : {count}</button>;
// };

// export default Counter;

/**** Apès Optimisation avec React.memo ****/

import React, { useState } from "react";

const Counter = React.memo(() => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return <button onClick={increment}>Incrémenter : {count}</button>;
});

export default Counter;
