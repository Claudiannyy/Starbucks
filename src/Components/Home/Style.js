import styled from "styled-components";
export const Section = styled.section`
  width: 100vw;
  height: 50vh;
  padding: 4% 0% 0% 8%;
  .sobre {
    width: 50%;
    @media (max-width: 500px) {
      width: 90vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    h2 {
      font-family: "Inter", serif;
      line-height: 4.841rem;
      font-size: 4rem;
      font-weight: 400;
      text-align: left;
      @media (max-width: 500px) {
        font-size: 2.5rem;
        padding: 0 1% 0 0;
        font-weight: 300;
      }
      @media (max-width: 450px) {
        display: none;
      }
    }
    h1 {
      font-family: "Poppins", sans-serif;
      font-size: 4rem;
      font-weight: 400;
      line-height: 6rem;
      text-align: left;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
      span {
        font-family: "Poppins", sans-serif;
        font-size: 6rem;
        font-weight: 700;
        line-height: 9rem;
        text-align: left;
        color: #037143;
        @media (max-width: 500px) {
          font-size: 3rem;
        }
      }
      @media (max-width: 500px) {
        text-align: left;
        font-size: 2.75rem;
      }
      @media (max-width: 450px) {
        text-align: center;
      }
    }
    p {
      font-family: "Poppins", sans-serif;
      font-size: 1.5rem;
      font-weight: 400;
      line-height: 2.25rem;
      text-align: left;
    }
    button {
      margin: 5% 0;
      width: 293px;
      height: 64px;
      border-radius: 30px;
      border: none;
      cursor: pointer;
      background-color: #037143;
      color: #ffffff;
      font-family: "Inter", serif;
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 1.816rem;
      text-align: center;
    }
  }
  .opcoes-interacao {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;

    .opcoes-copos {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 8%;
      @media (max-width: 900px) {
        margin: 0 30% 0 0;
      }
      @media (max-width: 500px) {
        display: none;
      }

      .copo-laranja,
      .copo-amarelo,
      .copo-vermelho {
        cursor: pointer;
        transition: transform 0.2s ease, box-shadow 0.3s ease;
      }
      .copo-laranja:hover,
      .copo-amarelo:hover,
      .copo-vermelho:hover {
        transform: scale(1.1) translateY(-5px) rotate(10deg);
      }
    }

    .mostra-opcao {
      display: flex;
      justify-content: center;
      align-items: center;

      .fundo-circulo {
        display: flex;
        align-items: flex-end;
        position: relative;
        justify-content: center;
        width: 100%;
        height: 20vh;
        @media (max-width: 900px) {
          height: 12vh;
          width: 8vh;
        }
        @media (max-width: 500px) {
          display: none;
        }
      }
      .ilustracao-maior {
        position: absolute;
        bottom: 10%;
        right: 2%;
        height: auto;
        transition: transform 0.2s ease, box-shadow 0.3s ease;
        &:hover {
          transform: translateY(-2%) scale(1.1); /* Aumenta e gira um pouco */
          filter: brightness(1);
        }
        @media (max-width: 900px) {
          height: 30vh;
          width: 30vh;
        }
        @media (max-width: 500px) {
          display: none;
        }
      }
    }
  }
`;
