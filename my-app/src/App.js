import React from 'react';
import './App.css';
import User from "./components/User.js";
import Followers from "./components/Followers.js"

function App() {
  return (
    <div className="App">
      <h1>Lambda School GitHub User Profile</h1>
      <User />
      <h1>Followers</h1>
      <Followers />

    </div>
  );
}

export default App;
