import { CiZoomIn } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import anatomy from "../assets/human-body-muscle-anatomy.png";
import { GiLeg } from "react-icons/gi";
import "../style/anatomy.css";
import { useState } from "react";
import StatusDashboard from "./statusDashboard";
import Activity from "./activity";

export default function Anatomy() {
  const [isClicked, setIsClicked] = useState(false);
  // the handleClick function is used for when we toggle the image it should render the information
  function handleClick(){
    setIsClicked(!isClicked);
  };

  return (
    <div className="anatomy">
      <div className="anatomy-container">
        <div className="anatomy-image" onClick={handleClick}>
          <div className="icon">
            <CiZoomIn />
          </div>
          {/* here we conditionaly rendering the data*/}
          <img src={anatomy} alt="Human anatomy" />
          {isClicked && (
            <div className="hover-content">
              <div className="heart">
                <p>
                  <FaHeart className="heart-icon" />
                  Healthy Heart
                </p>
              </div>
              <div className="leg">
                <p>
                  <GiLeg className="leg-icon" />
                  Healthy Leg
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="status-card">
        <StatusDashboard />
      </div>
      <div className="activity">
        <Activity />
      </div>
    </div>
  );
}
