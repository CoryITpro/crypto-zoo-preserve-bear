import { FamousPaws } from "constants/index"
import "./style.scss"

const Slider = () => (
  <div className="slider flex flex-column">
    <div className="slider-title container">
      <span>FAMOUS PAWS</span>
      <div className="flex flex-column">
        <span>
          The Famous Paws edition by the bearly famous club is the rarest of the
          NFTs. They are individual drawn and will represent a large role in our
          club.
        </span>
        <a className="flex" href="" target="_blank" rel="noreferrer">
          <span>JOIN US TO REGISTER FOR PRESALE</span>
        </a>
      </div>
    </div>
    <div className="slider-slide flex">
      {FamousPaws.map((data, index) => (
        <div key={index} className="slider-slide-item flex flex-column">
          <img src={data.image} alt="baby yo bear" />
          <span>{data.title}</span>
        </div>
      ))}
    </div>
  </div>
)

export default Slider
