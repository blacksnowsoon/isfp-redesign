import React from "react";


export const SliderButton = (props) => {
  

  return (
    <div className="range-btn">
      <span title="light" className="light" onClick={props?.event}>
        ☀️
      </span>
      <span title="auto" className="auto" onClick={props?.event}>
        ⚡
      </span>
      <span title="dark" className="dark" onClick={props?.event}>
        🌙
      </span>
      <span className="circle"></span>
    </div>
  );
};
