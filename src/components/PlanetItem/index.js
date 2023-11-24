// Write your code here
import './index.css'

const PlanetItem = props => {
  const {item} = props
  const {name, imageUrl, description} = item
  return (
    <div className="courosel-container">
      <img src={imageUrl} alt={name} className="imagesize" />
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  )
}
export default PlanetItem
