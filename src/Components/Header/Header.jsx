import { Link } from "react-router-dom";
import * as S from "./Style";
import logo from "../../assets/images/logoStarbucks.png";
export default function Header() {
  return (
    <S.Header>
      <img src={logo} alt="logo" />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/novidades">Novidades</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
        </ul>
      </nav>
    </S.Header>
  );
}
