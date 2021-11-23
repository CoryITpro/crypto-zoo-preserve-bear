import { AboutImage } from "resources/Decorations"
import ScrollAnimation from "react-animate-on-scroll"
import "./style.scss"

const About = () => (
  <ScrollAnimation animateIn="fadeIn">
    <div className="about flex">
      <div className="about-wrapper container">
        <div className="about-sneakpeak flex">
          <img src={AboutImage} alt="feature" />
        </div>
        <div className="about-wording flex flex-column">
          <div className="about-wording-section flex">
            About
            <span></span>
          </div>
          <div className="about-wording-title flex flex-column">
            <span>Crypto Zoo</span>
            <span>Preserve</span>
          </div>
          <p>
            <span>The Crypto Zoo Preserve</span> is an exclusive collection of{" "}
            <span>10 000 NFTs</span> - Your own digital collectibles. Starting
            with bears.
          </p>
          <p>
            <span>The Zoo Preserve</span> will feature{" "}
            <span>four 2500 collection drops.</span>
            The bears are stored as <span>ERC-721 tokens</span> on the{" "}
            <span>Ethereum Blockchain</span> and will be playable characters in
            the metaverse.
          </p>
        </div>
      </div>
    </div>
  </ScrollAnimation>
)

export default About
