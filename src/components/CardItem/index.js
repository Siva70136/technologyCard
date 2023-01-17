// Write your code here.
import './index.css'

const CardItem = prop => {
  const {cardInfo} = prop
  const {title, description, imgUrl, className} = cardInfo

  return (
    <li className={`box ${className}`}>
      <h1 className="head">{title}</h1>
      <p className="desc">{description}</p>
      <img src={imgUrl} alt={title} className="image" />
    </li>
  )
}

export default CardItem
