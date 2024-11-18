import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Novidades from "./Components/Novidades/Novidades";
import Sobre from "./Components/Sobre/Sobre";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
box-sizing:border-box;
margin: 0;
padding: 0;
    box-sizing: border-box;
  }
body{ 
color: #1e3932;
}
  a {
    text-decoration: none;
    color:inherit;
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/novidades" element={<Novidades />}></Route>
          <Route path="/sobre" element={<Sobre />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
