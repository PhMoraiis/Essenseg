import React from 'react'
import { Wrapper, Container, Row, Menu, Logo } from './styles'

import ImageLogo from '../../assets/LogoNomes.png'


const Navbar = () => {
    return (
      <Wrapper>
            <Container>
                <Row>
                    <Logo src={ImageLogo} />
                </Row>
                <Row>
                    <Menu>Home</Menu>
                    <Menu>Sobre Nós</Menu>
                    <Menu>Serviços</Menu>
                    <Menu>Contato</Menu>
                    <Menu>Feedbacks</Menu>
                </Row>
            </Container>
        </Wrapper>
    )
  }
  
export { Navbar }