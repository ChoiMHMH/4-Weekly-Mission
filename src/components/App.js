import "./App.css";
import AppFooter from "./AppFooter.js";
import AppHeader from "./AppHeader.js";
import Nav from "./AppNav.js";
import React, { useState, useEffect } from "react";
import { getData } from "./api.js";

function App() {
  const [user, setUser] = useState([]);

  async function handleLoadUser() {
    let result;
    result = await getData();
    setUser(result);
  }
  useEffect(() => {
    handleLoadUser();
  }, []);
  console.log(user);

  return (
    <div className="App">
      <Nav />
      <AppHeader />

      <AppFooter />
    </div>
  );
}

export default App;
