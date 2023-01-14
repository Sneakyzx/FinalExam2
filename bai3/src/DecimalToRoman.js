import React from "react";
import convertToRoman from "./convertNumber";
import { useState } from "react";
import './App.css';



function DecimalToRoman (){
    const [input, setInput] = useState("");

    return (
        <div>
      <h1>Decimal to ROMAN</h1>
      <p>Enter your decimal number to convert</p>

      <div style={{
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <input
          className="container-input"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          maxLength="4"
        />

        {(input > 3000 || input < 0 || input % 1 != 0) ? <span style={{ color: "red" }}>Number must be interger and less than 3000</span> : ""}
      </div>

      {(input > 3000 || input < 0 || input % 1 != 0) ? "" :
        <div className="container-output">
          <h2>{convertToRoman(input)}</h2>
        </div>
      }
    </div>
    )
}

export default DecimalToRoman