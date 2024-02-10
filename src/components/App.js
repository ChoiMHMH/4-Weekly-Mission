import "./App.css";
import React, { useState, useEffect } from "react";
import { getData } from "../api.js";
import AppNav from "./AppNav.js";
import AppFooter from "./AppFooter.js";
import AppHeader from "./AppHeader.js";

function App() {
  const [user, setUser] = useState([]);
  const [userInfo, setUserInfo] = useState([]);

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
      <AppNav />

      <AppHeader user={user} />

      <AppFooter />
    </div>
  );
}

export default App;
