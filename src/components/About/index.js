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
        <div className="about-wording-title flex">
          <span>Crypto Zoo</span>
          <span>Preserve</span>
        </div>
        <p>
          The Crypto Zoo Preserve is an exclusive collection of 10 000 NFTs -
          Your own digital collectibles. Starting with bears, the Zoo Preserve
          will feature four 2500 collection drops. The bears are stored as
          ERC-721 tokens on the Ethereum Blockchain and will be playable
          characters in the metaverse.
        </p>
      </div>
    </div>
  </div>
)

export default About
