import "./App.css";
import { Header } from "./components/Header/Header";
import { Enlace } from "./components/Enlace/Enlace";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./container/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./container/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Cart } from "./container/CartContainer/Cart";
import { CartItems } from "./context/CartContext";
import { Purchased } from "./components/Purchased/Purchased"

function App() {
  return (
    <div className="App">
      <CartItems value={[]}>
        <Router>
          <Header />
          <NavBar/>
          <Switch>
            <Route path="/category/:id">
              <ItemListContainer />
            </Route>
            <Route path="/item/:id">
              <ItemDetailContainer />
            </Route>
            <Route path="/cart/">
              <Cart/>
            </Route>
            <Route path="/purchased/">
              <Purchased/>
            </Route>
            <Route path="/">
              <ItemListContainer />
            </Route>
          </Switch>
        </Router>
      </CartItems>
      <Enlace />  
    </div>
  );
}

export default App;
