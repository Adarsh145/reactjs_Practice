// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    randomNumber: 0,
  }
  generateNumber = () => {
    this.setState({
      randomNumber: Math.floor(Math.random() * 101),
    })
  }
  render() {
    return (
      <div className="bg-main">
        <div className="bg-cont">
          <h1 className="main-heading">Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button type="button" onClick={this.generateNumber} className="btn">
            Generate
          </button>
          <p className="randomNumber">{this.state.randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
