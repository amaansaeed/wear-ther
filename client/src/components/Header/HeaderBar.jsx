import React from "react"
import styled from "styled-components"

const Centered = styled.div`
  position: relative;
  top: 50%;
  transform: translate(0%, -50%);
`

const Container = styled.div`
  width: 100vw;
  height: 80px;

  background: rgb(24, 154, 205);

  display: grid;
  grid-template-columns: min-content auto min-content;
`

const Title = styled.div`
  text-align: center;
  color: white;
  font-size: 2em;
  padding: 0 20px;
`

const Search = styled.div`
  text-align: center;
  padding: 0 20px;
`

const Button = styled.button`
  color: white;
  font-size: 1em;
  width: 200px;
  height: 50px;
  letter-spacing: 2px;
  background: none;
  border-width: 1px;
  border-style: solid;
  border-color: white;
  border-image: initial;
  border-radius: 5px;
`

const HeaderBar = props => {
  return (
    <Container>
      <Title>
        <Centered>WearTher!</Centered>
      </Title>

      <div />

      <Search>
        <Centered>
          <Button onClick={props.handleClick}>New Forcast</Button>
        </Centered>
      </Search>
    </Container>
  )
}

export default HeaderBar
