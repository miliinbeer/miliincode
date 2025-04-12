import styled from "styled-components";

export const Root = styled.div`
  height: 100vh;
  ${({ theme }) => theme.flex.itemsCenter}
  font-family:"Oswald", sans-serif;
  font-size: 200px;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 200px;
  overflow: hidden;

  a {
    color: ${({ theme }) => theme.fontColor.primary};
    transition: 0.5s ease;

    &:hover {
      padding-left: 30px;
      transition: 0.5s ease;
    }

    &:first-child::after {
      content: "Привет.";
    }

    &:first-child:hover::after {
      content: "Обо мне";
    }

    &:nth-child(2):after {
      content: "Я";
    }

    &:nth-child(2):hover::after {
      content: "Портфолио";
    }

    &:last-child::after {
      content: "Милена";
      color: ${({ theme }) => theme.fontColor.secondary};
    }

    &:last-child:hover::after {
      content: "Контакты";
    }

    @media (max-width: 1100px) {
      font-size: 150px;
      line-height: 150px;
      &:hover {
        padding-left: 0px;
        transition: 0;
      }
      &:first-child::after {
        content: "Обо мне";
      }
      &:nth-child(2):after {
        content: "Портфолио";
      }
      &:last-child::after {
        content: "Контакты";
      }
    }
    @media (max-width: 850px) {
      font-size: 120px;
      line-height: 120px;
    }
    @media (max-width: 680px) {
      font-size: 100px;
      line-height: 100px;
    }
    @media (max-width: 560px) {
      font-size: 80px;
      line-height: 80px;
    }
    @media (max-width: 450px) {
      font-size: 50px;
      line-height: 50px;
    }
  }
`;

export const Links = styled.div`
  ${({ theme }) => theme.flex.directionColumn}
`;
