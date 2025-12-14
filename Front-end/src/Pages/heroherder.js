
import React from "react";
import Paraeffet from "./paraeffet";
import Texteff from "./Titreffet";

function heroherder() {
  return (
    <div>
      <div class="heroheader">
        <h1 className="heroheader--titre font-weight-bold">
          <Texteff />
        </h1>

        <p className="heroheader--para font-weight-bold">
          <Paraeffet />
        </p>
      </div>
    </div>
  );
}

export default heroherder;
