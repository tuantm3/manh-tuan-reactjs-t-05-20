import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';

const products = [
  {
    tag: "Furniture",
    name: "Ấm nước",
    imgURL: "https://media3.scdn.vn/img4/2020/05_22/sxueK5fiNmwVFP4Xy6hD_simg_b5529c_250x250_maxb.jpg",
    price: "120,000",
    discountPrice: "100,000"
  },
  {
    tag: "Furniture",
    name: "Ấm nước",
    imgURL: "https://media3.scdn.vn/img4/2020/02_27/1CyQhihZtTbxzEoR6Gkx_simg_b5529c_250x250_maxb.jpg",
    price: "120,000",
    discountPrice: "100,000"
  },
  {
    tag: "Furniture",
    name: "Ấm nước",
    imgURL: "https://media3.scdn.vn/img4/2020/05_22/sxueK5fiNmwVFP4Xy6hD_simg_b5529c_250x250_maxb.jpg",
    price: "120,000",
    discountPrice: "100,000"
  },
]

function Title(props) {
  return (
    <>
      <p>Product: {props.name}</p>
      <p>Tag: {props.tag}</p>
    </>
  )
}

function Image(props) {
  return (
    <img src={props.imgURL} />
  )
}

function Price(props) {
  return (
    <>
      <p>Price: {props.price}</p>
      <strike>{props.discountPrice}</strike>
    </>
  )
}

function Sale() {
  return (
    <>
      <button class="btnSale">Sale</button>
    </>
  )
}


function ProductItem(props) {
  return (
    <div>
      <Image imgURL={props.data.imgURL}/>
      <Title tag={props.data.tag} name={props.data.name}/>
      <Price price={props.data.price} discountPrice={props.data.discountPrice}/>
    </div>
  )
}

// function App() {
//   return (
//     <div className="products">
//       {
//         products.map(elm => {
//           return <ProductItem data={elm} />
//         })
//       }
//     </div>
//   );
//     }

    function App() {
      return (
        <Layout>
        <div className="products">
          {
            products.map(elm => {
              return <ProductItem data={elm} />
            })
          }
        </div>
        </Layout>
      );
        }

export default App;
