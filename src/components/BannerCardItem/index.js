import './index.css'

const BannerDisplay = props => {
  const {data} = props
  const {headerText, description, className} = data
  return (
    <li className={className}>
      <div>
        <h1 className="card-heading">{headerText}</h1>
        <p className="card-description">{description}</p>
        <button type="button" className="card-button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerDisplay
