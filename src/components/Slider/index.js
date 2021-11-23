import { FamousPaws } from "constants/index"
import "./style.scss"

const Slider = () => (
  <div className="slider flex flex-column">
    <div className="slider-title container">
      <div className="flex flex-column">
        <span>
          Famous <span>Paws</span>
        </span>
        <p>
          The Famous Paws Club by Crypto Zoo Preserve are the rarest NFTs. They
          are all hand drawn by our artist @klaksy.exe and share no similar
          traits with our regular collection.
        </p>
      </div>
      <a className="flex" href="" target="_blank" rel="noreferrer">
        <span>JOIN US</span>
      </a>
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
