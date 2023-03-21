import './index.css'

const BrowserHistoryItem = props => {
  const {details, deleteItemFunction} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = details
  const deleteItem = () => {
    deleteItemFunction(id)
  }

  return (
    <li>
      <p>{timeAccessed}</p>
      <img className="domain-logo" src={logoUrl} alt="domain logo" />
      <p className="title">{title}</p>
      <p>{domainUrl}</p>
      <button data-testid="delete" type="submit" onClick={deleteItem}>
        <img
          className="delete-icon"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default BrowserHistoryItem
