import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout/Layout";
import Error from "./components/Error";
import "./style/style.css"
import SingleProduct from "./components/Product/SingleProduct";
import Products from "./components/Product/Products";
import LoginSignUp from "./User/LoginSignUp";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />}/>
          <Route path="/products/:keyword" element={<Products />}/>
          <Route path="/:id" element={<SingleProduct />}/>
          <Route path="login" element={<LoginSignUp />} />

          <Route path="*" element={<Error />}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
