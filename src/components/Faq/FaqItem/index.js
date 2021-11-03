import { useState } from "react"
import { FaPlus, FaMinus } from "react-icons/fa"
import "./style.scss"

const FaqItem = ({ question, answer }) => {
  const [show, setShow] = useState(false)

  return (
    <div className="faq-item flex flex-column">
      <span className="flex" onClick={() => setShow(!show)}>
        {question} {show ? <FaMinus /> : <FaPlus />}
      </span>
      {show && <p>{answer}</p>}
    </div>
  )
}

export default FaqItem
