import { Bear1, Bear2, Bear3, Bear4 } from "resources/Sneakpeak"
import "./style.scss"

const About = () => (
  <div className="about flex">
    <div className="about-wrapper container">
      <div className="about-sneakpeak">
        <img src={Bear1} alt="bear1" loading="lazy" />
        <img src={Bear2} alt="bear2" loading="lazy" />
        <img src={Bear3} alt="bear3" loading="lazy" />
        <img src={Bear4} alt="bear4" loading="lazy" />
      </div>
      <div className="about-wording flex flex-column">
        <div className="about-wording-section flex">
          ABOUT
          <span></span>
        </div>
        <div className="about-wording-title flex flex-column">
          <span>Crypto Zoo Preserve</span>
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
      </div>
    </div>
  </div>
)

export default About
