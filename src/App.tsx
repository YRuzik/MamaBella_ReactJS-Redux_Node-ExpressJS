import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className="App">
        <Header/>
        <main>
            <MainPage/>
        </main>
    </div>
  );
}

export default App;
