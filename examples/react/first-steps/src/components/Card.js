import React from "react";

const Card = ({ name, age , isHuman, children }, props) => {
  console.log("PROPS:", name, age, isHuman);
  
  return (
    <React.Fragment>
      <div>
        <h1>{children}</h1>
      </div>
    </React.Fragment>
  );
};

export default Card;