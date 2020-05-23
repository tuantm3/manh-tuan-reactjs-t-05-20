import React from 'react';
import logo from './logo.svg';
import './App.css';

function Title(props) {
  return (
    <>
      <p>Product: {props.name}</p>
      <Image imageURL={props.imgURL} />
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
    </>
  )
}

function OldPrice(props) {
  return (
    <>
      <p className="discountPrice">{props.oldPrice}</p>
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

function Tag(props) {
  return (
    <>
      <p>{props.tagName}</p>
    </>
  )
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title name="Bình giữ nhiệt"  />
        <Image imgURL="https://media3.scdn.vn/img4/2020/05_22/sxueK5fiNmwVFP4Xy6hD_simg_b5529c_250x250_maxb.jpg" />
        <Price price="300,000" />
        <OldPrice oldPrice="500,000" />
        <Sale />
        <Tag tagName="FURNITURE" />
      </header>
    </div>
  );
}

export default App;
