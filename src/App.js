import './App.css';
import {Route, Switch} from "react-router-dom";
import React from "react";
import Home from "./pages/home/Home";
import Subreddit from "./pages/subreddit/Subreddit";
import Header from "./components/header/Header";

// Stappenplan
// Opdracht 2:
// 1. Installeer react-router-dom
// 2. Gebruik router in de index
// 3. Switch nodig met Route
// 4. Maak een Navlink aan
// 5. Zorg ervoor dat je kan testen of de routing werkt door in Subreddit.js useParams te gebruiken!

// Opdracht 3:
// 1. Installeer axios
// 2. Maak in Home.js een Get request naar: https://www.reddit.com/hot.json?limit=15 en log dit in de console
// 3. Log in de console de result.data en probeer de informatie uit de API te loggen die je nodig hebt.
// 4. Ga het weergeven op de pagina voor 1 post.
// 5. Probeer 15 stuks op de pagina te krijgen.
// 6. Zorg ervoor dat de naam van de subreddit een link wordt die doorlinkt naar de betreffende subreddit pagina.
// 7. Zorg ervoor dat als de gebruiker op de titel klikt hij wordt doorgelinkt naar de post op reddit.com.

// Opdracht 4:
// 1. Haal via een Get request de data binnen.
// 2. Log de data in de console om de structuur te zien.
// 3. Maak een state aan.
// 4. Zorg ervoor dat de juiste informatie op de pagina te zien is.
// 5. Maak de take me back link.

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path={"/subreddit/:subredditId"}>
          <Subreddit />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
