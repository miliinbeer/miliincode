import styled from "styled-components";

export const Root = styled.div`
  a {
    color: ${({ theme }) => theme.color.primary};
    font-family: "Oswald", sans-serif;
    font-size: 30px;
    font-weight: 700;
    text-transform: lowercase;
    transition: 0.5s ease;

    &:hover {
      padding-left: 30px;
      transition: 0.5s ease;
    }

    &:first-child:before {
      content: "Miliincode.";
    }

    &:first-child:hover:before {
      content: "Miliincode.";
    }
    &:first-child:hover::after {
      content: "Home";
      color: ${({ theme }) => theme.color.secondary};
    }
    @media (max-width: 1100px) {
      &:hover {
        padding-left: 0px;
      }
      &:first-child:before {
        content: "Miliincode.";
      }
      &:first-child:after {
        content: "Home";
        color: ${({ theme }) => theme.color.secondary};
      }
    }
    @media (max-width: 560px) {
      font-size: 20px;
    }
  }
`;
