import React from "react";

const Spacer = (props) => {
  return (
    <div>
      {new Array(props.count).fill(0).map((item) => {
        return <br />;
      })}
    </div>
  );
};

export default Spacer;
