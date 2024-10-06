import "../App.css";

function ConfirmFoodWidget({ selectedItems, onClose }) {
  return (
    <div className="foodSearchDiv confirmDiv">
      <div style={{ marginRight: "30px", display: "flex", height: "85%" }}>
        <div className="verticalLine"></div>
        <div style={{ marginLeft: "30px", overflowY: "auto", maxHeight: "600px" }}>
          <h1>Great choice. Pickup your goods for free.</h1>
          <p>Contact the providers below to organize your food pickup.</p>

          {selectedItems.length > 0 ? (
            selectedItems.map((item, index) => (
              <div key={index} style={{ marginBottom: "10px" }}>
                <h2 style={{ marginTop: "30px" }}>
                  {item.name} from {item.user}
                </h2>
                <div style={{ display: "flex" }}>
                  <p className="contactTag">{item.phone}</p>
                  <p className="contactTag">{item.email}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No items selected.</p>
          )}

          <button
            style={{ position: "absolute", bottom: 84, width: "88%" }}
            className="button yellow"
            onClick={onClose}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmFoodWidget;
