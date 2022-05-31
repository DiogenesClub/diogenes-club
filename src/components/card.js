import React from 'react'
import { Button, Container, Content, Title } from './card.style'

const Card = ({title, description, url}) => {
  return (
    <Container>
        <Content>
            <Title>{title}</Title>
           <p>{description}</p>
            <Button to={`/post/${url}`}>More</Button>
        </Content>
    </Container>
  )
}

export default Card