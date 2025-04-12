import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../../shared/ui-kit/container";
import { Root, Links } from "./styles";

export const HomePage = () => {
  return (
    <Container>
      <Root>
        <Links>
          <Link to="/about"></Link>
          <Link to="/portfolio"></Link>
          <Link to="/contacts"></Link>
        </Links>
      </Root>
    </Container>
  );
};
