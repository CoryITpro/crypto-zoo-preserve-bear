import { Link } from "react-scroll"
import { NavLinks } from "constants/index"
import { FaLinkedin, FaInstagram, FaTwitter, FaBars } from "react-icons/fa"
import { OpenseaIcon } from "resources/Icons"
import "./style.scss"

const Navbar = ({ onHandleSidebar }) => (
  <div className="navbar flex">
    <div className="navbar-wrapper container flex">
      <div className="navbar-logo flex flex-column">
        <span>Crypto Zoo Preserve</span>
        <span>Grizzlies</span>
      </div>
      <div className="navbar-links">
        {NavLinks.map((data, index) => (
          <Link
            key={index}
            className="navbar-links-anchor"
            activeClass="active"
            to={data.toLowerCase()}
            spy={true}
            smooth={true}
            offset={-96}
            duration={500}
          >
            {data}
          </Link>
        ))}
      </div>
      <div className="navbar-socials flex">
        <a className="flex" href="" target="_blank" rel="noreferrer">
          <OpenseaIcon />
        </a>
        <a className="flex" href="" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a
          className="flex"
          href="https://instagram.com/cryptozoopreserve"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          className="flex"
          href="https://twitter.com/preservezoo"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter />
        </a>
        <a className="flex" href="" target="_blank" rel="noreferrer">
          <span>Join Our Discord</span>
        </a>
        <button className="flex" onClick={onHandleSidebar}>
          <FaBars />
        </button>
      </div>
    </div>
  </div>
)

export default Navbar
