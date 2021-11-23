import { BreedingImage } from "resources/Decorations"
import "./style.scss"

const Breeding = () => (
  <div className="breeding flex">
    <div className="breeding-wrapper container flex flex-column">
      <h1>
        Breeding <span>Abilities</span>
      </h1>
      <p>
        Within the Metaverse Zoo, there will be a breeding facility. But... only
        the lucky bears will be able to breed, making them special. If you hold
        two of our breedable bears, you will be able to breed a cub into the
        metaverse.
      </p>
      <img src={BreedingImage} alt="breeding" />
    </div>
  </div>
)

export default Breeding
