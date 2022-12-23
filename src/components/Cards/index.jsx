import React from "react"
import { Row } from "../Navbar/styles"
import { Container, Rows, TextInfo, Text, Paragraph, ImageCard } from './styles'

const Cards = ({ text, paragraph, button, image }) => {
  return (
    <Container>
      <Rows>
        <TextInfo>
          <Text>{text}</Text>
          <Paragraph>{paragraph}</Paragraph>
        </TextInfo>
      </Rows>
      <Rows>
        <ImageCard src={image} />
      </Rows>
    </Container>
  )
}

export { Cards }