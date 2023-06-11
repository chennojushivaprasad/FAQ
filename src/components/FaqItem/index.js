// Write your code here.
// Write your code here.

import {Component} from 'react'
import './index.css'
import ShowAnswer from '../ShowAnswer'

class FaqItem extends Component {
  state = {answerTextActive: false}

  displayAnswerText = () =>
    this.setState(prevState => ({
      answerTextActive: !prevState.answerTextActive,
    }))

  render() {
    const {item} = this.props
    const {questionText, answerText} = item
    const {answerTextActive} = this.state

    const imgUrl = answerTextActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png '
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const altText = answerTextActive ? 'minus' : 'plus'
    return (
      <li className="item">
        <div className="item-question-container">
          <h1 className="questionText">{questionText}</h1>
          <button
            className="button"
            type="button"
            onClick={this.displayAnswerText}
          >
            <img src={imgUrl} alt={altText} />
          </button>
        </div>
        {answerTextActive && <ShowAnswer answerText={answerText} />}
      </li>
    )
  }
}

export default FaqItem

