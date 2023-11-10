import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Products } from "./pages/Products/Products";

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <Link to={"/"}>Home</Link>
          <Link to={"/products"}>Products</Link>
        </nav>
      </header>
      <br />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} position={"bottom"} />
    </BrowserRouter>
  );
}

export default App;
