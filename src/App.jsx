import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout";
import Content from "./components/Content";
import ProductItem from "./components/ProductItem";
import SideBar from "./components/SideBar";

const products = [
  {
    type: "Furniture",
    name: "POP! ROCKS: 10'' NOTORIOUS B.I.G WITH CROWN",
    imageURL:
      "https://cdn.shopify.com/s/files/1/1052/2158/products/48587_NotoriousBIG_BiggieCrown_10inPOP_FrontView_WEB_440x.png",
    price: "120.000 VND",
    discountPrice: "100.000 VND",
  },
  {
    type: "Tablet",
    name: "RAIN CITY FREDDY VINYL FIGURE",
    imageURL:
      "https://cdn.shopify.com/s/files/1/1052/2158/products/29371_440x.png",
    price: "720.000 VND",
    discountPrice: "520.000 VND",
  },
  {
    type: "Baby",
    name: "POP! ANIMATION: 10'' HUCKLEBERRY HOUND",
    imageURL:
      "https://cdn.shopify.com/s/files/1/1052/2158/products/47351_HannaBarbara_HuckleberryHound10_POP_GLAM-1_440x.png",
    price: "110.000 VND",
    discountPrice: "78.000 VND",
  },
];

function App() {
  return (
    <Layout>
      <Content quantity={products.length}>
          
          {/* // imgURL={products[0].imgURL}
          // tag={products[0].tag}
          // name={products[0].name}
          // price={products[0].price}
          // discountPrice={products[0].discountPrice}/> */}
              {
        products.map(elm => { 
          return <ProductItem {...elm} />
        })
  }
      </Content>
  
      <SideBar />
    </Layout>
  );
}

export default App;