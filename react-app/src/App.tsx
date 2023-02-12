import './App.css';
import Header from "./components/header/Header";
import MainPage from "./pages/MainPage";
import {BrowserRouter as Router, Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import {FC} from "react";
import SuccessRegisterModal from "./components/successRegisterModal/SuccessRegisterModal";

const App: FC = () => {
  return (
      <Router>
            <div className="App">
                <Header/>
                {/*<SuccessRegisterModal isOpen={true} onClose={() => console.log('s')}/>*/}
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
