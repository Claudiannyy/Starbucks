import styled from "styled-components";
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2% 6%;
  font-family: "Poppins", sans-serif;
  @media (max-width: 900px) {
    flex-direction: column;
  }
  img {
    width: 6vw;
  }
  nav {
    width: 20vw;
    @media (max-width: 900px) {
      width: 80vw;
      padding: 0 5%;
    }
    ul {
      display: flex;
      justify-content: space-between;
      li {
        list-style: none;
        color: #1e3932;
        cursor: pointer;
        font-size: 1.5rem;
        font-weight: 400;
        line-height: 2.25rem;
      }
      li:hover {
        filter: brightness(2.8);
      }
    }
  }
`;
