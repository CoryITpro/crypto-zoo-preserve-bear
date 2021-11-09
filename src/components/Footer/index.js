import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa"
import { OpenseaIcon } from "resources/Icons"
import "./style.scss"

const Footer = () => (
  <div className="footer flex">
    <div className="footer-wrapper container flex flex-column">
      <div className="footer-logo flex flex-column">
        <span>Crypto Zoo Preserve</span>
        <span>Grizzlies</span>
      </div>
      <div className="footer-socials flex">
        <a className="flex" href="" target="_blank" rel="noreferrer">
          <OpenseaIcon />
        </a>
        <a className="flex" href="" target="_blank" rel="noreferrer">
          <FaDiscord />
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
      <div className="footer-contract">
        <a className="flex" href="" target="_blank" rel="noreferrer">
          0x1234567890987654321012345678909876543210
        </a>
      </div>
      <div className="footer-copyright">
        © 2021 Crypto Zoo Preserve. All rights reserved
      </div>
    </div>
  </div>
)

export default Footer
