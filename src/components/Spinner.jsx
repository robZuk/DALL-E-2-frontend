import React from "react";
import { ThreeDots } from "react-loader-spinner";

function Spinner() {
  return (
    <div className="spinner">
      <ThreeDots
        height="200"
        width="80"
        radius="9"
        color="#f1c40f"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
}

export default Spinner;
