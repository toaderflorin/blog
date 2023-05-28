import React from "react"
import "./HeroSection.css"

export default function Home() {
  return (
    <div id="header-container">
      <div id="header">
        <div
          style={{
            width: "830px",
            backdropFilter: "blur(3px)",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            padding: "35px",
            borderRadius: "5px",
            boxShadow:'0 0 35px 0 rgba(0, 0, 0, 0.1)'
          }}
        >
          <div style={{ color: "#555" }}>
            <div>
              <b style={{ fontSize: "70px" }}>
                <span>florin</span>
                <b style={{ color: "#fa0265" }}>toader</b>
              </b>
            </div>
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
