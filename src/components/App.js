import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import items from "../data/items";

function App() {
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [appClass, setAppClass] = useState(true)

  function handlescreenMode(){
    setAppClass(() => !appClass)
  }
  console.log(appClass)

  return (
    <div className={appClass? "App light": "App dark"}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handlescreenMode}>{appClass? "Light Mode": "Dark Mode"}</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
