import { useState } from "react"
import { FaChevronUp, FaChevronDown } from "react-icons/fa"
import "./style.scss"

const FaqItem = ({ question, answer }) => {
  const [show, setShow] = useState(false)

  return (
    <div className="faq-item flex flex-column">
      <span className="flex" onClick={() => setShow(!show)}>
        {question} {show ? <FaChevronUp /> : <FaChevronDown />}
      </span>
      {show && <p>{answer}</p>}
    </div>
  )
}

export default FaqItem
