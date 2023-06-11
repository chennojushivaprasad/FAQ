// Write your code here.

import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="container">
        <h1 className="heading">FAQs</h1>
        <ul className="faq-items">
          {faqsList.map(obj => (
            <FaqItem item={obj} key={obj.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Faqs


