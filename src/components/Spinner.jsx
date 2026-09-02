import React from 'react'
import { ClipLoader } from 'react-spinners'
const overide = {
  display: "block",
  margin: "100px auto",
};

function Spinner({loading}) {
  return (
    <div>
      <ClipLoader size={50} color={"#123abc"} loading={loading} cssOverride={overide} />
    </div>
  )
}

export default Spinner