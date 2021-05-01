import React, {useState, useEffect} from "react";
import './App.css';
import List from './List';


function App() {
  return (
    <section className="container">
      <form>
        <input 
          type="text"

          />
      </form>
      <div className="grocery-container">
        <List/>
      </div>
    </section>
  );
}

export default App;
