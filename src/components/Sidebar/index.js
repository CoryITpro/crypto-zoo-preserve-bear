import { Link } from "react-scroll"
import { NavLinks } from "constants/index"
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa"
import { OpenseaIcon } from "resources/Icons"
import "./style.scss"

const Sidebar = ({ show, onHandleSidebar }) => (
  <div
    className={`sidebar flex flex-column${show ? " sidebar-show" : ""}`}
    onClick={onHandleSidebar}
  >
    <div className="sidebar-links flex flex-column">
      {NavLinks.map((data, index) => (
        <Link
          key={index}
          className="sidebar-links-anchor"
          activeClass="active"
          to={data.toLowerCase()}
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={onHandleSidebar}
        >
          {data}
        </Link>
      ))}
    </div>
    <div className="sidebar-socials flex">
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
    </div>
    <a className="flex" href="" target="_blank" rel="noreferrer">
      <span>Join Our Discord</span>
    </a>
  </div>
)

export default Sidebar
