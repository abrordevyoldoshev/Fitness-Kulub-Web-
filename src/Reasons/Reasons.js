import React from "react";
import image1 from "../imge/image1.png";
import image2 from "../imge/image2.png";
import image3 from "../imge/image3.png";
import image4 from "../imge/image4.png";
import tick from '../imge/tick.png'

function Reasons(props) {
  return (
    <section className="Reasons" id="reasons">
      <div className="left-r">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className="right-r">
        <span>some reasons</span>
        <div>
          <span className="stroke-text">why </span>
          <span>choose us</span>
        </div>

        <div className='details-r'>
          <div>
            <img src={tick} alt="" /> <span></span>
          </div>
          <div>
            <img src={tick} alt="" /> <span></span>
          </div>
          <div>
            <img src={tick} alt="" /> <span></span>
          </div>
          <div>
            <img src={tick} alt="" /> <span></span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reasons;
