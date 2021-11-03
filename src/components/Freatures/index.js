import { FaArrowRight } from "react-icons/fa"
import { Bear1 } from "resources/Sneakpeak"
import "./style.scss"

const Feature = () => (
  <div className="features flex">
    <div className="features-wrapper container">
      <div className="features-wording flex flex-column">
        <div className="features-wording-section flex">
          FEATURE
          <span></span>
        </div>
        <div className="features-wording-title flex flex-column">
          <span>A Private Grizzly Club</span>
          <span>Grizzlies</span>
        </div>
        <p>
          Lorem Ipsum dolar sit Lorem Ipsum dolar sit Lorem Ipsum dolar sit
          Lorem Ipsum dolar sit Lorem Ipsum dolar sit Lorem Ipsum dolar sit
          Lorem Ipsum dolar sit Lorem Ipsum dolar sit Lorem Ipsum dolar sit
        </p>
        <p>
          Lorem Ipsum dolar sit Lorem Ipsum dolar sit Lorem Ipsum dolar sit
          Lorem Ipsum dolar sit Lorem Ipsum dolar sit Lorem Ipsum dolar sit
          Lorem Ipsum dolar sit Lorem Ipsum dolar sit Lorem Ipsum dolar sit
        </p>
        <a className="flex" href="" target="_blank" rel="noreferrer">
          <button>Join Us</button>
          <FaArrowRight />
        </a>
      </div>
      <div className="features-sneakpeak">
        <img src={Bear1} alt="sneakpeak gif" loading="lazy" />
      </div>
    </div>
  </div>
)

export default Feature
