import Free from "./Free";
import "./Plan.css";
import Platinum from "./Platinum";
import Premium from "./Premium";
function Plan() {
  // const card = {h1}
  return (
    <>
      <div className="plan-heading">
        Premium plan for your business <br />
        starting as low as <span className="price"> NPR 29/day.</span>
      </div>
      <div className="discount-offer">
        Save 25% on our yearly subscription as an early adopter with our
        discount offer
      </div>
      <div className="three-plans">
        <Free/>
        <Premium/>
        <Platinum/>
      </div>
    </>
  );
}
export default Plan;
