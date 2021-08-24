import { useTransform } from "framer-motion";
import React from "react";
import useWrapperScroll from "../Model/useWrapperScroll";

import { Container, Header, Logo, Burger, Footer } from './styles'

const UniqueOverlay: React.FC = () => {

  const { scrollProgress } =  useWrapperScroll()

  // argumentos - 1 referencia, 2 % da referencia, 3 opacidade aplicada 
  const opacity = useTransform(scrollProgress, [0.9, 1], [0, 1])

  return (
    <Container>
      <Header>
        <Logo />
        <Burger />
      </Header>

      <Footer style={{ opacity }}>
        <ul>
          <li>
            <a href="#">UI Clone</a>
          </li>
          <li>
            <a href="#">by William</a>
          </li>
        </ul>
      </Footer>
    </Container>
  )
}

export default UniqueOverlay