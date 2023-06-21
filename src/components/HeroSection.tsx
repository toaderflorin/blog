import React from "react"
import "./HeroSection.css"

export default function Home() {
  return (
    <div id="header-container">
      <div id="header">
        <div
          style={{
            width: "830px",
            padding: "35px",
            borderRadius: "5px"          
          }}
        >
          <div style={{ color: "#555" }}>
         
              <b style={{ fontSize: "70px" }}>
                <span>florin</span>
                <b style={{ color: "#fa0265" }}>toader</b>
              </b>

            <div id="lower">
              <div />
              <div
                style={{
                  borderLeft: "3px solid #fa0265",
                  padding: "0 20px",
                  color: "black",
                }}
              >
                Welcome to my professional abode on the internet.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
