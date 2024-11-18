import torra from "../../assets/images/torra.png";
import * as S from "./Style";
export default function Novidades() {
  return (
    <S.Section>
      <div>
        <h3>PREPARAÇÃO</h3>
        <h2>Níveis de torra</h2>
        <p>
          Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra
          Escura? Estas sãos as torras que fazem parte dos níveis de torra
          Starbucks®
        </p>
        <button>
          <a href="http://www.starbucksathome.com/br/blog/niveis-de-torra.html">
            SAIBA MAIS
          </a>
        </button>
      </div>
      <img src={torra} alt="torra" />
    </S.Section>
  );
}
