import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout/Layout";
import Error from "./components/Error";
import "./style/style.css"
import SingleProduct from "./components/Product/SingleProduct";
import Products from "./components/Product/Products";
import LoginSignUp from "./User/LoginSignUp";
import Account from "./User/account";
import { useEffect, useState } from "react";
import { loadUser } from "./actions/userAction";
import store from './store';

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, [])

  const [category, setCategory] = useState("");
  const handleClick = (value) => {
    setCategory(value);
  };
  
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout onButtonClick={handleClick}/>}>
          <Route index element={<Home onButtonClick={handleClick} />} />
          <Route path="/products" element={<Products category={category}/>}/>
          <Route path="/products/:keyword" element={<Products />}/>
          <Route path="/:id" element={<SingleProduct />}/>
          <Route path="login" element={<LoginSignUp />} />
          <Route path="account" element={<Account />} />
          <Route path="*" element={<Error />}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
