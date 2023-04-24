// Write your code here.

import './index.css'

const TechnologiesDetails = props => {
  const {details} = props
  const {title, description, imgUrl, className} = details

  return (
    <div className="technology_card">
      <h1 className="title"> {title} </h1>
      <p className="descr">{description} </p>
      <div className="image_container">
        <img className="card_img" src={imgUrl} alt={title} />
      </div>
    </div>
  )
}
export default TechnologiesDetails
