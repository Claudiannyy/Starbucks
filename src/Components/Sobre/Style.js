import styled from "styled-components";
export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5% 10%;
  @media (max-width: 900px) {
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1px;
  }
  div {
    width: 50%;
    @media (max-width: 900px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 5% 0;
      width: 80%;
    }
    h3 {
      font-family: "Inter", serif;
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 1.816rem;
      text-align: left;
    }
    h2 {
      font-family: "Poppins", sans-serif;
      font-size: 4rem;
      font-weight: 400;
      line-height: 6rem;
      text-align: left;
      @media (max-width: 900px) {
        font-size: 3rem;
        font-weight: 300;
      }
      @media (max-width: 700px) {
        font-size: 1.5rem;
        font-weight: bold;
      }
    }
    p {
      font-family: "Poppins", sans-serif;
      font-size: 1.5rem;
      font-weight: 400;
      line-height: 2.25rem;
      text-align: left;
      @media (max-width: 900px) {
        text-align: center;
      }
      @media (max-width: 700px) {
        text-align: center;
      }
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
`;
