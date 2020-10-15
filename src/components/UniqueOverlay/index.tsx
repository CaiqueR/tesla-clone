import React from "react";

import { Container, Header, Logo, Burger, Footer } from "./styles";

const UniqueOverlay: React.FC = () => {
  return (
    <Container>
      <Header>
        <Logo />
        <Burger />
      </Header>

      <Footer>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/caiquer/">UI Clone</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/guilhermerodz/">
              Com ajuda de Guilherme Rodz
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/caiquer/">Caique Ribeiro</a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
};

export default UniqueOverlay;
