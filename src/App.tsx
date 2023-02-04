import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import MainPage from "./pages/MainPage";
import {BrowserRouter as Router, Routes} from "react-router-dom";
import {Route} from "react-router-dom";

function App() {
  return (
      <Router>
            <div className="App">
                <Header/>
                <main>
                    <Routes>

                        <Route path={'/'}>

                            <Route index element={<MainPage/>}/>

                        </Route>

                    </Routes>
                </main>
            </div>
      </Router>
  );
}

export default App;
