import React from "react"
import styled from "styled-components"

//  containers
import HeaderContainer from "../containers/HeaderContainer"

//  styled-components
const Wrapper = styled.div`
  height: ${props => (props.show ? "140px" : "60px")};
  transition: 0.5s all;
  position: relative;
  margin-bottom: 30px;
`

const TopBar = styled.div`
  width: 100vw;
  height: 60px;
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
  font-size: 25px;
  padding: 0 20px;
`

const Search = styled.div`
  text-align: center;
  padding: 0 20px;
`

const Button = styled.button`
  cursor: pointer;
  color: white;
  font-size: 16px;
  width: 150px;
  height: 40px;
  background: none;
  border: 1px solid white;
  border-radius: 4px;
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

  & hr {
    width: 25%;
    margin: auto;
    /* margin-left: 25%; */
    border: none;
    height: 1px;
    background: lightgrey;
  }

  & div {
    cursor: pointer;
    margin: 5px;
    padding: 10px;

    border-radius: 2px;

    &:hover {
      background: rgba(24, 154, 205, 0.3);
    }
  }
`

const Header = ({
  toggleSearchBar,
  showSearchBar,
  location,
  handleKeyPress,
  handleSearchChange,
  search,
  getWeather,
  searchOptions
}) => {
  return (
    <Wrapper show={showSearchBar}>
      <TopBar>
        <Title>Wear-ther</Title>

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
              onKeyPress={handleKeyPress}
            />
            <SearchOptions show={searchOptions.length > 0}>
              {searchOptions.map((el, i) => (
                <React.Fragment key={i}>
                  {i === 0 ? null : <hr />}
                  <div onClick={getWeather} data-index={i} key={i}>
                    {el.name}
                  </div>
                </React.Fragment>
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
