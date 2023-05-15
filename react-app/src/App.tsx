import './App.css';
import Header from "./components/mainPayload/header/Header";
import MainPage from "./pages/MainPage";
import {BrowserRouter as Router, Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import {FC, useEffect} from "react";
import {checkAuth, loginUser, setAuth} from "./actions/actions";
import {useDispatch, useSelector} from "react-redux";
import PersonalAccountPage from "./pages/PersonalAccountPage";
import NewsPage from "./pages/NewsPage";
import NewsPageID from "./pages/NewsPageID";
import RegistrationSuccess from "./pages/RegistrationSuccess";
import AdminPage, {Container} from "./components/adminPayload/adminPage/AdminPage";
import {AdminLayout} from "./components/adminPayload/userTable/UserTable.style";
import Sidebar from "./components/adminPayload/sidebar/Sidebar";
import AllUsersPage from "./components/adminPayload/allUsersPage/AllUsersPage";
import UserByID from "./components/adminPayload/userByID/UserByID";
import AllProductsPage from "./components/adminPayload/allProductsPage/AllProductsPage";
import AllNewsPage from "./components/adminPayload/allNewsPage/AllNewsPage";
import ProductByID from "./components/adminPayload/productByID/ProductByID";
import NewsByID from "./components/adminPayload/newsByID/NewsByID";
import OplataPage from "./pages/OplataPage";
import ChangePassword from "./pages/ChangePassword";
import VKLogin from "./pages/VKLogin";
import ErrorPage from "./pages/404";


type layoutCheck = {
    adminLayout: boolean;
}

const App: FC = () => {
    const {adminLayout} = useSelector((state: layoutCheck) => state)
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

                <main>
                    {adminLayout ? null : <Header/>}
                    <Routes>

                        <Route path={'/'}>

                            <Route index element={<MainPage/>}/>

                            <Route path={'personal-account/:id'} element={<PersonalAccountPage/>}/>

                            <Route path={'news'} element={<NewsPage/>}/>

                            <Route path={'news/:id'} element={<NewsPageID/>}/>

                            <Route path={'register-success'} element={<RegistrationSuccess/>}/>

                            <Route path={'oplata'} element={<OplataPage/>}/>

                            <Route path={'change-password/:id'} element={<ChangePassword/>}/>

                            <Route path={'vk-login/:id'} element={<VKLogin/>}/>

                        </Route>

                    </Routes>
                </main>
                <AdminLayout>
                    <Sidebar/>
                    <Container>
                    <Routes>


                        <Route path={'/admin'}>

                            <Route index element={<AdminPage/>}/>

                            <Route path={'users'} element={<AllUsersPage/>}/>

                            <Route path={'users/:id'} element={<UserByID/>}/>

                            <Route path={'products'} element={<AllProductsPage/>}/>

                            <Route path={'products/:id'} element={<ProductByID/>}/>

                            <Route path={'news'} element={<AllNewsPage/>}/>

                            <Route path={'news/:id'} element={<NewsByID/>}/>

                            <Route path={'*'} element={<ErrorPage/>}/>

                        </Route>

                    </Routes>
                    </Container>
                </AdminLayout>
            </div>
      </Router>
  );
}

export default App;
