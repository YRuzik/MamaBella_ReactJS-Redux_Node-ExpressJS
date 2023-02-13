import './App.css';
import Header from "./components/header/Header";
import MainPage from "./pages/MainPage";
import {BrowserRouter as Router, Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import {FC, useEffect} from "react";
import {checkAuth, loginUser, setAuth} from "./actions/actions";
import {useDispatch} from "react-redux";

const App: FC = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        if (localStorage.getItem('token')) {
            checkAuth().then(data => {
                dispatch(loginUser(data!.data.user))
                dispatch(setAuth(true))
            })
        }
    }, [])

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
