import { FaLinkedin, FaInstagram } from "react-icons/fa"
import { TeamMembers } from "constants/index"
import "./style.scss"

const Team = () => (
  <div className="team flex flex-column">
    <div className="team-title container flex flex-column">
      <span>OUR TEAM</span>
      <p>
        The Billionaire club was created by a team of digital native:
        Entrepreneurs, Blockchain experts, Marketing wizards, and Artists… We
        are committed to delivering a cutting-edge experience and making this
        project a success.
      </p>
    </div>
    <div className="team-wrapper container">
      {TeamMembers.map((data, index) => (
        <div key={index} className="team-member-item flex flex-column">
          <img src={data.avatar} alt="avatar" />
          <span>{data.name}</span>
          <span>{data.role}</span>
          <div className="team-member-social flex">
            {data.instagram !== "" && (
              <a
                className="flex"
                href={data.instagram}
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
            )}
            {data.linkedin !== "" && (
              <a
                className="flex"
                href={data.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default Team
