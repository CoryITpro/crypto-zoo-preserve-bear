import { RoadmapSteps } from "constants/index"
import "./style.scss"

const Roadmap = () => (
  <div className="roadmap flex">
    <div className="roadmap-wrapper container flex flex-column">
      <div className="roadmap-title">LAUNCH ROADMAP</div>
      <p>
        As we value our community and its creativity, our roadmap will be
        updated according to your comments and ideas.
      </p>
      <div className="roadmap-items flex flex-column">
        {RoadmapSteps.map((data, index) => (
          <div key={index} className="roadmap-items-step flex">
            <div className="milestone flex">
              {`${data.percentage}`}
              <span>%</span>
            </div>
            <div className="wording flex flex-column">
              <span>{data.title}</span>
              <p>{data.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default Roadmap
