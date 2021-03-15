import React, { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Menu from "./Menu";
import Content from "./Content";
import { ItemsProvider } from "./contexts/ItemsContext";
import { CategoriesProvider } from "./contexts/CategoriesContext";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <Navbar onToggle={() => setMenuOpen(!menuOpen)} />
      <Menu isOpen={menuOpen} toggleOpen={setMenuOpen} />
      <ItemsProvider>
        <CategoriesProvider>
          <Content />
        </CategoriesProvider>
      </ItemsProvider>
    </div>
  );
}

export default App;
