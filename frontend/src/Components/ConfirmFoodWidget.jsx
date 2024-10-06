/* eslint-disable react/prop-types */
import "../App.css";

function ConfirmFoodWidget() {
  return (
    <div className="foodSearchDiv confirmDiv">
      <div style={{ marginRight: "30px", display: "flex", height: "85%" }}>
        <div className="verticalLine"></div>
        <div style={{ marginLeft: "30px" }}>
          <h1>Great choice. Pickup your goods for free.</h1>
          <p>Contact the providers below to organize your food pickup.</p>
          {/* Insert providers contact info here */}
          <h2 style={{ marginTop: "30px" }}>
            Bok choy and strawberries from Bobby
          </h2>
          <div style={{ display: "flex" }}>
            <p className="contactTag">647-225-7161</p>
            <p className="contactTag">bb.brown@gmail.com</p>
          </div>
          <button
            style={{ position: "absolute", bottom: 84, width:"88%" }}
            className="button yellow"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmFoodWidget;
