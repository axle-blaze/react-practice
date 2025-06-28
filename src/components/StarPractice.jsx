import React from 'react'
import { useState } from 'react'

function StarPractice( {initialValue, onChange}) {
  // console.log(initialValue)
  const [rating, setRating] = useState(initialValue)
  const [hover, setHover] = useState(false)
  function stars (number) {
    // console.log(rating)
    if (number < rating){
      return "*"
    }
    else if (number === rating && hover === true){
      return "^"
    }
    else if (number === rating && hover === false){
      return "*"
    }else{
      return "0"
  }
}

  const array = [1,2,3,4,5,6,7,8,9]

  // console.log("sdfgfdddddd", typeof(onChange))

return (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",   // vertically center
      alignItems: "center",       // horizontally center
      minHeight: "100vh",         // full screen height
      backgroundColor: "black",   // just to visualize
    }}
  >
    <div style={{ color: "white", marginBottom: 20 }}>
      Star Practice for the interview
    </div>

    <div style={{ display: "flex", gap: 10 }}>
      {array.map((value) => (
        <span
          key={value}
          style={{
            background: "white",
            fontSize: 100,
            border: "10px solid black",
            borderRadius: 10,
            padding: 10,
            cursor: "pointer",
            justifyContent : "center"
          }}
          onClick={() => setRating(value)}
          onMouseEnter={() => {
            setRating(value);
            setHover(true);
            onChange && onChange(value);
          }}
          onMouseLeave={() => {
            setRating(value);
            setHover(false);
            onChange && onChange(value);
          }}
        >
          {stars(value)}
        </span>
      ))}
    </div>
  </div>
);

}

export default StarPractice