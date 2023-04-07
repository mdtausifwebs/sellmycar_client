import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./components/Landingpage";
import AddProduct from "./components/addProduct/AddProduct";
import Inventory from "./components/Inventory/Inventory";
import Header from "./components/Header/Header";
import SignUp from "./components/profile/SignUp";
import Login from "./components/profile/Login";
import { useDispatch, useSelector } from "react-redux";
import { getuser,logoutuser } from "./redux/action/userAction";
import { useEffect } from "react";
import Profile from "./components/profile/Profile";
import { GetCars } from "./redux/action/carsAction";
function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.ReducerUser);
  // console.log('user', user);
  useEffect(() => {
    dispatch(getuser());
    dispatch(GetCars())
  }, [dispatch, user?.name]);
  const logoutHandler = () => {
    dispatch(logoutuser());
  };
  return (
    <BrowserRouter>
      <div className="App">
        <Header logoutHandler={logoutHandler} />
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
      ;
    </BrowserRouter>
  );
}

export default App;
