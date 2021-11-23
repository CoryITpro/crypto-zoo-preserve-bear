import { RoadmapSteps } from "constants/index"
import "./style.scss"

const Roadmap = () => (
  <div className="roadmap flex">
    <div className="roadmap-wrapper container flex flex-column">
      <div className="roadmap-title">ROADMAP</div>
      <p>
        As we value our community and its creativity, our roadmap will be
        updated according to your comments and ideas.
      </p>
      <div className="roadmap-items flex flex-column">
        {RoadmapSteps.map((data, index) => (
          <div key={index} className="roadmap-items-step">
            <div className="milestone flex">
              <div className="line"></div>
              <div className="dot"></div>
            </div>
            <div className="wording flex flex-column">
              <span>{data.percentage} %</span>
              {data.content.map((data, index) => (
                <p key={index}>{data}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default Roadmap
