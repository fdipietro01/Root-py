import "./App.css";
import { Header } from "./components/Header/Header";
import { Enlace } from "./components/Enlace/Enlace";
import { NavBar } from "./components/NavBar/NavBar";
import {ItemListContainer} from "./container/ItemListContainer/ItemListContainer";
import {ItemDetailContainer} from "./container/ItemDetailContainer/ItemDetailContainer";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"; 


function App() {
  return (
    <div className="App">
    <Router>
    <Header/>
    <NavBar />
    <Switch>
          <Route path="/category/">  
                <ItemListContainer/> 
           </Route>

          <Route path="/item/:id">
                <ItemDetailContainer/>      
          </Route>

          <Route path="/">
                <ItemListContainer/>
          </Route>
    </Switch>
    <Enlace/>
    </Router>
  </div>
  );
}

export default App;
