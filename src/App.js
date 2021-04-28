import "./App.css";
import { Header } from "./components/Header/Header";
import { Link } from "./components/Link/Link";
import {ItemListContainer} from "./container/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <Header/>
      <ItemListContainer/> 
      <Link/>
    </div>
  );
}

export default App;
