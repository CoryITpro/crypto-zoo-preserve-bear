import { FaBars } from "react-icons/fa"
import { WLogo } from "resources/Logos"
import "./style.scss"

const Navbar = ({ onHandleSidebar }) => (
  <div className="navbar">
    <div className="navbar-wrapper flex">
      <div className="navbar-logo flex">
        <img src={WLogo} alt="white logo" />
        <div className="navbar-logo-text flex flex-column">
          <span>Crypto</span>
          <span>Zoo Preserve</span>
        </div>
      </div>
      <div className="navbar-buttons flex">
        <button className="flex">Connect</button>
        <button className="flex" onClick={onHandleSidebar}>
          <FaBars />
        </button>
      </div>
    </div>
  </div>
)

export default Navbar
