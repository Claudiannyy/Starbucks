import { useState } from "react";
import laranja from "../../assets/images/laranja.png";
import laranjaG from "../../assets/images/laranjaG.png";
import amareloG from "../../assets/images/amareloG.png";
import vermelhoG from "../../assets/images/vermelhoG.png";
import circuloVerde from "../../assets/images/circuloVerde.png";
import circuloAmarelo from "../../assets/images/circuloAmarelo.png";
import circuloVermelho from "../../assets/images/circuloVermelho.png";
import amarelo from "../../assets/images/amarelo.png";
import vermelho from "../../assets/images/vermelho.png";
import * as S from "./Style";
export default function Home() {
  const [backgroundImage, setBackgroundImage] = useState(circuloVerde);
  const [ilustracao, setIlustracao] = useState(laranjaG);
  const mudarImagens = (imagemFundo, imagemIlustracao) => {
    setBackgroundImage(imagemFundo);
    setIlustracao(imagemIlustracao);
  };
  return (
    <S.Section>
      <div className="sobre">
        <h2>Mais que Café</h2>
        <h1>
          Isso é <span>Starbucks</span>
          <p>
            A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns
            dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o
            Latte Macchiato e o Espresso. Além disso, a Starbucks oferece
            bebidas quentes e frias, doces diferenciados e sanduíches.
          </p>
        </h1>
        <button>SAIBA MAIS</button>
      </div>
      <div className="opcoes-interacao">
        <div className="opcoes-copos">
          <img
            className="copo-laranja"
            src={laranja}
            onClick={() => mudarImagens(circuloVerde, laranjaG)}
            alt="Copo laranja"
          />
          <img
            onClick={() => mudarImagens(circuloAmarelo, amareloG)}
            className="copo-amarelo"
            src={amarelo}
            alt="Copo Amarelo"
          />
          <img
            onClick={() => mudarImagens(circuloVermelho, vermelhoG)}
            className="copo-vermelho"
            src={vermelho}
            alt="Copo Vermelho"
          />
        </div>
        <div className="mostra-opcao">
          <div
            className="fundo-circulo"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            <img src={backgroundImage} alt="" />
          </div>
          <img className="ilustracao-maior" src={ilustracao} alt="" />
        </div>
      </div>
    </S.Section>
  );
}
