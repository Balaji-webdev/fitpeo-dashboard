import { FaPlus } from "react-icons/fa";
import '../style/sidePage.css'
import Calender from "./Calender";
import Appointment from "./appointment";
export default function SidePage() {
  return (
    <>
    {/* in the sidePage we just use it for the button and wrapping the two components */}
      <div className="sidepage">
        <div className="sidepage-wrapper">
          <div className="sidepage-button">
            <button className="sidebtn1">
              <img
                src="https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_90,w_1400/fl_lossy,pg_1/ic7defqune831dh9orwm/memoji-2"
                alt="userLogo"
                
              />
            </button>
            <button className="sidebtn2">
            <FaPlus color="white" />
            </button>
          </div>
          <div className="calender">
            <Calender/>
          </div>
          <div className="appoint">
            <Appointment/>
          </div>
        </div>
      </div>
    </>
  );
}
