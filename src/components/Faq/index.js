import FaqItem from "./FaqItem"
import { FaqItems } from "constants/index"
import "./style.scss"

const FAQ = () => (
  <div className="faq flex flex-column">
    <div className="faq-title">FREQUENTLY ASKED QUESTIONS</div>
    <div className="faq-wrapper container flex flex-column">
      {FaqItems.map((data, index) => (
        <FaqItem key={index} question={data.question} answer={data.answer} />
      ))}
    </div>
  </div>
)

export default FAQ
