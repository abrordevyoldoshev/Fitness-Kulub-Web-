import React from "react";
import { plansData } from "../data/plansData";
import witeTick from "../imge/whiteTick.png";
function Plans(props) {
  return (
    <div className="plans-container" id='plans'>
      <div className="blur plan-blur"></div>
      <div className="plans-content">
        <span className="stroke-text">EXPLORE OUR</span>
        <span>PROGRAMS</span>
        <span className="stroke-text">TO SHAPE YOU</span>
      </div>
      {/* Plan card started   */}
      <div className="plans">
        {plansData.map((plan, index) => (
          <div className="plan" key={index}>
            {plan.icon}
            <spam>{plan.name}</spam>
            <spam>{plan.price}</spam>
            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature" key={i}>
                  <img src={witeTick} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>See more benefits -></span>
            </div>
            <button className="btn">Join now</button>
          </div>
        ))}
      </div>
      {/* Plan card end  */}
    </div>
  );
}

export default Plans;
