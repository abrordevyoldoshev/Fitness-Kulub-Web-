import React from "react";
import image1 from "../imge/image1.png";
import image2 from "../imge/image2.png";
import image3 from "../imge/image3.png";
import image4 from "../imge/image4.png";
import tick from "../imge/tick.png";
import nb from '../imge/nb.png'
import nike from '../imge/nike.png'
import adidas from '../imge/adidas.png'



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
        <div className="details-r">
          <div>
            <img src={tick} alt="" /> <span>OVER 140+ EXPERT COACHS</span>
          </div>
          <div>
            <img src={tick} alt="" />{" "}
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src={tick} alt="" /> <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <img src={tick} alt="" /> <span>RELIABLE PARTNERS</span>
          </div>
          <span style={{ color: "#333", fontSize: "1rem" }}>OUR PARTNERS</span>
          <div className="partners">
            <img src={nb} alt="" />
            <img src={adidas} alt="" />
            <img src={nike} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reasons;
