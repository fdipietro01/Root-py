import "./App.css";
import { Header } from "./components/Header/Header";
import { Enlace } from "./components/Enlace/Enlace";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./container/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./container/ItemDetailContainer/ItemDetailContainer";
import { NotFound } from "./components/NotFound/NotFound"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Cart } from "./container/CartContainer/Cart";
import { CartItems } from "./context/CartContext";

function App() {
  return (
    <div className="App">
      <CartItems value={[]}>
        <Router>
          <Header />
          <NavBar></NavBar>
          <Switch>
            <Route path="/category/:id">
              <ItemListContainer />
            </Route>
            <Route path="/item/:id">
              <ItemDetailContainer />
            </Route>
            <Route path="/cart/">
              <Cart />
            </Route>
            <Route path="/">
              <ItemListContainer />
            </Route>
            <Route>
              <NotFound/>
            </Route>
          </Switch>
          <Enlace />
        </Router>
      </CartItems>
    </div>
  );
}

export default App;
