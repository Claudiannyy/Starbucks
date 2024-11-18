import * as S from "./Style";
import loja from "../../assets/images/loja.png";
export default function Sobre() {
  return (
    <S.Section>
      <img src={loja} alt="foto da loja" />
      <div>
        <h3>NOSSO LEGADO</h3>
        <h2>A história da Starbucks</h2>
        <p>
          Descubra o que torna a Starbucks tão única, o nosso compromisso de
          conexão humana e café de qualidade, as nossas cafeterias acolhedoras e
          os cafés deliciosos que pode desfrutar em casa.
        </p>
        <button>
          <a href="https://www.starbucks.com.br/sobre">SAIBA MAIS</a>
        </button>
      </div>
    </S.Section>
  );
}
