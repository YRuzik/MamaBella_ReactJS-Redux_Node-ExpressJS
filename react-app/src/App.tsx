import './App.css';
import Header from "./components/header/Header";
import MainPage from "./pages/MainPage";
import {BrowserRouter as Router, Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import {FC, useEffect} from "react";
import {checkAuth, loginUser, setAuth} from "./actions/actions";
import {useDispatch} from "react-redux";
import PersonalAccountPage from "./pages/PersonalAccountPage";
import Cart from "./components/cart/Cart";

const App: FC = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        if (localStorage.getItem('token')) {
            checkAuth().then(data => {
                dispatch(setAuth(true))
                dispatch(loginUser(data!.data.user))
            })
        }
    }, [])

  return (
      <Router>
            <div className="App">
                <Header/>
                {/*<SuccessRegisterModal isOpen={true} onClose={() => console.log('s')}/>*/}
                {/*<Cart/>*/}
                <main>
                    <Routes>

                        <Route path={'/'}>

                            <Route index element={<MainPage/>}/>

                            <Route path={'personal-account/:id'} element={<PersonalAccountPage/>}/>

                        </Route>

                    </Routes>
                </main>
            </div>
      </Router>
  );
}

export default App;
