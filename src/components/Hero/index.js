import { useState, useEffect } from "react"
import { calculateTimeLeft } from "helpers/timer"
import { HeroBanner } from "resources/Decorations"
import { FaSpinner, FaPlusCircle, FaMinusCircle } from "react-icons/fa"
import "./style.scss"

const Hero = ({ soldout, mintloading }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  }, [timeLeft])

  return (
    <div className="hero flex">
      <div className="hero-wrapper container flex flex-column">
        <img src={HeroBanner} alt="hero banner" />
        <div className="hero-minter">
          <div className="hero-minter-title flex">
            {soldout
              ? "Check Grizzles on Opensea"
              : Object.keys(timeLeft).length === 0
              ? "Get grab your Grizzlies"
              : "Join our discord for more information"}
          </div>
          <div className="hero-minter-controller flex flex-column">
            {soldout ? (
              <div className="hero-minter-soldout flex">Sold Out</div>
            ) : Object.keys(timeLeft).length === 0 ? (
              <>
                <p>Max mint is 20 Grizzles</p>
                <div className="hero-minter-controller-counter flex">
                  <FaMinusCircle />
                  <span>20</span>
                  <FaPlusCircle />
                </div>
                <div className="hero-minter-controller-price flex">{1} ETH</div>
                <div className="hero-minter-controller-minter flex">
                  <button className="flex">
                    {mintloading === true && <FaSpinner />}
                    Mint
                  </button>
                </div>
              </>
            ) : (
              <>
                <p>Public Sale will start in</p>
                <div className="hero-minter-controller-clock">
                  <div className="hero-minter-controller-clock-timer flex flex-column">
                    <div className="flex">
                      <span>{timeLeft.days[0]}</span>
                      <span>{timeLeft.days[1]}</span>
                    </div>
                    <span>Days</span>
                  </div>
                  <div className="hero-minter-controller-clock-timer flex flex-column">
                    <div className="flex">
                      <span>{timeLeft.hours[0]}</span>
                      <span>{timeLeft.hours[1]}</span>
                    </div>
                    <span>Hours</span>
                  </div>
                  <div className="hero-minter-controller-clock-timer flex flex-column">
                    <div className="flex">
                      <span>{timeLeft.minutes[0]}</span>
                      <span>{timeLeft.minutes[1]}</span>
                    </div>
                    <span>Minutes</span>
                  </div>
                  <div className="hero-minter-controller-clock-timer flex flex-column">
                    <div className="flex">
                      <span>{timeLeft.seconds[0]}</span>
                      <span>{timeLeft.seconds[1]}</span>
                    </div>
                    <span>Seconds</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
