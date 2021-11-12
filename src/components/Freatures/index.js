import { FaArrowRight } from "react-icons/fa"
import { Random } from "resources/Sneakpeak"
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
          For each animal’s collection, there will be 12 famous paws randomly
          minted. The holder of a famous paw will be awarded $5000 as well as a
          $1000 donation under their name to (name of preserve). Holders of
          famous paws will also be granted special access to live events and
          future animal drops.
        </p>
        <a className="flex" href="" target="_blank" rel="noreferrer">
          <button>Join Us</button>
          <FaArrowRight />
        </a>
      </div>
      <div className="features-sneakpeak">
        <img src={Random} alt="sneakpeak gif" loading="lazy" />
      </div>
    </div>
  </div>
)

export default Feature
