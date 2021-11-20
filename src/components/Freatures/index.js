import { FeatureImage } from "resources/Decorations"
import "./style.scss"

const Feature = () => (
  <div className="features flex">
    <div className="features-wrapper container">
      <div className="features-wording flex flex-column">
        <div className="features-wording-section flex">
          Feature
          <span></span>
        </div>
        <div className="features-wording-title flex flex-column">
          <span>An Exclusive</span>
          <span>Zoo Preserve</span>
        </div>
        <p>
          For each animal’s collection, there will be{" "}
          <span>12 Famous Paws</span> randomly minted. The holder of a{" "}
          <span>Famous Paw</span> will be awarded <span>$5000</span> as well as
          a <span>$1000 donation</span> under their name to{" "}
          <span>(name of preserve)</span>.
        </p>
        <p>
          Holders of <span>Famous Paws</span> will also be granted special
          access to live events and <span>future</span> animal drops.
        </p>
      </div>
      <div className="features-sneakpeak flex">
        <img src={FeatureImage} alt="sneakpeak gif" loading="lazy" />
      </div>
    </div>
  </div>
)

export default Feature
