import { useState } from "react";
import Categories from "./Categories.jsx";
import Products from "./Products.jsx";

function App() {
  return (
    <>
      <section id="carousel">
      </section>
      <section id="categories">
        <Categories />
      </section>
      <section id="offers"></section>
      <section id="products">
        <Products />
      </section>
    </>
  );
}

export default App;
