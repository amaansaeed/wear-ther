import React from "react"
import styled from "styled-components"

// containers

//  styled components
const Wrapper = styled.div`
  margin-bottom: 40px;
  height: 560px;
  width: 380px;
  padding: 25px 40px;
  border-radius: 10px;
  /* background: rgba(255, 255, 255, 0.4); */
  background: white;

  position: relative;
`

const Title = styled.div`
  font-size: 25px;
  font-weight: 600;
`

const Hr = styled.hr`
  height: 1px;
  background: lightgrey;
  border: none;
  width: 70%;
  margin-left: 0;
`

const ComingSoon = styled.div`
  position: relative;
  top: 40%;
  transform: translate(0, -50%);

  text-align: center;
  font-size: 40px;
  font-weight: 700;
`

const BitmojiWidget = props => {
  return (
    <Wrapper>
      <Title>
        What to Wear
        <Hr />
      </Title>
      <ComingSoon>
        <div>Bitmoji guide returning soon!</div>
      </ComingSoon>
    </Wrapper>
  )
}

export default BitmojiWidget
