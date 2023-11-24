import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'
import './index.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="container" data-testid="planets">
      <h2 className="heading">PLANETS</h2>
      <Slider {...settings} className="slide-container">
        {planetsList.map(each => (
          <PlanetItem item={each} key={each.id} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
