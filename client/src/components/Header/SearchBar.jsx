import React from "react"
import styled from "styled-components"

const Containers = styled.div`
  width: 100vw;
  height: ${props => (props.showSearchBar ? "100px" : "0px")};

  background: rgb(224, 224, 224);
  border-bottom: 1px solid grey;

  display: grid;
  grid-template-columns: 1fr 1fr;

  overflow: hidden;

  transition: all 0.5s;
`

const Centered = styled.div`
  text-align: center;

  position: relative;
  top: 50%;
  transform: translate(0%, -50%);
`

const Input = styled.input`
  width: 230px;
  height: 37px;
  padding: 0 12px;
  font-size: 14px;
  border: 1px solid #ced4da;
  border-radius: 5px;
`

const SearchBar = ({ showSearchBar, location, handleChange }) => {
  return (
    <Containers showSearchBar={showSearchBar}>
      <div>
        <Centered>
          <Input
            type="text"
            placeholder="Location"
            value={location}
            onChange={i => handleChange(i)}
          />
        </Centered>
      </div>

      <div>
        <Centered>Location Search</Centered>
      </div>
    </Containers>
  )
}

export default SearchBar
