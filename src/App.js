// import React, { useState, useEffect, Component } from "react";
// import { useEffect, useState } from "react";
// import { useReducer, useState } from "react";
// import React, { createContext, useContext, useState } from "react";
// import {Link, Route, BrowserRouter as Router, Routes, useParams,} from "react-router-dom";
// import React, { useState } from "react";
// import {
//   Link,
//   Navigate,
//   Route,
//   BrowserRouter as Router,
//   Routes,
// } from "react-router-dom";

// import axios from "axios";
// import React, { useEffect, useState } from "react";

// import React from "react";
// import Container from "./Container";

// import React, { Suspense } from "react";
// import ButtonWithCounter from "./ButtonWithCounter";
// import ErrorBoundary from "./ErrorBoundary";

import React from "react";
import Counter from "./Counter";

import "./App.css";

/**** Mini Projet 1 ****/

/**  Module 1: Introduction to React
1. Understanding JavaScript ES6+
o Arrow functions
o Let, Const, and Var
o Destructuring
o Spread and Rest operators
o Promises and Async/Await **/

// const element  = <h1>Page Simple</h1>
// const element2 = <p>Bienvenue dans mon Application</p>

/**** Mini Projet 2 ****/

/**** Partie 1 ***/

// const UserProfile = ({ nom, age, adresse }) => {
//   return (
//     <div>
//       {nom} <br />
//       {age} <br />
//       {adresse}
//     </div>
//   );
// };

// const UserGreeting = ({ nom }) => {
//   return <h1>Bienvenue {nom}!</h1>;
// };

/**** Partie 2 ***/

// const TodoList = () => {
//   const [todos, setTodos] = useState([]);
//   const [nouvelleTache, setNouvelleTache] = useState("");

//   const AjouterTache = () => {
//     if (nouvelleTache.trim() !== "") {
//       setTodos([...todos, nouvelleTache]);
//       setNouvelleTache("");
//     }
//   };

//   return (
//     <div>
//       <label>
//         Entrez une tâche :
//         <input
//           name="tache"
//           value={nouvelleTache}
//           onChange={(e) => setNouvelleTache(e.target.value)}
//         />
//       </label>
//       <button onClick={AjouterTache}>Ajouter</button>

//       <div>
//         {todos.map((tache, index) => (
//           <TodoItem key={index} tache={tache} />
//         ))}
//       </div>
//     </div>
//   );
// };

// const TodoItem = ({ tache }) => {
//   return (
//     <div>
//       <p>
//         <ul>
//           <li> {tache} </li>
//         </ul>
//       </p>
//     </div>
//   );
// };

/**** Partie 3 ****/

// const UserRegistrationForm = () => {
//   const [nom, setNom] = useState("");
//   const [email, setEmail] = useState("");
//   const [passe, setPasse] = useState("");
//   const [erreurs, setErreurs] = useState({ nom: "", email: "", passe: "" });

//   const validate = (e) => {
//     e.preventDefault();

//     let hasError = false;
//     let newErrors = { nom: "", email: "", passe: "" };

//     if (nom.trim() === "") {
//       newErrors.nom = "Le nom ne doit pas être vide";
//       hasError = true;
//     }

//     const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     if (!emailPattern.test(email)) {
//       newErrors.email = "Veuillez entrer un email valide";
//       hasError = true;
//     }

//     if (passe.length < 6) {
//       newErrors.passe = "le mot de passe doit contenir au moins 6 caractères";
//       hasError = true;
//     }

//     setErreurs(newErrors);

//     if (!hasError) {
//       alert("Formulaire enregister avec succès");
//       console.log(`Nom : ${nom}, Email : ${email}, Passe : ${passe}`);
//     }
//   };
//   return (
//     <form onSubmit={validate}>
//       <label>
//         Nom :
//         <input
//           type="text"
//           value={nom}
//           onChange={(vld) => setNom(vld.target.value)}
//         />
//         {erreurs.nom && <div style={{ color: "red" }}> {erreurs.nom} </div>}
//       </label>
//       <br />
//       <label>
//         Email :
//         <input
//           type="mail"
//           value={email}
//           onChange={(vld) => setEmail(vld.target.value)}
//         />
//         {erreurs.email && <div style={{ color: "red" }}> {erreurs.email} </div>}
//       </label>
//       <br />
//       <label>
//         Mot de passe :
//         <input
//           type="password"
//           value={passe}
//           onChange={(vld) => setPasse(vld.target.value)}
//         />
//       </label>
//       {erreurs.passe && <div style={{ color: "red" }}> {erreurs.passe} </div>}
//       <br />
//       <button type="submit">Soumettre</button>
//     </form>
//   );
// };

/**** Mini Projet 3 ****/

/**** Partie 1 ****/

// const CounterWithLimit = () => {
//   const [compteur, setCompteur] = useState(0);

//   useEffect(() => {
//     if (compteur === 10) {
//       alert(`Vous avez atteint la limite : ${compteur}`);
//     }
//   }, [compteur]);

//   return (
//     <div>
//       <p>Le compteur est à : {compteur}</p>
//       <button
//         onClick={() => {
//           if (compteur < 10) {
//             setCompteur(compteur + 1);
//           }
//         }}
//       >
//         Incrémenter
//       </button>
//       <br />
//       <button onClick={() => setCompteur(0)}>Rénitialiser</button>
//     </div>
//   );
// };

/**** Partie 2 ****/

// const todoReducer = (state, action) => {
//   switch (action.type) {
//     case "ajouter":
//       return [
//         ...state,
//         { id: Date.now(), text: action.payload, completed: false },
//       ];
//     case "supprimer":
//       return state.filter((todo) => todo.id !== action.payload);
//     case "terminer":
//       return state.map((todo) =>
//         todo.id === action.payload
//           ? { ...todo, completed: !todo.completed }
//           : todo
//       );
//     default:
//       return state;
//   }
// };

// const TodoListWithReducer = () => {
//   const [todos, dispatch] = useReducer(todoReducer, []);
//   const [nouvelleTache, setNouvelleTache] = useState("");

//   const ajouterTache = () => {
//     if (nouvelleTache.trim() !== "") {
//       dispatch({ type: "ajouter", payload: nouvelleTache });
//       setNouvelleTache("");
//     }
//   };

//   return (
//     <div>
//       <h2>To-Do List Avancée avec useReducer</h2>
//       <input
//         type="text"
//         value={nouvelleTache}
//         onChange={(e) => setNouvelleTache(e.target.value)}
//         placeholder="Ajouter une nouvelle tâche"
//       />
//       <button onClick={ajouterTache}>Ajouter</button>

//       <ul>
//         {todos.map((todo) => (
//           <li
//             key={todo.id}
//             style={{ textDecoration: todo.completed ? "line-through" : "none" }}
//           >
//             {todo.text}
//             <button
//               onClick={() => dispatch({ type: "terminer", payload: todo.id })}
//             >
//               {todo.completed ? "Annuler" : "Terminer"}
//             </button>
//             <button
//               onClick={() => dispatch({ type: "supprimer", payload: todo.id })}
//             >
//               Supprimer
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

/**** Mini Projet 4 ****/

// const ThemeContext = createContext();

// const Header = () => {
//   const theme = useContext(ThemeContext);
//   return (
//     <header
//       style={{
//         background: theme === "dark" ? "#333" : "#FFF",
//         color: theme === "dark" ? "#FFF" : "#000",
//         padding: "1rem",
//       }}
//     >
//       <h1>Application avec Thème {theme === "dark" ? "Sombre" : "Clair"}</h1>
//     </header>
//   );
// };

// const Footer = () => {
//   const theme = useContext(ThemeContext);
//   return (
//     <footer
//       style={{
//         background: theme === "dark" ? "#333" : "#FFF",
//         color: theme === "dark" ? "#FFF" : "#000",
//         padding: "1rem",
//         marginTop: "1rem",
//       }}
//     >
//       <p>Footer en Thème {theme === "dark" ? "Sombre" : "Clair"}</p>
//     </footer>
//   );
// };

// const ThemedButton = () => {
//   const theme = useContext(ThemeContext);
//   const buttonStyle = {
//     background: theme === "dark" ? "#555" : "#DDD",
//     color: theme === "dark" ? "#FFF" : "#000",
//     border: "none",
//     padding: "0.5rem 1rem",
//     margin: "1rem",
//     cursor: "pointer",
//   };
//   return (
//     <button style={buttonStyle}>
//       Bouton Thème {theme === "dark" ? "Sombre" : "Clair"}
//     </button>
//   );
// };

// // Composant principal
// const App = () => {
//   const [theme, setTheme] = useState("light");

//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
//   };

//   return (
//     <ThemeContext.Provider value={theme}>
//       <div style={{ textAlign: "center" }}>
//         <button
//           onClick={toggleTheme}
//           style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}
//         >
//           Basculez le Thème
//         </button>
//         <Header />
//         <ThemedButton />
//         <Footer />
//       </div>
//     </ThemeContext.Provider>
//   );
// };

/**** Mini Projet 5 Partie 1****/

// const Home = () => (
//   <div>
//     <h2>Bienvenue sur notre application de gestion de produits !</h2>
//   </div>
// );

// // Composant Products
// const Products = () => {
//   const products = [
//     { id: 1, name: "Produit A" },
//     { id: 2, name: "Produit B" },
//     { id: 3, name: "Produit C" },
//   ];

//   return (
//     <div>
//       <h2>Liste des Produits</h2>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>
//             <Link to={`/products/${product.id}`}>{product.name}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const ProductDetail = () => {
//   const { id } = useParams();
//   const productDetails = {
//     1: {
//       name: "Produit A",
//       description: "Description du Produit A",
//       price: "10€",
//     },
//     2: {
//       name: "Produit B",
//       description: "Description du Produit B",
//       price: "15€",
//     },
//     3: {
//       name: "Produit C",
//       description: "Description du Produit C",
//       price: "20€",
//     },
//   };

//   const product = productDetails[id];

//   if (!product) {
//     return <p>Produit non trouvé</p>;
//   }

//   return (
//     <div>
//       <h2>Détails du Produit {product.name}</h2>
//       <p>Description : {product.description}</p>
//       <p>Prix : {product.price}</p>
//     </div>
//   );
// };

// // Composant principal App
// const App = () => {
//   return (
//     <Router>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Accueil</Link>
//           </li>
//           <li>
//             <Link to="/products">Liste des Produits</Link>
//           </li>
//         </ul>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/products/:id" element={<ProductDetail />} />
//       </Routes>
//     </Router>
//   );
// };

/**** Mini Projet 5 Partie 2 et 3 ****/

// const Home = () => (
//   <div>
//     <h2>Bienvenue sur notre application de gestion de profils !</h2>
//   </div>
// );

// const Login = ({ setIsAuthenticated }) => {
//   const handleLogin = () => {
//     setIsAuthenticated(true);
//   };

//   return (
//     <div>
//       <h2>Connexion</h2>
//       <button onClick={handleLogin}>Se Connecter</button>
//     </div>
//   );
// };

// const Profile = () => (
//   <div>
//     <h2>Mon Profil</h2>
//     <p>Bienvenue dans votre espace personnel.</p>
//   </div>
// );

// const PrivateRoute = ({ children, isAuthenticated }) => {
//   return isAuthenticated ? children : <Navigate to="/login" />;
// };

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   return (
//     <Router>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Accueil</Link>
//           </li>
//           <li>
//             <Link to="/profile">Mon Profil</Link>
//           </li>
//           <li>
//             <Link to="/login">Connexion</Link>
//           </li>
//         </ul>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route
//           path="/login"
//           element={<Login setIsAuthenticated={setIsAuthenticated} />}
//         />
//         <Route
//           path="/profile"
//           element={
//             <PrivateRoute isAuthenticated={isAuthenticated}>
//               <Profile />
//             </PrivateRoute>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// };

/**** Module important mais dans le Syllabus Gestion des Produits avec API ****/

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get("https://fakestoreapi.com/products");
//         setProducts(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Erreur lors de la récupération des produits :", error);
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading) {
//     return <p>Chargement des produits...</p>;
//   }

//   return (
//     <div>
//       <h2>Liste des Produits</h2>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>
//             <h3>{product.title}</h3>
//             <p>Prix : {product.price} €</p>
//             <img
//               src={product.image}
//               alt={product.title}
//               style={{ width: "100px" }}
//             />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const CreateProduct = () => {
//   const [title, setTitle] = useState("");
//   const [price, setPrice] = useState("");
//   const [description, setDescription] = useState("");
//   const [image, setImage] = useState("");
//   const [category, setCategory] = useState("");

//   const createProduct = async () => {
//     try {
//       const response = await axios.post("https://fakestoreapi.com/products", {
//         title,
//         price,
//         description,
//         image,
//         category,
//       });
//       console.log("Produit créé :", response.data);

//       setTitle("");
//       setPrice("");
//       setDescription("");
//       setImage("");
//       setCategory("");
//     } catch (error) {
//       console.error("Erreur lors de la création du produit :", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Créer un Nouveau Produit</h2>
//       <input
//         type="text"
//         placeholder="Titre"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Prix"
//         value={price}
//         onChange={(e) => setPrice(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="URL de l'image"
//         value={image}
//         onChange={(e) => setImage(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Catégorie"
//         value={category}
//         onChange={(e) => setCategory(e.target.value)}
//       />
//       <button onClick={createProduct}>Créer Produit</button>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <div>
//       <h1>Application de Gestion des Produits</h1>
//       <ProductList />
//       <CreateProduct />
//     </div>
//   );
// };

/**** Mini Projet 7 ****/

// Charger le composant paresseusement
// const LazyComponent = React.lazy(() => import("./LazyComponent"));

/**** Mini Projet 8 ****/

/***********************************************************************************************************************************/

function App() {
  return (
    <>
      {/* ** Mini Projet 1 ** */}

      {/* {element}
      {element2} */}

      {/* ** Mini Projet 2 ** */}

      {/* Partie 1 */}

      {/* <UserProfile nom="John" age="30 ans" adresse="Mermoz" />
      <UserGreeting nom="Alice" /> */}

      {/* Partie 2 */}

      {/* <TodoList >* /}

      {/* Partie 3 */}

      {/* <UserRegistrationForm /> */}

      {/* ** Mini Projet 3 ** */}

      {/* Partie 1 */}

      {/* <CounterWithLimit /> */}

      {/* Partie 2 */}

      {/* <TodoListWithReducer /> */}

      {/* ** Mini Projet 6 ** */}

      {/* <div>
        <h1>Application de Styling</h1>
        <Container />
      </div> */}

      {/* ** Mini Projet 7 ** */}

      {/* <div>
        <h1>Gestion des Erreurs et Lazy Loading</h1>
        <ErrorBoundary>
          <Suspense fallback={<p>Chargement du composant...</p>}>
            <LazyComponent />
          </Suspense>
        </ErrorBoundary>
        <ButtonWithCounter />
      </div> */}

      {/* ** Mini Projet 8 ** */}

      <div>
        <h1>Application de Gestion des Clics</h1>
        <Counter />
      </div>
    </>
  );
}

export default App;
