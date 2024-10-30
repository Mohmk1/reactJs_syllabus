Mini Projet 1 : Page d’Accueil avec React

Créer un projet React avec Create React App.
Personnaliser la page principale (App.js) en y ajoutant :
Un composant avec un message de bienvenue.
Utiliser JSX pour ajouter un titre (h1) et un paragraphe (p) avec un message.
Utiliser des éléments JavaScript pour ajouter une variable const qui contient le nom de ton application, et afficher cette variable dans la page avec JSX.

Mini Projet 2 Partie 1: Profil d'Utilisateur

Crée deux composants fonctionnels : UserProfile et UserGreeting.
Le composant UserProfile doit afficher des informations sur l'utilisateur : son nom, son âge, et son adresse. Utilise des props pour passer ces informations au composant.
Le composant UserGreeting doit afficher un message de bienvenue personnalisé (par exemple : "Bienvenue, Alice !").
Compose ces composants dans le composant principal App pour afficher le profil et le message de bienvenue ensemble.

Mini Projet 2 Partie 2 : To-Do List Basique

Crée un composant TodoList qui maintient une liste de tâches à l'aide du hook useState.
Ajoute un champ d'entrée (input) pour permettre à l'utilisateur d'entrer une nouvelle tâche, et un bouton pour l'ajouter à la liste.
Chaque tâche doit être affichée dans un composant enfant appelé TodoItem.
Le composant TodoItem reçoit la tâche à travers des props.
Fonctionnalités :

Le composant TodoList doit afficher toutes les tâches.
Utilise des props pour passer les tâches à TodoItem.
Implémente un bouton pour ajouter une nouvelle tâche.

Mini Projet 2 Partie 3 : Formulaire d'Inscription Utilisateur

Crée un composant UserRegistrationForm qui inclut les champs suivants : nom, email, mot de passe.
Utilise useState pour gérer chaque champ du formulaire.
Valide les champs avant de soumettre le formulaire :
Le nom ne doit pas être vide.
L'email doit avoir un format correct (utilise une simple validation regex).
Le mot de passe doit avoir au moins 6 caractères.
Affiche un message après la soumission du formulaire indiquant que l'inscription a réussi, ou des messages d'erreur en cas de validation échouée.

Mini Projet 3 Partie 1 : Compteur avec Limite

Crée un composant CounterWithLimit qui utilise useState pour maintenir un compteur.
Utilise useEffect pour vérifier lorsque le compteur atteint une certaine limite (par exemple, 10).
Affiche un message lorsque la limite est atteinte (par exemple : "Vous avez atteint la limite").
Implémente un bouton pour réinitialiser le compteur à zéro.
Fonctionnalités :

Le composant doit afficher le compteur.
Utilise useEffect pour gérer les effets de bord et déclencher un message lorsque la limite est atteinte.
Implémente une logique pour empêcher le compteur de dépasser la limite.

Mini Projet 3 Partie 2 : To-Do List Avancée avec useReducer

Crée un composant TodoListWithReducer qui gère une liste de tâches en utilisant useReducer.
Le reducer doit pouvoir :
Ajouter une nouvelle tâche.
Supprimer une tâche existante.
Marquer une tâche comme terminée.
Affiche la liste des tâches, chaque tâche pouvant être supprimée ou marquée comme terminée.
Fonctionnalités :

Le composant doit permettre à l'utilisateur d'ajouter une tâche.
Chaque tâche affichée doit avoir un bouton pour la supprimer ou pour la marquer comme terminée.
Utilise useReducer pour gérer l'état des tâches de manière organisée.

Mini Projet 4 : Gestion de Thème Global

Crée un contexte ThemeContext pour gérer un thème global (clair/sombre) dans l'application.
Utilise le contexte pour changer le thème en cliquant sur un bouton, et applique le thème à tous les composants enfants.
Implémente un composant Header et un composant Footer, chacun ayant un style différent en fonction du thème actuel.
Fonctionnalités :

Le thème doit être partagé entre tous les composants (Header, Footer, etc.).
Le bouton pour changer le thème doit être placé dans le composant principal et doit permettre de basculer entre les thèmes clair et sombre.

Mini Projet 5 Partie 1: Application de Gestion de Produits : npm install react-router-dom

Crée une application avec trois pages :
Accueil (/) : Affiche un message de bienvenue.
Liste des Produits (/products) : Affiche une liste de produits fictifs.
Détail d'un Produit (/products/:id) : Affiche le détail d'un produit spécifique.
Utilise React Router pour gérer la navigation entre les pages.
Implémente un composant ProductDetail qui reçoit un id en paramètre et affiche des détails spécifiques pour chaque produit.
Fonctionnalités :

La page d'accueil doit afficher un message de bienvenue.
La page Liste des Produits doit afficher une liste de produits fictifs (par exemple, "Produit A", "Produit B").
La page Détail d'un Produit doit afficher des informations détaillées sur le produit sélectionné (utilise :id pour identifier le produit).

Mini Projet 5 Partie 2 et 3: Application de Gestion de Profils Utilisateurs

Fonctionnalités :

Page d'Accueil (/) : Affiche un message de bienvenue.
Page de Connexion (/login) : Permet aux utilisateurs de se connecter.
Page de Profil Utilisateur (/profile) : Accessible uniquement si l'utilisateur est connecté.
Navigation : Ajouter un menu de navigation pour passer entre les pages.
Redirection : Rediriger vers la page de connexion si l'utilisateur tente d'accéder au profil sans être authentifié.

Mini Projet important mais ne concerne pas le Syllabus : Application de Gestion des Produits avec API : npm install axios

Récupérer des Produits : Crée un composant ProductList qui récupère une liste de produits fictifs depuis une API (https://fakestoreapi.com/products).
Créer un Produit : Crée un composant CreateProduct qui permet d'envoyer un nouveau produit à l'API.
Utilise Axios pour les appels API.
Fonctionnalités :

Le composant ProductList doit afficher une liste de produits.
Le composant CreateProduct doit permettre à l'utilisateur de créer un nouveau produit en envoyant des informations à l'API.

Mini Projet 6 : Application de Styling : npm install styled-components

./\* Création de : ProfileCard.js, Container.js et Ajout de style deans index.css : le tout dans le dossier src.

Composant ProfileCard : Crée un composant ProfileCard en utilisant Styled Components pour styliser une carte de profil avec un nom, une photo et un bouton.
Composant Container : Utilise CSS Modules pour styliser un conteneur qui affiche plusieurs ProfileCard.
Fonctionnalités :

Le composant ProfileCard doit être stylisé avec Styled Components et afficher une carte avec un nom, une photo, et un bouton.
Le composant Container doit être stylisé avec CSS Modules et afficher plusieurs ProfileCard.

Mini Projet 7 : Gestion des Erreurs et Lazy Loading : npm install styled-components

./\* Création de : LazyComponent.js, ErrorBoundary.js, withCounter.js, et ButtonWithCounter.js : le tout dans le dossier src.

Composant LazyComponent : Crée un composant à charger de manière paresseuse avec React.lazy.
Error Boundary : Crée un composant ErrorBoundary pour capturer les erreurs de rendu et l'appliquer au composant LazyComponent.
Composant CounterHOC : Crée un composant enrichi en utilisant un HOC pour ajouter un compteur de clics.
Fonctionnalités :

Le composant LazyComponent doit être chargé paresseusement et intégré dans l'application.
ErrorBoundary doit être utilisé pour entourer LazyComponent afin de capturer les erreurs éventuelles.
Crée un HOC (withCounter) pour ajouter un compteur à un bouton.

Mini Projet 8 : Tester et Déployer une Application React

./\* Création de : Counter.js et Optimisaton de Counter.js avec React.memo
./\* Installation : npm install --save-dev @testing-library/react @testing-library/jest-dom
./\* Création de : Counter.test.js

Tester un Composant Counter : Crée un composant Counter avec un bouton d'incrémentation et écris des tests unitaires pour vérifier son bon fonctionnement.
Optimisation : Utilise React.memo pour éviter les re-rendus inutiles.
Déploiement : Déploie l'application sur Netlify ou Vercel.
Fonctionnalités :

Le composant Counter doit incrémenter la valeur lorsqu'on clique sur un bouton.
Utilise Jest et React Testing Library pour écrire des tests unitaires et des tests d'interface utilisateur.
Déploie l'application sur Netlify ou Vercel et partage le lien.
