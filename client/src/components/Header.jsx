import React from "react"
import styled from "styled-components"

//  containers
import HeaderContainer from "../containers/HeaderContainer"

//  styled-components
const Wrapper = styled.div`
  height: ${props => (props.show ? "180px" : "100px")};
  transition: 0.5s all;
  position: relative;
  margin-bottom: 30px;
`

const TopBar = styled.div`
  width: 100vw;
  height: 100px;
  padding: 0 30px;

  position: absolute;
  top: 0;
  z-index: 3;

  background: rgb(24, 154, 205);

  display: grid;
  grid-template-columns: min-content auto min-content;

  & > div {
    width: max-content;
    height: max-content;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
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
  cursor: pointer;
  color: white;
  font-size: 1em;
  width: 200px;
  height: 50px;
  letter-spacing: 2px;
  background: none;
  border: 1px solid white;
  border-radius: 5px;
`

const BottomBar = styled.div`
  width: 100vw;
  height: 80px;
  position: absolute;
  bottom: 0;
  z-index: 2;

  background: rgb(224, 224, 224);
  border-bottom: 1px solid grey;

  & > div {
    width: max-content;
    display: grid;
    grid-template-columns: max-content max-content;
    grid-column-gap: 20px;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    transition: all 0.5s;

    & > div {
      width: max-content;
      height: max-content;
    }

    & button {
      cursor: pointer;

      width: 80px;
      height: 37px;
      padding: 0 12px;
      font-size: 14px;
      border: 1px solid #ced4da;
      border-radius: 5px;
    }
  }
`

const Input = styled.input`
  width: 400px;
  height: 37px;
  padding: 0 12px;
  font-size: 14px;
  border: 1px solid #ced4da;
  border-radius: 5px;
`

const SearchOptions = styled.div`
  width: ${props => (props.show ? "400px" : "0px")};

  max-height: fit-content;
  position: absolute;

  margin-top: 4px;
  border-radius: 3px;
  background: white;
  border: 1px solid lightslategrey;

  font-size: 13px;
  font-weight: 300;

  & div {
    margin: 5px;
    padding: 10px;

    &:hover {
      background: lightsalmon;
    }
  }
`

const Header = ({
  toggleSearchBar,
  showSearchBar,
  location,
  handleSearchChange,
  search,
  getWeather,
  searchOptions
}) => {
  return (
    <Wrapper show={showSearchBar}>
      <TopBar>
        <Title>WearTher!</Title>

        <div />

        <Search>
          <Button onClick={toggleSearchBar}>New Forcast</Button>
        </Search>
      </TopBar>

      <BottomBar>
        <div>
          <div>
            <Input
              type="text"
              placeholder="Location"
              value={location}
              onChange={handleSearchChange}
            />
            <SearchOptions show={searchOptions.length > 0}>
              {searchOptions.map((el, i) => (
                <div onClick={getWeather} data-index={i} key={i}>
                  {el.name}
                </div>
              ))}
            </SearchOptions>
          </div>

          <div>
            <button onClick={search}>Search</button>
          </div>
        </div>
      </BottomBar>
    </Wrapper>
  )
}

export default HeaderContainer(Header)
