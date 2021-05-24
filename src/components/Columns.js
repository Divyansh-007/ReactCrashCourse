import React from "react";

function Columns() {
  return (
    //   another way for React.Fragment. Drawback is that we can't pass any attribute like key or something.
    <>
      <td>Name</td>
      <td>Divyansh</td>
    </>
    // <React.Fragment>
    //   <td>Name</td>
    //   <td>Divyansh</td>
    // </React.Fragment>
  );
}

export default Columns;
