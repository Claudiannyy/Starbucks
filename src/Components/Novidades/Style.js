import styled from "styled-components";
export const Section = styled.section`
  background-color: #1e3932;
  height: 81.3vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5% 8%;
  @media (max-width: 700px) {
    height: 100%;
    flex-direction: column-reverse;
    padding: 0px;
  }
  div {
    width: 50%;
    color: white;
    @media (max-width: 700px) {
      width: 80%;

      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      align-items: center;
      justify-content: center;
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
    }
    p {
      font-family: "Poppins", sans-serif;
      font-size: 1.5rem;
      font-weight: 400;
      line-height: 2.25rem;
      text-align: left;
    }
    button {
      cursor: pointer;
      margin: 5% 0;
      width: 293px;
      height: 64px;
      border-radius: 30px;
      border: none;
      background-color: #037143;
      color: #ffffff;
      font-family: "Inter", serif;
      font-size: 1.25rem;
      font-weight: 700;
      line-height: 1.816rem;
      text-align: center;
    }
  }
`;
