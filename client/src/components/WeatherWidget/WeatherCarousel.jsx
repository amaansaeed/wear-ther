import React from "react"
import styled from "styled-components"

//  Slides
import Slide1 from "./SlideForecast"
import Slide2 from "./SlideMetrics"
//  const Slides = [Slide1]

//  Styled Components
const Container = styled.div`
  padding: 20px 0px;
`

const Hr = styled.hr`
  height: 1px;
  background: lightgrey;
  border: none;
  width: 75%;
`

const Slide = styled.div`
  height: 120px;
`

const WeatherCarousel = props => {
  return (
    <Container>
      <Hr />
      <div id="carouselControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <Slide className="carousel-item active">
            <Slide1 />
          </Slide>
          <Slide className="carousel-item">
            <Slide2 />
          </Slide>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselControls"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselControls"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </Container>
  )
}

export default WeatherCarousel
