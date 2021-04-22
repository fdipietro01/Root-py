import "./App.css";
import { Products } from "./components/Products/Products";
import { Header } from "./components/Header/Header";
import { Link } from "./components/Link/Link";

function App() {
  return (
    <div className="App">
      <Header/>
      <Products/>
      <Link/>
    </div>
  );
}

export default App;
