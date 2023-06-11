// Write your code here.

import {Component} from 'react'
import './index.css'

class ShowAnswer extends Component {
  render() {
    const {answerText} = this.props
    return (
      <div className="item-answer-container">
        <p className="answerText">{answerText}</p>
      </div>
    )
  }
}

export default ShowAnswer

