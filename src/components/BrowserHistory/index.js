import './index.css'
import {Component} from 'react'
import BrowserHistoryItem from '../BrowserHistoryItem'

class BrowserHistory extends Component {
  state = {inputValue: '', initialList: []}

  handleChange = event => {
    this.setState({inputValue: event.target.value.toLowerCase()})
  }

  onDelete = id => {
    this.setState(preVal => ({initialList: [id, ...preVal.initialList]}))
  }

  render() {
    const {historyList} = this.props
    const {inputValue, initialList} = this.state
    const filteredList = historyList.filter(
      eachItem =>
        eachItem.title.toLowerCase().includes(inputValue) &&
        !initialList.includes(eachItem.id),
    )

    return (
      <div>
        <div className="nav-sec">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="search-box">
            <input onChange={this.handleChange} type="search" />
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
            />
          </div>
        </div>
        <div className="items-container">
          <ul>
            {filteredList.map(eachItem => (
              <BrowserHistoryItem
                deleteItemFunction={this.onDelete}
                key={eachItem.id}
                details={eachItem}
              />
            ))}
          </ul>

          {initialList.length === historyList.length &&
            filteredList.length !== 0 && <p>There is no history to show</p>}

          {filteredList.length === 0 && <p>There is no history to show</p>}
        </div>
      </div>
    )
  }
}

export default BrowserHistory
